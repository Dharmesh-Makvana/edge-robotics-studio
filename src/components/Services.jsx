import React from 'react';
import { motion } from 'framer-motion';
import {
    Cpu, Code, Activity, Eye, Compass, LayoutDashboard,
    CircuitBoard, Box, ShieldCheck, Cloud, Wrench, FileText
} from 'lucide-react';

const services = [
    {
        title: 'Embedded System Software',
        description: 'Firmware development, RTOS integration (FreeRTOS/Zephyr), and low-level driver optimization for custom hardware.',
        icon: <Cpu className="w-8 h-8 text-primary" />,
    },
    {
        title: 'Robotics Software (ROS2)',
        description: 'Full-stack ROS2 development, middleware configuration, multi-node architecture, and system orchestration.',
        icon: <Code className="w-8 h-8 text-primary" />,
    },
    {
        title: 'Simulation & Digital Twin',
        description: 'High-fidelity simulation in Gazebo/Webots to validate robot behavior before deployment.',
        icon: <Activity className="w-8 h-8 text-primary" />,
    },
    {
        title: 'Computer Vision & AI',
        description: 'Object detection, SLAM, perception pipelines using OpenCV and deep learning frameworks.',
        icon: <Eye className="w-8 h-8 text-primary" />,
    },
    {
        title: 'Navigation & Control',
        description: 'Path planning, obstacle avoidance, state estimation, and feedback control systems (PID, MPC).',
        icon: <Compass className="w-8 h-8 text-primary" />,
    },
    {
        title: 'System Integration',
        description: 'Seamless integration of sensors, actuators, PCBs, and compute units into a cohesive robotic system.',
        icon: <LayoutDashboard className="w-8 h-8 text-primary" />,
    },
    {
        title: 'PCB Design & Hardware',
        description: 'Custom PCB design (Altium/KiCad), schematic capture, layout optimization, and EMI/EMC practices.',
        icon: <CircuitBoard className="w-8 h-8 text-primary" />,
    },
    {
        title: 'Mechanical Design & CAD',
        description: '3D modeling, parametric assemblies, DFM, and rapid prototyping using SolidWorks/Fusion.',
        icon: <Box className="w-8 h-8 text-primary" />,
    },
    {
        title: 'Testing & Validation',
        description: 'Hardware bring-up, SIL/HIL testing, debugging using oscilloscopes and logic analyzers.',
        icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    },
    {
        title: 'DevOps for Robotics',
        description: 'CI/CD pipelines, Dockerized builds, version control workflows, and automated testing.',
        icon: <Cloud className="w-8 h-8 text-primary" />,
    },
    {
        title: 'Rapid Prototyping',
        description: '3D printing, CNC machining, and fast iteration of mechanical and electronic components.',
        icon: <Wrench className="w-8 h-8 text-primary" />,
    },
    {
        title: 'Technical Documentation',
        description: 'Clear system documentation, API references, architecture diagrams, and developer guides.',
        icon: <FileText className="w-8 h-8 text-primary" />,
    },
];

const Services = () => {
    return (
        <section id="services" className="py-24 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-white mb-4"
                    >
                        Our Expertise
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-300 text-lg"
                    >
                        Comprehensive robotics solutions from low-level firmware to high-level system integration.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-surface p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-700 group"
                        >
                            <div className="mb-6 p-4 bg-slate-800 rounded-xl w-fit group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                {React.cloneElement(service.icon, { className: "w-8 h-8 text-primary group-hover:text-white transition-colors" })}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
