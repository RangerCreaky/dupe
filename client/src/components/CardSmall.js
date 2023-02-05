import React from 'react';

const CardSmall = ({ src, text }) => {
    return (
        <div className='  w-[180px] h-[180px] rounded flex flex-col mx-6 justify-center items-center border border-[#D2AC47] m-4  shadow-2xl' >
            <img className="hover:scale-105 delay-200 transition ease-in w-[148px] h-[103px]" src={`${src}`} alt="" />
            <h6 className="mt-2 bg-[#FFD700] px-2 py-1 text-xs font-bold  rounded-full text-gray-800"> {text} </h6>
        </div>
    )
}

export default CardSmall;