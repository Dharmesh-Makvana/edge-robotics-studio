export const projectData = [
    {
        id: 1,
        slug: 'autonomous-warehouse-robot',
        title: 'Autonomous Warehouse Robot',
        excerpt: 'A custom AGV designed for navigating complex warehouse environments.',
        description: 'We developed the full software stack and integrated the hardware for this autonomous guided vehicle. Using ROS2 and advanced SLAM techniques, the robot can safely move materials in highly dynamic environments.',
        image: 'https://images.unsplash.com/photo-1615467554988-511bb63558c4?q=80&w=2070&auto=format&fit=crop',
        tags: ['ROS2', 'Navigation', 'Computer Vision'],
        content: `### The Challenge
Our client needed a robust autonomous guided vehicle (AGV) capable of navigating a continuously changing warehouse environment without the need for fixed infrastructure like magnetic tapes or QR codes on the floor.

### The Solution
We implemented a comprehensive software stack based on ROS2. The perception pipeline utilizes 2D LiDAR and stereo cameras for robust obstacle avoidance and mapping.

#### Key Features:
- **Advanced SLAM**: Utilizing cartographer for accurate mapping of large dynamic environments.
- **Dynamic Path Planning**: Custom local planners to smoothly avoid moving forklifts and personnel.
- **Fleet Management Integration**: A custom REST API allows the robot to seamlessly take commands from the warehouse management system.

### The Result
The robotic system successfully increased warehouse throughput by 30% while maintaining a 100% safety record during its deployment phase.`
    },
    {
        id: 2,
        slug: 'smart-agricultural-drone',
        title: 'Smart Agricultural Drone Payload',
        excerpt: 'An embedded computer vision system for targeted crop spraying.',
        description: 'An edge AI system integrated into a drone payload to identify diseases in crops in real-time, allowing for precise and targeted pesticide application.',
        image: 'https://images.unsplash.com/photo-1559815077-802526ec1770?q=80&w=2670&auto=format&fit=crop',
        tags: ['Edge AI', 'Embedded Systems', 'Computer Vision'],
        content: `### The Challenge
Broad-spectrum crop spraying is environmentally harmful and expensive. The goal was to develop a lightweight, low-power embedded system capable of detecting specific crop diseases from a flying drone in real-time.

### The Solution
We designed a custom carrier board for an NVIDIA Jetson module and developed a highly optimized deep learning pipeline using TensorRT.

#### Technical Highlights:
- **Custom Hardware**: A lightweight PCB integrating camera interfaces, power management, and the AI compute module.
- **Optimized AI**: Real-time object detection models pruned and quantized to run at 30 FPS on edge hardware.
- **Control Integration**: Direct communication via MAVLink to the drone flight controller to actuate the spraying mechanism at the exact GPS coordinates required.

### The Result
This targeted approach reduced pesticide usage by up to 60%, significantly lowering costs for farmers and reducing the environmental impact of agricultural operations.`
    }
]
