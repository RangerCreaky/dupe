import React from 'react';
import Card from './Card';

import { featured } from '../utils/featured';

const CardRender = () => {
    const renderFeatured = () => {
        return featured.map((card) => {
            return <Card src={card.src} text={card.text} price={card.price} />;
        });
    };
    return (
        <>
            <div className="text-center flex flex-col justify-center items-center">
                <h2 className="text-5xl font-bold text-bg-800">
                    {" "}
                    Featured Collection{" "}
                </h2>
                <hr className="w-40 h-1 mt-4 bg-[#D2AC47]" />
                <p className="text-lg mt-4"> Brand new beads collection </p>
            </div>
            <div className='flex m-8 flex-col md:flex-row justify-center items-center'>
                {renderFeatured()}
            </div>
        </>

    )
}

export default CardRender;