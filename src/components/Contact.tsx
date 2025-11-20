
import { useState, useRef, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const Contact = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // TODO: Replace with your actual EmailJS credentials
        // Sign up at https://www.emailjs.com/
        const serviceId = 'service_wvrfdqa';
        const templateId = 'template_wvvby1m';
        const publicKey = '6g92xULxIkp-32uq1';

        emailjs.sendForm(serviceId, templateId, formRef.current!, publicKey)
            .then(() => {
                toast.success('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            })
            .catch((error) => {
                console.error('FAILED...', error);
                toast.error('Failed to send message. Please try again.');
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <section id="contact" className="py-20 bg-secondary/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">Let's Talk</h3>
                        <p className="text-gray-300 mb-8">
                            I'm currently open to new opportunities and collaborations. Whether you have a question
                            or just want to say hi, feel free to reach out!
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-accent">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Email</p>
                                    <p className="font-medium">bhushanpatil0504@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-accent">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Phone</p>
                                    <p className="font-medium">+1 (425) 561-9296</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-accent">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Location</p>
                                    <p className="font-medium">North Carolina, USA</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="bg-primary p-8 rounded-2xl border border-gray-800"
                    >
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-secondary/50 border border-gray-700 rounded-lg focus:outline-none focus:border-accent text-white transition-colors"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-secondary/50 border border-gray-700 rounded-lg focus:outline-none focus:border-accent text-white transition-colors"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full px-4 py-3 bg-secondary/50 border border-gray-700 rounded-lg focus:outline-none focus:border-accent text-white transition-colors"
                                    placeholder="Your message..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-3 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? (
                                    <>Sending... <Loader2 className="animate-spin" size={18} /></>
                                ) : (
                                    <>Send Message <Send size={18} /></>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
