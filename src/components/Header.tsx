import React from 'react';
import { FaTree, FaInfoCircle, FaBed, FaPhone, FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-primary text-white shadow-xl">
            <div className="container px-6 py-6 flex justify-between items-center">
                <a href="#" className="flex items-center gap-3 hover:text-secondary transition duration-300 group">
                    <div className="text-accent bg-white p-2 rounded-full w-12 h-12 flex items-center justify-center group-hover:bg-secondary transition duration-300 shadow-lg">
                        <FaTree className="text-xl text-accent" />
                    </div>
                    <h1 className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-white to-secondary bg-clip-text text-transparent shadow-md">
                        Лесная сказка 31
                    </h1>
                </a>

                {/* Десктопное меню */}
                <nav className="hidden md:flex space-x-8">
                    <a
                        href="#about"
                        className="flex items-center gap-2 group px-3 py-2 rounded-lg hover:bg-secondary hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105"
                    >
                        <FaInfoCircle className="text-secondary group-hover:text-white transition-colors duration-300" />
                        <span className="group-hover:text-white transition-colors duration-300 font-semibold">О нас</span>
                    </a>
                    <a
                        href="#rooms"
                        className="flex items-center gap-2 group px-3 py-2 rounded-lg hover:bg-secondary hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105"
                    >
                        <FaBed className="text-secondary group-hover:text-white transition-colors duration-300" />
                        <span className="group-hover:text-white transition-colors duration-300 font-semibold">Номера</span>
                    </a>
                    <a
                        href="#contacts"
                        className="flex items-center gap-2 group px-3 py-2 rounded-lg hover:bg-secondary hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105"
                    >
                        <FaPhone className="text-secondary group-hover:text-white transition-colors duration-300" />
                        <span className="group-hover:text-white transition-colors duration-300 font-semibold">Контакты</span>
                    </a>
                </nav>

                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
                >
                    {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>
            {isMenuOpen && (
                <nav className="md:hidden bg-primary px-6 pb-4 pt-2">
                    <ul className="flex flex-col space-y-4">
                        <li>
                            <a
                                href="#about"
                                className="flex items-center gap-2 p-2 rounded-lg hover:bg-secondary hover:bg-opacity-20 transition-all duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <FaInfoCircle className="text-secondary" />
                                <span className="font-medium">О нас</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#rooms"
                                className="flex items-center gap-2 p-2 rounded-lg hover:bg-secondary hover:bg-opacity-20 transition-all duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <FaBed className="text-secondary" />
                                <span className="font-medium">Номера</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contacts"
                                className="flex items-center gap-2 p-2 rounded-lg hover:bg-secondary hover:bg-opacity-20 transition-all duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <FaPhone className="text-secondary" />
                                <span className="font-medium">Контакты</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Header;