import { useState } from "react";
import { Link } from "react-router-dom";
import OnlineStatus from "../utils/onlineStatus";
import { LOGO_Url } from "../utils/common";

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const status = OnlineStatus();

    return (
        <header className="header bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg sticky top-0 z-20 ">
            <div className="max-w-[1300px] m-auto text-md">

                <div className="flex justify-between items-center px-5 py-3 md:px-10">

                    <div className="flex items-center gap-2">
                        <Link to="/">
                            <img src={LOGO_Url} alt="Logo" className="w-12 h-12 rounded-full" />
                        </Link>
                        <h1 className="text-2xl font-bold ">Be<span className="text-yellow-500">Chef</span></h1>
                    </div>

                    <nav className="hidden md:block">
                        <ul className="flex gap-12 items-center">
                            <li className="hover:text-yellow-300">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="hover:text-yellow-300">
                                <Link to="/about">About Us</Link>
                            </li>
                            <li>Online Status: {status ? "✅" : "🔴"}</li>
                        </ul>
                    </nav>

                    <button
                        className="block md:hidden text-2xl"
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    >
                        ☰
                    </button>
                </div>

                <div
                    className={`fixed top-0 left-0 w-64 bg-blue-600 text-white h-full shadow-lg transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                        } transition-transform duration-300 z-30`}
                >
                    <button
                        className="text-2xl absolute top-4 right-4"
                        onClick={() => setIsSidebarOpen(false)}
                    >
                        ✕
                    </button>
                    <ul className="flex flex-col gap-7 mt-20 px-6">
                        <li className="hover:text-yellow-300">
                            <Link to="/" onClick={() => setIsSidebarOpen(false)}>Home</Link>
                        </li>
                        <li className="hover:text-yellow-300">
                            <Link to="/about" onClick={() => setIsSidebarOpen(false)}>About US</Link>
                        </li>
                        <li>Online Status: {status ? "✅" : "🔴"}</li>
                    </ul>
                </div>

                {isSidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-10"
                        onClick={() => setIsSidebarOpen(false)}
                    ></div>
                )}
            </div>
        </header>
    );
};

export default Header;
