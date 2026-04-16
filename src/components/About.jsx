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
                            <p className="text-xl text-primary font-medium mb-8 leading-snug">
                                Edge Robotics Studio is a robotics consultancy founded by Dharmesh Makvana.
                            </p>
                        </div>
                        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                            <p>
                                Edge Robotics Studio is passionate about bringing design and code together to build intelligent, responsive machines. The real reward is in seeing a creation move with purpose and respond to its surroundings. That spark is what drives Edge Robotics Studio to keep building.
                            </p>
                            <p>
                                Today, Edge Robotics Studio is fortunate to work on projects that turn this passion into reality. Edge Robotics Studio designs, develops, and integrates robotic systems that blend hardware and software to solve real-world automation problems.
                            </p>
                            <p>
                                Feel free to explore the rest of this site to see some of the projects Edge Robotics Studio has worked on.
                            </p>
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
