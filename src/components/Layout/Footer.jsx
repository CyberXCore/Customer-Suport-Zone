import React from "react";
import { FaXTwitter, FaLinkedinIn, FaFacebookF, FaEnvelope  } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-20 pb-8">
            <div className="container mx-auto flex flex-col gap-20 px-4 md:px-0">
                <div className="flex flex-col md:flex-row gap-8 justify-between">
                    <div className="w-full md:w-2/6 text-center md:text-start flex flex-col gap-4">
                        <a href="#" className="text-white font-bold text-[24px]">CS — Ticket System</a>
                        <p className="text-[16px] md:w-3/4 text-[#A1A1AA]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div className="w-full md:w-1/6 text-center md:text-start flex flex-col gap-4">
                        <h2 className="text-[20px] font-medium text-white">Company</h2>
                        <div className="flex flex-col gap-4">
                            <a href="#" className="text-[#A1A1AA] text-[16px] font-normal hover:text-[#A1A1AA]">About Us</a>
                            <a href="#" className="text-[#A1A1AA] text-[16px] font-normal hover:text-[#A1A1AA]">Our Mission</a>
                            <a href="#" className="text-[#A1A1AA] text-[16px] font-normal hover:text-[#A1A1AA]">Contact Saled</a>
                        </div>
                    </div>
                    <div className="w-full md:w-1/6 text-center md:text-start flex flex-col gap-4">
                        <h2 className="text-[20px] font-medium text-white">Services</h2>
                        <div className="flex flex-col gap-4">
                            <a href="#" className="text-[#A1A1AA] text-[16px] font-normal hover:text-[#A1A1AA]">Products & Services</a>
                            <a href="#" className="text-[#A1A1AA] text-[16px] font-normal hover:text-[#A1A1AA]">Customer Stories</a>
                            <a href="#" className="text-[#A1A1AA] text-[16px] font-normal hover:text-[#A1A1AA]">Download Apps</a>
                        </div>
                    </div>
                    <div className="w-full md:w-1/6 text-center md:text-start flex flex-col gap-4">
                        <h2 className="text-[20px] font-medium text-white">Information</h2>
                        <div className="flex flex-col gap-4">
                            <a href="#" className="text-[#A1A1AA] text-[16px] font-normal hover:text-[#A1A1AA]">Privacy Policy</a>
                            <a href="#" className="text-[#A1A1AA] text-[16px] font-normal hover:text-[#A1A1AA]">Terms & Conditions</a>
                            <a href="#" className="text-[#A1A1AA] text-[16px] font-normal hover:text-[#A1A1AA]">Join Us</a>
                        </div>
                    </div>
                    <div className="w-full md:w-1/6 text-center md:text-start flex flex-col gap-4">
                        <h2 className="text-[20px] font-medium text-white">Social Links</h2>
                        <div className="flex flex-col gap-4">
                            <a href="#" className="text-[#A1A1AA] text-[16px] font-normal hover:text-[#A1A1AA] flex gap-2 justify-center md:justify-start items-center">
                                <span className="w-5 h-5 bg-[#A1A1AA] rounded-full text-black p-1 flex justify-center items-center">
                                    <FaXTwitter />
                                </span>
                                @CS — Ticket System
                            </a>
                            <a href="#" className="text-[#A1A1AA] text-[16px] font-normal hover:text-[#A1A1AA] flex gap-2 justify-center md:justify-start items-center">
                                <span className="w-5 h-5 bg-[#A1A1AA] rounded-full text-black p-1 flex justify-center items-center">
                                    <FaLinkedinIn />
                                </span>
                                @CS — Ticket System
                            </a>
                            <a href="#" className="text-[#A1A1AA] text-[16px] font-normal hover:text-[#A1A1AA] flex gap-2 justify-center md:justify-start items-center">
                                <span className="w-5 h-5 bg-[#A1A1AA] rounded-full text-black p-1 flex justify-center items-center">
                                   <FaFacebookF />
                                </span>
                                @CS — Ticket System
                            </a>
                            <a href="#" className="text-[#A1A1AA] text-[16px] font-normal hover:text-[#A1A1AA] flex gap-2 justify-center md:justify-start items-center">
                               <span className="w-5 h-5 bg-[#A1A1AA] rounded-full text-black p-1 flex justify-center items-center">
                                   <FaEnvelope />
                                </span>
                                support@cst.com
                            </a>
                        </div>
                    </div>
                </div>
                <p className="text-center text-sm border-t pt-4 border-[#E5E7EB] text-[#FAFAFA]">
                   @ {new Date().getFullYear()} CS — Ticket System. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;