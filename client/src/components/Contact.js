const ContactUs = () => {
    return (
        <>
            <div className='w-full md:h-[104px] h-[180px] -z-10 bg-white'></div>
            <div class="px-5 py-24 flex justify-around items-center sm:flex-nowrap flex-wrap">
                <div className=' flex flex-col justify-center items-center'>
                    <h2 className='text-center text-4xl font-bold text-bg-800'> Hyderabad </h2>
                    <hr className='w-28 h-1 mt-4 bg-[#D2AC47]' />

                    <iframe className="sm:hidden mt-4 border-2 w-80 h-80 shadow-2xl border-[#D2AC47]" title="hyderabad" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30457.656815444774!2d78.49523!3d17.401846!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1b9fe9cc3053db7f!2sVenus%20Jewellers!5e0!3m2!1sen!2sin!4v1674152688916!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    <iframe className="mt-4 border-2 shadow-2xl sm:block hidden border-[#D2AC47]" title="hyderabad" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30457.656815444774!2d78.49523!3d17.401846!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1b9fe9cc3053db7f!2sVenus%20Jewellers!5e0!3m2!1sen!2sin!4v1674152688916!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

                <div className=' sm:mt-0 mt-16 flex flex-col justify-center items-center'>
                    <h2 className=' text-center text-4xl font-bold text-bg-800'> Hanamkonda </h2>
                    <hr className='w-28 h-1 mt-4 bg-[#D2AC47] ' />

                    <iframe className="sm:hidden mt-4 border-2 w-80 h-80 shadow-2xl border-[#D2AC47]" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15177.610580975123!2d79.575401!3d18.006508!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1bcbee1d1a555735!2sVenus%20Jewellers!5e0!3m2!1sen!2sin!4v1674152531971!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" title="hanamkonda" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    <iframe className="mt-4 border-2 shadow-2xl sm:block hidden border-[#D2AC47]" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15177.610580975123!2d79.575401!3d18.006508!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1bcbee1d1a555735!2sVenus%20Jewellers!5e0!3m2!1sen!2sin!4v1674152531971!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" title="hanamkonda" referrerPolicy="no-referrer-when-downgrade"></iframe>

                </div>
            </div>
        </>
    );
};

export default ContactUs;