
import { motion } from 'framer-motion';
import { Code, Database, Server, Layout } from 'lucide-react';

const About = () => {
    const skills = [
        { name: 'Java Spring Boot', icon: <Server size={24} />, level: 'Advanced' },
        { name: 'React.js', icon: <Layout size={24} />, level: 'Advanced' },
        { name: 'Database Design', icon: <Database size={24} />, level: 'Intermediate' },
        { name: 'API Development', icon: <Code size={24} />, level: 'Advanced' },
    ];

    return (
        <section id="about" className="py-20 bg-secondary/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            I am a passionate Full Stack Developer with a strong foundation in Java Spring Boot and React.
                            I love building scalable, efficient, and user-friendly applications. My journey involves
                            solving complex problems and turning ideas into reality through code.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            When I'm not coding, I enjoy exploring new technologies, contributing to open source,
                            and learning about software architecture patterns.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                    >
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="bg-primary p-6 rounded-xl border border-gray-800 hover:border-accent transition-colors group"
                            >
                                <div className="text-accent mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {skill.icon}
                                </div>
                                <h3 className="text-white font-semibold text-lg mb-2">{skill.name}</h3>
                                <p className="text-gray-400 text-sm">{skill.level}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};


export default About;
