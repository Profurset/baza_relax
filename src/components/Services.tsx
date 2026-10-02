import React from 'react';
import { FaTree, FaFish, FaHotTub, FaHiking } from 'react-icons/fa';

const services = [
    { icon: <FaTree />, title: "Прогулки в лесу", description: "Маршруты по живописным местам Белгорода." },
    { icon: <FaFish />, title: "Рыбалка", description: "Лучшие места для рыбалки рядом с базой." },
    { icon: <FaHotTub />, title: "Баня на дровах", description: "Традиционная русская баня в природе." },
    { icon: <FaHiking />, title: "Экскурсии", description: "Гиды покажут вам красоты региона." },
];

const Services: React.FC = () => {
    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-6 md:px-12">
                <h2 className="text-3xl font-bold text-center mb-10">Дополнительные услуги</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, i) => (
                        <div key={i} className="bg-white p-6 rounded-lg shadow-md text-center">
                            <div className="text-accent text-4xl mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;