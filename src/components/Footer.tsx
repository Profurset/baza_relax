import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className="bg-primary text-white mt-12">
            <div className="container mx-auto px-6 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">База отдыха "Лесная сказка 31"</h3>
                        <p className="text-sm">
                            Уютная база отдыха в живописном месте Белгорода. Идеальное место для отдыха с семьёй и друзьями.
                        </p>
                    </div>

                    {/* Контакты */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Контакты</h3>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                                <FaMapMarkerAlt /> город Белгород, Шатохин лес
                            </li>
                            <li className="flex items-center gap-2">
                                <FaPhoneAlt /> +7 (952) 424-97-45
                            </li>
                            <li className="flex items-center gap-2">
                                <FaEnvelope /> 1558944@bsuedu.ru
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Полезные ссылки</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#about" className="hover:text-secondary transition">О нас</a></li>
                            <li><a href="#rooms" className="hover:text-secondary transition">Номера</a></li>
                            <li><a href="#contacts" className="hover:text-secondary transition">Контакты</a></li>
                            <li><a href="#reviews" className="hover:text-secondary transition">Отзывы</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="bg-black bg-opacity-10 py-4 text-center text-sm">
                <p>© 2025 База отдыха "Лесная сказка 31". Все права защищены.</p>
            </div>

            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed right-6 bottom-6 bg-accent hover:bg-primary text-white p-3 rounded-full shadow-lg transition"
                aria-label="Вернуться наверх"
            >
                ↑
            </button>
        </footer>
    );
};

export default Footer;