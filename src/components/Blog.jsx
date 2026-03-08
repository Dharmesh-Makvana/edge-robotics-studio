// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { blogPosts } from "../data/blogData";
import { Calendar, ArrowRight } from "lucide-react";

const Blog = () => {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-background text-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        Our Blog
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 text-lg max-w-2xl"
                    >
                        Insights, experiences, and reflections from the world of robotics and beyond.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-surface rounded-2xl overflow-hidden border border-slate-700/50 group"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={post.coverImage}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-2 text-primary text-sm mb-3">
                                    <Calendar className="w-4 h-4" />
                                    <span>{post.date}</span>
                                </div>
                                <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                    {post.title}
                                </h2>
                                <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                                    {post.excerpt}
                                </p>
                                <Link
                                    to={`/blog/${post.slug}`}
                                    className="inline-flex items-center gap-2 text-white font-medium hover:text-primary transition-colors"
                                >
                                    Read More
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
