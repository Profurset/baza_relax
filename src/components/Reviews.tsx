import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface Review {
    text: string;
    author: string;
}

const reviews: Review[] = [
    {
        text: "Прекрасное место для отдыха! Природа, тишина и уютные домики — всё на высшем уровне.",
        author: "Анна Иванова",
    },
    {
        text: "Замечательный персонал, вкусная еда и красивые виды. Обязательно вернёмся снова!",
        author: "Дмитрий Петров",
    },
    {
        text: "Очень понравилась баня на берегу озера. Отдых удался на все 100%!",
        author: "Екатерина Смирнова",
    },
];

const Reviews: React.FC = () => {
    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-6 md:px-12 text-center">
                <h2 className="text-3xl font-bold mb-8">Отзывы гостей</h2>
                <div className="max-w-3xl mx-auto">
                    <Carousel showThumbs={false} autoPlay infiniteLoop>
                        {reviews.map((review, i) => (
                            <div key={i} className="p-6">
                                <p className="italic text-lg mb-4">"{review.text}"</p>
                                <p className="font-semibold">— {review.author}</p>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default Reviews;