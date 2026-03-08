import { useParams, Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import React from 'react';
import { serviceData } from "../data/serviceData.jsx";

const ServiceDetails = () => {
    const { slug } = useParams();
    const service = serviceData.find(s => s.slug === slug);

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background text-white">
                <div className="text-center">
                    <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
                    <Link to="/#services" className="text-primary hover:underline">Return to Services</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-32 pb-24 min-h-screen bg-background text-white">
            <div className="max-w-4xl mx-auto px-6">
                <Link
                    to="/#services"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Services
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <div className="flex items-center gap-6 mb-8">
                        <div className="p-5 bg-slate-800 rounded-2xl border border-slate-700">
                            {React.cloneElement(service.icon, { className: "w-12 h-12 text-primary" })}
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white">
                            {service.title}
                        </h1>
                    </div>

                    <div className="h-px w-full bg-slate-800 mb-12"></div>

                    <div className="prose prose-invert prose-lg max-w-none text-gray-300">
                        {service.content.split('\\n').map((paragraph, index) => {
                            if (!paragraph.trim()) return <br key={index} />;
                            return <p key={index} className="mb-6 leading-relaxed text-lg">{paragraph}</p>;
                        })}
                    </div>

                    <div className="mt-16 p-8 bg-surface rounded-2xl border border-slate-700 text-center">
                        <h3 className="text-2xl font-bold text-white mb-4">Need help with {service.title}?</h3>
                        <p className="text-gray-400 mb-6">Reach out to us to discuss your project requirements and see how our expertise can accelerate your timelines.</p>
                        <Link to="/contact" className="inline-block bg-primary text-white font-medium px-8 py-3 rounded-xl hover:bg-primary-hover transition-colors">
                            Contact Us
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ServiceDetails;
