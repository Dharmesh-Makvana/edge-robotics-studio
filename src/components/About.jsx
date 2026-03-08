// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { User, Cpu, Code } from "lucide-react";

const About = () => {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-background text-white">
            <div className="max-w-7xl mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-8"
                    >
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                About Me
                            </h1>
                            <p className="text-xl text-primary font-medium mb-8">
                                I’m Dharmesh Makvana, a freelance roboticist.
                            </p>
                        </div>

                        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                            <p>
                                I’m passionate about bringing design and code together to build intelligent, responsive machines. For me, the real reward is in seeing a creation move with purpose and respond to its surroundings. That spark is what drives me to keep building.
                            </p>
                            <p>
                                Today, I’m fortunate to work on projects that turn this passion into reality. I design, develop, and integrate robotic systems that blend hardware and software to solve real-world automation problems.
                            </p>
                            <p>
                                Feel free to explore the rest of this site to see some of the projects I’ve worked on.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6 pt-8 border-t border-slate-800">
                            <div className="flex flex-col gap-2">
                                <Cpu className="w-8 h-8 text-primary" />
                                <span className="font-semibold">Hardware Design</span>
                                <span className="text-sm text-gray-400">PCB & Systems</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <Code className="w-8 h-8 text-primary" />
                                <span className="font-semibold">Software Dev</span>
                                <span className="text-sm text-gray-400">ROS2 & Firmware</span>
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
                            src="https://raw.githubusercontent.com/edgeroboticsstudio/Edge-Robotics-Studio/main/static/about.jpg"
                            alt="Dharmesh Makvana"
                            className="relative rounded-3xl shadow-2xl border border-slate-700/50 object-cover w-full h-[600px]"
                        />
                        <div className="absolute bottom-[-20px] left-[-20px] bg-surface p-6 rounded-2xl border border-slate-700 shadow-xl flex items-center gap-4">
                            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                                <User className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white">Freelance Roboticist</h3>
                                <p className="text-sm text-gray-400">End-to-end Solutions</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </div>
    );
};

export default About;
