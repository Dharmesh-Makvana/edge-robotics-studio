import thumbnailImage from "../assets/thumbnail.png";
import vacationImage from "../assets/vacation.jpeg";
import oneYearCompletionImage from "../assets/1_year_completion.png";
import droneDragonflyImage from "../assets/thumbnail_drone_dragonfly.png";

export const blogPosts = [
    {
        id: 1,
        title: "Who I Am and What I Build",
        slug: "who-i-am-and-what-i-build",
        date: "Jan 2026",
        author: "Edge Robotics Studio",
        category: "Personal",
        excerpt: "A reflection on the journey from a small village in Gujarat to starting Edge Robotics Studio, exploring engineering, design, and growth.",
        coverImage: thumbnailImage,
        content: [
            {
                type: "paragraph",
                text: "Hi, I am Dharmesh Makvana, the founder and lead robotics engineer at Edge Robotics Studio. I've spent the past several years delving deep into robotics design, embedded systems, and automation software. This blog is a place for me to share my journey from the technical hurdles of building robotic systems to the personal reflections along the way."
            },
            {
                type: "heading",
                text: "A Bit About Me"
            },
            {
                type: "image",
                src: vacationImage,
                caption: ""
            },
            {
                type: "paragraph",
                text: "I was born in a small village in Gujarat, India, where I spent the first ten years of my life. Those early years shaped who I am today and gave me a strong sense of simplicity and grounding. As I grew older, I moved to a nearby city to continue my studies, marking the beginning of my hostel life and my first real step toward independence. A few years later, I moved again to the central city of the state for my graduation, where life brought new challenges, freedom, and personal growth."
            },
            {
                type: "paragraph",
                text: "Everything changed in March 2020 when the COVID pandemic hit, and I returned to my home village. I completed the next two years of my graduation from there and graduated in 2021. By the end of that year, I moved back to the central city and began my professional journey. Since then, I’ve been learning continuously, adapting, and shaping the path I want to walk."
            },
            {
                type: "paragraph",
                text: "Beyond work and studies, I love traveling and exploring new places. I enjoy discovering different cultures, religions, and especially their food. In my free time, I like spending time with myself, watching dramas, anime, and movies, playing video games, and exploring new tech and hardware. Sometimes, I also play badminton to stay active and refreshed."
            },
            {
                type: "heading",
                text: "My Professional Journey"
            },
            {
                type: "paragraph",
                text: "My journey truly began toward the end of 2021, when I returned to the central city after completing my graduation in Mechanical Engineering. That phase marked my transition from student life into the real world, where responsibility, uncertainty, and growth became part of everyday life. I developed a strong interest in design and began teaching myself various tools and software. After months of learning and practice, I earned an opportunity to train at an MNC, where I gained hands-on experience and a deeper understanding of how professional environments function."
            },
            {
                type: "paragraph",
                text: "After completing my training, I felt the urge to continue my education and dreamed of studying in Germany. I started learning the language and exploring universities, and for a while, everything seemed to fall into place. However, life had other plans. My family hoped I would stay closer to home, and respecting that, I decided not to move abroad. Instead, I prepared for higher studies in India and, despite limited preparation time, cleared the entrance exam and began my PhD journey in July 2024."
            },
            {
                type: "paragraph",
                text: "A few months into the program, I realized that this path did not align with who I was becoming or what I truly wanted to build. It was a difficult decision, but I chose to step away. I spent much of 2025 with my family, reflecting, learning, and redefining my direction. During this time, I started Edge Robotics Studio, a freelance initiative through which I explore robotics, design, and problem-solving in my own way."
            },
            {
                type: "paragraph",
                text: "Today, I see my career as an evolving journey rather than a fixed destination. Every experience, whether a success or a setback, has shaped me. I continue to move forward with curiosity, purpose, and the belief that growth comes from staying true to yourself."
            },
            {
                type: "heading",
                text: "Where I’m Headed"
            },
            {
                type: "paragraph",
                text: "The past few years haven’t been easy for me, both professionally and personally. There were moments of confusion, setbacks, and difficult decisions, but each of them taught me something important about myself and what I truly want from life. After stepping away from my previous work, I found myself in a phase that feels like a mix of rest, reflection, and rebuilding. Not exactly a break and not exactly a fresh start, but something in between. A quiet space where I could think clearly, reset my priorities, and slowly shape what comes next."
            },
            {
                type: "paragraph",
                text: "Right now, I’m spending my time building Edge Robotics Studio, learning, experimenting, and creating at my own pace. Things are moving slowly, but with intention. I’m becoming more comfortable with uncertainty and learning to live with it, because the future is rarely clear. Still, I choose to move forward, even when the path isn’t fully visible. I’m hopeful that 2026 will bring more clarity, stability, and momentum, and for now I’m focused on growth, consistency, and trusting the process."
            },
            {
                type: "paragraph",
                text: "This space is where I’ll share thoughts, experiences, ideas, and maybe a few experiments. Some posts may be technical, some personal, and others simply reflections from the journey. If you’re reading this, I hope you find something here that resonates with you and reminds you that it’s okay to pause, reflect, and move forward at your own pace."
            }
        ]
    },
    {
        id: 2,
        title: "1 Year of Edge Robotics Studio",
        slug: "1-year-of-edge-robotics-studio",
        date: "April 2026",
        author: "Edge Robotics Studio",
        category: "Edge Robotics Studio",
        disableLink: true,
        imageAspectRatio: "aspect-square",
        excerpt: "Celebrating exactly one year of robotics design, innovation, and learning at Edge Robotics Studio.",
        coverImage: oneYearCompletionImage,
        content: [
            {
                type: "paragraph",
                text: "It has been an incredible journey since we started Edge Robotics Studio one year ago. From the very beginning, our goal has been to explore the boundaries of robotics, embedded systems, and automation software."
            },
            {
                type: "heading",
                text: "A Year of Growth and Learning"
            },
            {
                type: "paragraph",
                text: "Reflecting on the past year, we have faced exciting technical hurdles, built amazing systems, and grown alongside our community. This milestone marks not just the passage of time, but the solid foundation we’ve laid for future innovations."
            },
            {
                type: "paragraph",
                text: "We want to thank everyone who has supported us, followed our journey, and believed in our vision. The future is bright, and we are just getting started!"
            }
        ]
    },
    {
        id: 3,
        title: "From Dragonfly Toys to Drone Dynamics",
        slug: "dragonfly-toys-to-drone-flight",
        date: "April 2026",
        author: "Edge Robotics Studio",
        category: "Technical",
        disableLink: true,
        imageAspectRatio: "aspect-square",
        excerpt: "Exploring how simple dragonfly toys demonstrate the aerodynamics of flight and how those core concepts scale up to modern autonomous quadcopters.",
        coverImage: droneDragonflyImage,
        content: [
            {
                type: "paragraph",
                text: "Have you ever played with a traditional bamboo dragonfly toy (a classic T-shaped hand-spun flyer)? These simple toys from our childhood are actually perfect demonstrations of fundamental aerodynamics. By observing how they launch and stay airborne, we can grasp the core concepts of lift, thrust, and stability that modern drones use today."
            },
            {
                type: "heading",
                text: "The Mechanics of a Bamboo Dragonfly"
            },
            {
                type: "paragraph",
                text: "A typical bamboo dragonfly operates by rapidly spinning a set of horizontal, angled blades attached to a vertical stick. As you rub the stick quickly between your palms and release it, the rotational energy forces the blades to push air downward. According to Newton's Third Law (every action has an equal and opposite reaction), pushing the air down creates an upward force called 'lift'. Since the toy is lightweight, this small amount of lift is enough to overcome gravity and send it flying into the air."
            },
            {
                type: "paragraph",
                text: "However, these toys have no control systems. They fly where the wind takes them, and as the rotational energy dissipates, they lose lift and gradually fall back to the ground. They are a pure, unrefined display of aerodynamic lift."
            },
            {
                type: "heading",
                text: "Scaling Up: Enter the Quadcopter"
            },
            {
                type: "paragraph",
                text: "Modern drones, specifically quadcopters, take this simple concept and multiply it by four. Instead of a single spinning propeller, a drone uses four rotors. But it’s not just about adding more power—it's about adding extreme precision and control."
            },
            {
                type: "paragraph",
                text: "If a drone had four propellers all spinning in the same direction, the entire body of the drone would start spinning in the opposite direction due to torque (conservation of angular momentum). To overcome this, a quadcopter uses two propellers spinning clockwise and two spinning counter-clockwise. This perfectly balances the rotational forces, keeping the drone's body stable while it hovers."
            },
            {
                type: "heading",
                text: "How Drones Actually Steer"
            },
            {
                type: "paragraph",
                text: "The true brilliance of a quadcopter lies in how it navigates the air using only the speed of its four motors. There are no rudders or mechanical flaps like you see on airplanes."
            },
            {
                type: "paragraph",
                text: "To move forward (Pitch), the drone simply spins its rear rotors faster than its front rotors. This lifts the back of the drone, tilting it forward, and directs some of the thrust backward, propelling the drone ahead. The same principle applies to moving sideways (Roll). To rotate in place (Yaw), the drone slightly decreases the speed of the clockwise rotors and increases the speed of the counter-clockwise rotors. This intentionally unbalances the torque, causing the drone to spin on its axis without changing its altitude."
            },
            {
                type: "paragraph",
                text: "The ultimate bridge between a dragonfly toy and a modern drone is the flight controller—the 'brain' of the drone. It reads thousands of measurements per second from gyroscopes and accelerometers to continuously adjust the speed of each motor, transforming raw lift into precise, autonomous, and majestic flight."
            }
        ]
    }
];

