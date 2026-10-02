import React from 'react';

const YandexMap: React.FC = () => {
    return (
        <section id="map" className="py-12">
            <div className="container mx-auto px-6 md:px-12">
                <h2 className="text-3xl font-bold text-center mb-8">Как нас найти</h2>
                <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
                    <iframe
                        title="Карта базы отдыха"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        scrolling="no"
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3A2631f293da3ff1215a49864bc32bb1389ed43589d174fc0876eecc50e588afaf&amp;source=constructor"
                        style={{border: 'none'}}
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default YandexMap;