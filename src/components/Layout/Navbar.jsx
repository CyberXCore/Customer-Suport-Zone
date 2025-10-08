import React, { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navMenuItems = [
        { name: "Home", href: "#" },
        { name: "FAQ", href: "#faq" },
        { name: "Changelog", href: "#changelog" },
        { name: "Blog", href: "#blog" },
        { name: "Download", href: "#download" },
        { name: "Contact", href: "#contact" },
    ]

    return (
        <nav className="bg-white sticky top-0 z-50 shadow">
            <div className="container mx-auto py-2 md:py-4">
                <div className="flex justify-between items-center px-4 md:px-0">
                    
                    <div className="flex items-center">
                        <span className="text-2xl font-bold text-[#130B2D]">
                            CS — Ticket System
                        </span>
                    </div>


                    <div className="hidden md:flex items-center gap-8">
                        {navMenuItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-black hover:text-[#130B2D] py-2 text-[16px] font-medium transition duration-150 ease-in-out"
                            >
                                {item.name}
                            </a>
                        ))}
                        

                        <button
                            className=" text-white px-4 py-2 rounded text-[16px] bg-gradient-to-br from-[#632EE3] to-[#9F62F2] font-medium transition duration-150 ease-in-out shadow-md"
                            onClick={() => console.log('New Ticket clicked')}
                        >
                            + New Ticket
                        </button>
                    </div>


                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>

                            {isOpen ? (

                                <span className="text-xl">✕</span>
                            ) : (
                                <span className="text-xl">☰</span>
                            )}
                        </button>
                    </div>
                </div>
            </div>

           
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {navMenuItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="block text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-md px-3 py-2 text-base font-medium transition duration-150 ease-in-out"
                        >
                            {item.name}
                        </a>
                    ))}
                    
                    <button
                        className="w-full text-center text-white px-4 py-2 rounded text-[16px] bg-gradient-to-br from-[#632EE3] to-[#9F62F2] font-medium transition duration-150 ease-in-out mt-1"
                        onClick={() => {
                            console.log('New Ticket clicked (Mobile)');
                            setIsOpen(false);
                        }}
                    >
                        + New Ticket
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar