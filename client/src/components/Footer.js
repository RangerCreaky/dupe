import { NavLink } from 'react-router-dom';
import { ImFacebook2 } from 'react-icons/im';
import { BsInstagram } from 'react-icons/bs';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaPinterestSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (

        <footer className="border-t-2 border-[#D2AC47] text-gray-800 body-font bg-[#FFFFF4] p-4">

            {/* Logo and contact */}
            <div className="container px-[20px] py-[50px] mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap sm:flex-nowrap flex-wrap flex-col">

                {/* Logo */}
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <NavLink to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 ">
                        <div className="flex bg-[#FFFFF4] p-2 rounded-lg">
                            <img className=" w-92 h-92 " src="./images/logo/logo-full.png" alt="logo" />

                        </div>
                    </NavLink>
                </div>

                {/* Contact and social media */}
                <div className="flex md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center sm:flex-nowrap flex-wrap ">
                    <div className=" px-4">
                        <nav className="list-none mb-10">
                            <li className="border-b-2 border-[#D2AC47] mb-4">
                                <p className="font-black text-[#D2AC47]  cursor-pointer text-[22px]"> Hanamkonda </p>
                            </li>
                            <li>
                                <p className="text-[##242846]  cursor-pointer"><span className="font-semibold text-[##242846]">Address</span> : Bus Stand Road, Chowrastha, Kakaji Nagar Colony, Hanamkonda Warangal Dist, Telangana.</p>
                            </li>
                            <li>
                                <p className="text-[##242846] cursor-pointer"><span className="font-semibold text-[##242846]">Phone no</span>  : 0870 - 2578 695 , 0870 - 2555 508</p>
                            </li>
                            <li>
                                <p className="text-[##242846] cursor-pointer"><span className="font-semibold text-[##242846]">Email</span> : venusjewellers1987@gmail.com </p>
                            </li>
                        </nav>
                    </div>
                    <div className=" px-4">
                        <nav className="list-none mb-10">
                            <li className="border-b-2 border-[#D2AC47] mb-4">
                                <p className="font-black text-[#D2AC47]  cursor-pointer text-[22px]"> Hyderabad </p>
                            </li>
                            <li>
                                <p className="text-[##242846]  cursor-pointer"><span className="font-semibold text-[##242846]">Address</span> : Door No 1-8-52/2 & 3, Sri Rama Complex, Chikadpally Main Road, Chikkadpally, Hyderabad - 500020</p>
                            </li>
                            <li>
                                <p className="text-[##242846] cursor-pointer"><span className="font-semibold text-[##242846]">Phone no</span>  : 040-27665242</p>
                            </li>
                            <li>
                                <p className="text-[##242846] cursor-pointer"><span className="font-semibold text-[##242846]">Email</span> : venusjewellers1987@gmail.com</p>
                            </li>
                        </nav>
                    </div>

                    {/* Social media */}
                    <div className=" px-4">
                        <nav className="list-none sm:mb-10 sm:ml-12 ">
                            <div className="flex md:flex-col flex-wrap justify-center align-center">
                                <li className="md:mt-0 md:flex mx-2">
                                    <a href="https://www.facebook.com/venusjewellerswarangal/" className="text-[29px] text-[#D2AC47] cursor-pointer hover:text-gray-500"><ImFacebook2 /> </a>
                                </li>
                                <li className="md:mt-4 mx-2">
                                    <a href="https://www.instagram.com/_venus_jewellers_/" className="text-[29px] text-[#D2AC47] cursor-pointer hover:text-gray-500"><BsInstagram /></a>
                                </li>
                                <li className="md:mt-4 mx-2">
                                    <a href="https://twitter.com/venus_jewellers" className="text-[29px] text-[#D2AC47] cursor-pointer hover:text-gray-500"><FaTwitterSquare /></a>
                                </li>
                                <li className="md:mt-4 mx-2">
                                    <a href="https://in.pinterest.com/venusdigitalteam/" className="text-[29px] text-[#D2AC47] cursor-pointer hover:text-gray-500"><FaPinterestSquare /></a>
                                </li>
                                <li className="md:mt-4 mx-2">
                                    <a href="https://www.linkedin.com/in/venus-jewellers-online-aa8385250/" className="text-[29px] text-[#D2AC47] cursor-pointer hover:text-gray-500"><FaLinkedin /></a>
                                </li>
                                <li className="md:mt-4 mx-2">
                                    <a href="https://www.youtube.com/shorts/j4fr2HcFNio" className="text-[29px] text-[#D2AC47] cursor-pointer hover:text-gray-500"><FaYoutube /></a>
                                </li>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="bg-gray-100">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row justify-center">
                    <p className="text-gray-500 text-sm text-center sm:text-left">© 2023 The Venus Jewellers. All Copyrights Reserved
                    </p>
                </div>
            </div>

        </footer>
    );
}

export default Footer;



