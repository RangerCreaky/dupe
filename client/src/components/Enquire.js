import React from 'react';

const ContactUs = () => {
    return (
        <>
            <div className='w-full md:h-[104px] h-[200px] -z-10 bg-white'></div>
            <div class=" bg-white flex flex-col md:ml-auto  md:py-8 mt-8 md:mt-0 items-center justify-center w-full">
                <div>

                    <div className='text-center flex flex-col justify-center items-center'>
                        <h2 className='text-4xl font-bold text-bg-800'> Enquire </h2>
                        <hr className='w-24 h-1 mt-4 bg-[#D2AC47]' />
                        <p className='text-lg mt-4'> Please fill the details, We will get back to you </p>
                    </div>
                    <div class=" mt-8 mb-4">
                        <label for="name" class="leading-7 text-sm text-gray-600">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            class="w-full bg-white rounded border border-[#D2AC47] focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div class="  mb-4">
                        <label for="email" class="leading-7 text-sm text-gray-600">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            class="w-full bg-white rounded border border-[#D2AC47] focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div class="  mb-4">
                        <label for="phone" class="leading-7 text-sm text-gray-600">
                            Phone Number
                        </label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            class="w-full bg-white rounded border border-[#D2AC47] focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div class="  mb-4">
                        <label for="message" class="leading-7 text-sm text-gray-600">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            class="w-full bg-white rounded border border-[#D2AC47] focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                        ></textarea>
                    </div>
                    <button class="w-full text-white bg-[#c7b279] border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded uppercase text-lg mx-auto">
                        Send
                    </button>
                    <p class="text-center text-xs text-gray-500 mt-3 mb-4">Thanks for shopping. Regards venus Jewellers</p>
                </div>
            </div>
        </>
    );
};

export default ContactUs;
