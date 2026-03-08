import { useParams, Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ArrowLeft, Tag } from "lucide-react";
import ReactMarkdown from 'react-markdown';
import { projectData } from "../data/projectData";

const ProjectDetails = () => {
    const { slug } = useParams();
    const project = projectData.find(p => p.slug === slug);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background text-white">
                <div className="text-center">
                    <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
                    <Link to="/#projects" className="text-primary hover:underline">Return to Projects</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-32 pb-24 min-h-screen bg-background text-white">
            <div className="max-w-4xl mx-auto px-6">
                <Link
                    to="/#projects"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Projects
                </Link>

                <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <div className="mb-12">
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.tags.map((tag, i) => (
                                <span key={i} className="flex items-center gap-1 px-3 py-1 bg-slate-800 text-gray-300 text-sm font-medium rounded-full border border-slate-700">
                                    <Tag className="w-3 h-3 text-primary" />
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            {project.title}
                        </h1>
                        <p className="text-xl text-gray-400 leading-relaxed">
                            {project.description}
                        </p>
                    </div>

                    <div className="w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden mb-16 border border-slate-700 shadow-2xl">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="prose prose-invert prose-primary prose-lg max-w-none text-gray-300">
                        <ReactMarkdown>{project.content}</ReactMarkdown>
                    </div>

                    <div className="mt-20 p-8 bg-surface rounded-2xl border border-slate-700 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-2">Build your next project with us</h3>
                            <p className="text-gray-400">Our engineering team is ready to tackle your hardest robotics challenges.</p>
                        </div>
                        <Link to="/contact" className="whitespace-nowrap bg-primary text-white font-medium px-8 py-4 rounded-xl hover:bg-primary-hover transition-colors shadow-lg shadow-primary/20">
                            Start a Conversation
                        </Link>
                    </div>
                </motion.article>
            </div>
        </div>
    );
};

export default ProjectDetails;
