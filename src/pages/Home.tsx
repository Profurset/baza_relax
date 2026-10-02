import React from 'react';
import RoomCard from '../components/RoomCard';
import Gallery from '../components/Gallery';
import ContactForm from '../components/ContactForm';
import YandexMap from '../components/YandexMap';
import Reviews from '../components/Reviews';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';

const Home: React.FC = () => {
    const rooms = [
        {
            name: 'Эконом',
            price: 3000,
            description: 'Уютный номер для двоих с удобствами.',
        },
        {
            name: 'Стандарт',
            price: 4500,
            description: 'Просторный номер с видом на озеро.',
        },
        {
            name: 'Люкс',
            price: 7000,
            description: 'Премиум номер с джакузи и террасой.',
        },
    ];

    return (
        <main className="font-sans text-textPrimary bg-background">
            <section id="about" className="py-16 bg-white">
                <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl">
                    <h2 className="text-4xl font-bold mb-8 text-primary">Добро пожаловать в «Лесную сказку 31»</h2>
                    <p className="text-lg leading-relaxed text-gray-700 mb-6">
                        База отдыха «Лесная сказка 31» расположена в Белгороде.
                        Здесь каждый найдёт гармонию с природой и забудет о городской суете.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-700 mb-6">
                        Наши уютные домики выполнены в стиле деревенского минимализма: натуральная древесина, мягкий
                        свет камина,
                        удобные кровати и вид из окна, от которого захватывает дух. Здесь сочетаются простота и комфорт,
                        чтобы вы могли
                        чувствовать себя как дома, но вдали от привычной рутины.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-700 mb-6">
                        Гостей ждут блюда домашней кухни, приготовленные с заботой.
                        Вечером можно прогуляться по лесу, искупаться в озере или просто посидеть у костра с чашкой чая.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-700">
                        Для любителей активного отдыха доступны экскурсии, рыбалка, катание на лодке и баня на дровах.
                        А тем, кто ценит тишину и одиночество, предложим тихую террасу, книгу и звёздное небо над
                        головой.
                    </p>
                </div>
            </section>
            <section id="rooms" className="py-16 bg-white">
                <div className="container mx-auto px-6 md:px-12">
                    <h2 className="text-3xl font-bold mb-8 text-center text-primary">Наши номера</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                        {rooms.map((room, i) => (
                            <RoomCard key={i} {...room} />
                        ))}
                    </div>
                </div>
            </section>

            <WhyUs/>

            <Services/>

            <Gallery/>

            <Reviews/>

            <ContactForm/>

            <YandexMap/>
        </main>
    );
};

export default Home;