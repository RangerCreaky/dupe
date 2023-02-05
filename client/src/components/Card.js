import React from 'react';
import { NavLink } from 'react-router-dom'


const Card = ({ id, src, name, category, price, shopCard = false }) => {
    return (
        <section className={`shadow-2xl border-2 border-[#D2AC47] text-gray-600 body-font rounded-lg mt-8 mx-4 mb-16`}>
            <div className="container px-5 py-8 pt-4 mx-auto">
                <div className="flex flex-wrap">
                    <div className="">
                        <NavLink to={`/product/${id}`}>
                            <div className="block relative h-64 bg-gray-200 rounded-full overflow-hidden">

                                <img alt="ecommerce" className="transition duration-200 ease-in hover:scale-125 object-cover object-center w-64 h-64 block" src={`${src}`} />
                            </div>

                            <div className="mt-4 border-t-2 border-[#D2AC47] ">
                                <h3 className="text-center text-gray-500 text-xs tracking-widest title-font mb-1 mt-4">{category}</h3>
                                <h2 className="mt-2 text-center text-gray-900 title-font text-lg font-medium">{`${name}`}</h2>
                                <p className="text-center font-bold mt-1"> &#x20B9; {`${price}`}</p>
                            </div>
                        </NavLink>

                    </div>
                </div>
            </div>
        </section >
    )
}

export default Card;