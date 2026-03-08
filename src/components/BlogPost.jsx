// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { blogPosts } from "../data/blogData";
import { Calendar, ChevronLeft, User } from "lucide-react";

const BlogPost = () => {
    const { slug } = useParams();
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return (
            <div className="pt-32 pb-24 min-h-screen bg-background text-white flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold mb-4">Post not found</h1>
                <Link to="/blog" className="text-primary hover:underline flex items-center gap-2">
                    <ChevronLeft className="w-4 h-4" />
                    Back to Blog
                </Link>
            </div>
        );
    }

    return (
        <div className="pt-32 pb-24 min-h-screen bg-background text-white">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <Link
                        to="/blog"
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
                    >
                        <ChevronLeft className="w-4 h-4" />
                        Back to Blog
                    </Link>

                    <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-[400px] object-cover rounded-3xl mb-12 shadow-2xl shadow-primary/10"
                    />

                    <div className="flex items-center gap-6 text-sm text-gray-400 mb-6">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-primary" />
                            <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <User className="w-4 h-4 text-primary" />
                            <span>{post.author}</span>
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold mb-12 leading-tight">
                        {post.title}
                    </h1>

                    <div className="prose prose-invert max-w-none space-y-8">
                        {post.content.map((item, index) => {
                            if (item.type === "heading") {
                                return (
                                    <h2 key={index} className="text-2xl font-bold text-white mt-12 mb-6">
                                        {item.text}
                                    </h2>
                                );
                            }
                            if (item.type === "image") {
                                return (
                                    <div key={index} className="my-12">
                                        <img
                                            src={item.src}
                                            alt="Blog content"
                                            className="w-full rounded-2xl shadow-xl shadow-primary/5"
                                        />
                                    </div>
                                );
                            }
                            return (
                                <p key={index} className="text-gray-300 text-lg leading-relaxed">
                                    {item.text}
                                </p>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default BlogPost;
