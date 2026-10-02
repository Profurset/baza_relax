import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface RoomImage {
    src: string;
    title: string;
    price: number;
}

const rooms: RoomImage[] = [
    {
        src: '/src/assets/images/lodge_economy.png',
        title: 'Эконом',
        price: 3000,
    },
    {
        src: '/src/assets/images/lodge_standard.png',
        title: 'Стандарт',
        price: 4500,
    },
    {
        src: '/src/assets/images/lodge_luxury.png',
        title: 'Люкс',
        price: 7000,
    },
];

const Gallery: React.FC = () => {
    return (
        <section id="gallery" className="py-12 bg-white">
            <div className="container mx-auto px-6 md:px-12">
                <h2 className="text-3xl font-bold text-center mb-8">Наши номера</h2>
                <div className="max-w-5xl mx-auto">
                    <Carousel showThumbs={false} autoPlay infiniteLoop>
                        {rooms.map((room, i) => (
                            <div key={i} className="flex flex-col items-center text-center">
                                <img
                                    src={room.src}
                                    alt={`${room.title} номер`}
                                    className="rounded-lg shadow-lg w-full object-cover"
                                    style={{ maxHeight: '500px', objectPosition: 'center' }}
                                />
                                {/* Подпись снизу */}
                                <div className="mt-4">
                                    <h3 className="text-xl font-bold">{room.title}</h3>
                                    <p className="text-primary font-semibold">{room.price} ₽ / ночь</p>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default Gallery;