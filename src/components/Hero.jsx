import heroBg from "../assets/hero_background.png";

const Hero = () => {
    return (
        <div className="relative w-full h-screen">
            {/* Background Image */}
            <img
                src={heroBg}
                alt="Robotics Studio Background"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-4 pt-16">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Empowering Discovery Guiding Exploration
                </h1>
                <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-8">
                    Delivering end-to-end robotics development and prototyping services that convert innovative ideas into functional robotic systems.
                </p>
            </div>
        </div>
    );
};

export default Hero;
