import React, { useState } from 'react';

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Спасибо за обращение!');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contacts" className="py-12 bg-white">
            <div className="container mx-auto px-6 md:px-12">
                <h2 className="text-3xl font-bold text-center mb-8">Свяжитесь с нами</h2>
                <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4 bg-white p-8 rounded-lg shadow-md">
                <input
                    type="text"
                    name="name"
                    placeholder="Ваше имя"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    required
                    value={formData.name}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    required
                    value={formData.email}
                    onChange={handleChange}
                />
                <textarea
                    name="message"
                    rows={5}
                    placeholder="Ваше сообщение"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    required
                    value={formData.message}
                    onChange={handleChange}
                ></textarea>
                <button
                    type="submit"
                    className="w-full bg-accent text-white py-3 rounded-lg hover:bg-primary transition"
                >
                    Отправить
                </button>
            </form>
        </div>
</section>
)
    ;
};

export default ContactForm;