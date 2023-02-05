const paginate = (model) => {
    return async (req, res, next) => {
        const page = parseInt(req.query.page);
        const limit = parseInt(req.query.limit);

        const startIndex = (page - 1) * limit;
        const endIndex = (page * limit);

        results = {};

        // next if it is not the last page
        if (endIndex < await model.countDocuments().exec()) {
            results.next = {
                page: page + 1,
                limit
            }
        }

        // previous if it is not the first page
        if (startIndex > 0) {
            results.prev = {
                page: page - 1,
                limit
            }
        }

        try {
            results.data = await model.find().limit(limit).skip(startIndex);
            res.paginatedResults = results;
            next();
        } catch (err) {
            if (err) console.err(err);
            res.status(500).send('server error')
        }
    }
}

module.exports = paginate;