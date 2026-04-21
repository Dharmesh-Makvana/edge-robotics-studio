import { whoIAmPost } from "./posts/whoIAm";
import { oneYearPost } from "./posts/oneYear";
import { droneDynamicsPost } from "../../Blog/posts/droneDynamics";

export const blogPosts = [
    whoIAmPost,
    oneYearPost,
    { ...droneDynamicsPost, disableLink: true }
];
