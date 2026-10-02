import React from 'react';

interface RoomProps {
    name: string;
    price: number;
    description: string;
}

const RoomCard: React.FC<RoomProps> = ({ name, price, description }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <h3 className="text-xl font-bold mb-2">{name}</h3>
            <p className="text-primary font-semibold mb-3">{price} ₽ / ночь</p>
            <p>{description}</p>
        </div>
    );
};

export default RoomCard;