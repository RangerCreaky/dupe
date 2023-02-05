

const About = () => {
    return (
        <>
            {/* <Navbar /> */}
            <div className='w-full md:h-[104px] h-[210px] -z-10 bg-white'></div>
            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img
                            class="object-cover object-center rounded"
                            alt="hero"
                            src="./images/webp/welcome-venus.webp"
                        />
                    </div>
                    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-semibold text-[#D2AC47]">
                            About Us
                            <br class="hidden lg:inline-block" />
                        </h1>
                        <p class="mb-8 leading-relaxed text-gray-900 text-left">
                            The journey of success began with the first retail showroom at
                            Hanamakonda in 1986 and second at Chikkadapally, Hyderabad. We
                            launched our flagship store Hanamkonda in October 2019. Skilled
                            artisans, gold smiths, silver smiths, engravers and polishers,
                            masters of each craft in making precious jewellery contribute to
                            the manufacturing excellence in Venus Jewellers. Highest standards
                            of craftsmanship that bring out the magic of gold with designs in
                            an ensemble of diamonds, rubies, emeralds, sapphires, pearls and
                            other precious stones. Visit, See & Shop from a vast collection of
                            handcrafted gorgeous pieces of Diamond Jewellery, Gold Polki,
                            Stone, Plain and Temple Jewellery along with our lustrous Pearl
                            Jewellery collection.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
