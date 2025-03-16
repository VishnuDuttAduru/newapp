
import { useRef } from "react";
import "./Services.scss";
import { motion, useInView } from "framer-motion";
import people from "../../assets/people.jpg";

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};

const Services = () => {
    const ref = useRef();

    const isInView = useInView(ref, { margin: "-100px" });

    return (
        <motion.div
            className="services"
            variants={variants}
            initial="initial"
            // animate="animate"
            // whileInView="animate"
            ref={ref}
            animate={"animate"}
        >
            <motion.div className="textContainer" variants={variants}>
                <p>
                    I focus on helping your brand grow
                    <br /> and move forward
                </p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src={people} alt="" />
                    <h1>
                        <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
                    </h1>
                </div>
                <div className="title">
                    <h1>
                        <motion.b whileHover={{ color: "orange" }}>For Your</motion.b> Business.
                    </h1>
                    <button>WHAT WE DO?</button>
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <motion.div
                    className="box"
                    whileHover={{ background: "lightgray", color: "black" }}
                >
                    <h2>Branding</h2>
                    <p>
                        As a React-focused front-end developer, I can help with branding by creating a visually appealing and consistent UI that aligns with the brand identity. Also, I can collaborate with designers to translate brand guidelines into interactive and responsive web experiences.
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div
                    className="box"
                    whileHover={{ background: "lightgray", color: "black" }}
                >
                    <h2>UI/UX Implementation</h2>
                    <p>
                        Work closely with designers to translate wireframes and prototypes into functional, responsive, and user-friendly components.
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div
                    className="box"
                    whileHover={{ background: "lightgray", color: "black" }}
                >
                    <h2>API Integration</h2>
                    <p>
                        Coordinate with backend developers to consume APIs efficiently, handle data fetching, and optimize state management for smooth application performance.
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div
                    className="box"
                    whileHover={{ background: "lightgray", color: "black" }}
                >
                    <h2>Testing & Debugging</h2>
                    <p>
                        Collaborate with QA engineers to write test cases, fix bugs, and ensure the application runs seamlessly across different devices and browsers.
                    </p>
                    <button>Go</button>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Services;
