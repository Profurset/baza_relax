import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';

const reasons = [
    "Уникальное расположение среди леса и озера.",
    "Чистый воздух и тишина природы.",
    "Уютные и чистые номера с удобствами.",
    "Вкусное домашнее питание от повара.",
    "Дружелюбный персонал и индивидуальный подход.",
];

const WhyUs: React.FC = () => {
    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-6 md:px-12">
                <h2 className="text-3xl font-bold text-center mb-8">Почему выбирают нас?</h2>
                <div className="max-w-3xl mx-auto space-y-4">
                    {reasons.map((reason, i) => (
                        <div key={i} className="flex items-start gap-3">
                            <FiCheckCircle className="text-accent mt-1" />
                            <p className="text-lg">{reason}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUs;