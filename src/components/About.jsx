import { motion } from "framer-motion";
import aboutImage from "../assets/about.jpg";
const About = () => {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-slate-900 border-b border-slate-800 relative overflow-hidden text-white">
            {/* Background Orbs */}
            <div className="hidden md:block absolute top-20 left-0 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full pointer-events-none"></div>
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-8"
                    >
                        <div className="relative z-10">
                            <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">About</span>
                            </h1>
                            <p className="text-xl text-primary font-medium mb-8 leading-snug text-justify">
                                Edge Robotics Studio is a robotics and embedded systems engineering studio founded by Dharmesh Makvana, focused on building real-world intelligent systems while empowering people to innovate through technology.
                            </p>
                        </div>
                        <div className="space-y-6 text-gray-300 text-lg leading-relaxed shadow-sm text-justify">
                            <p>
                                It brings together mechanical design, electronics, software, and AI to create end-to-end solutions from concept to deployment.
                            </p>
                            <p>
                                Built on hands-on experience and a passion for making, the studio goes beyond engineering services. It promotes activity-based learning where individuals don’t just learn concepts but apply them to solve real problems. Edge Robotics Studio exists to bridge the gap between knowledge and creation encouraging people to build, experiment, and turn ideas into reality.
                            </p>

                            <div className="pt-2">
                                <h3 className="text-2xl font-bold text-white mb-3">
                                    Mission
                                </h3>
                                <p className="text-gray-400">
                                    To make technology, tools, and knowledge accessible to anyone who wants to learn, build, and innovate. Edge Robotics Studio aims to empower individuals through hands-on experiences, enabling them to transform ideas into practical solutions while fostering creativity, problem-solving, and continuous learning.
                                </p>
                            </div>

                            <div className="pt-2">
                                <h3 className="text-2xl font-bold text-white mb-3">
                                    Vision
                                </h3>
                                <p className="text-gray-400">
                                    To create a future where every individual has the ability to design, build, and innovate using modern technology. Edge Robotics Studio envisions a world of self-reliant creators and thinkers who can turn ideas into impactful solutions and drive meaningful progress.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
                        <img
                            src={aboutImage}
                            alt="Dharmesh Makvana"
                            className="relative rounded-3xl shadow-2xl border border-slate-700/50 object-cover w-full h-[600px]"
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
export default About;
