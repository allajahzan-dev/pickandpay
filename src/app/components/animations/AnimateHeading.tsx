"use client";

import { motion } from "framer-motion";
import React from "react";

interface AnimatedHeadingProps {
    children: React.ReactNode;
}

// Animated heading
const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({ children }) => {
    // Helper to recursively extract words & preserve spans/br
    const renderContent: any = (node: any, i: number) => {
        if (typeof node === "string") {
            return node.split(/(\s+)/).map((word, j) => {
                if (word.trim() === "") return " ";
                return (
                    <motion.span
                        key={`${i}-${j}-${word}`}
                        className="inline-block"
                        initial={{ y: 20, opacity: 0, filter: "blur(6px)" }}
                        whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                        transition={{
                            duration: 0.5,
                            delay: i * 0.1 + j * 0.05, // sequential stagger
                            ease: [0.25, 0.1, 0.25, 1],
                        }}
                        viewport={{ once: true }}
                    >
                        {word}
                    </motion.span>
                );
            });
        }

        // Preserve nested JSX like <span> or <br />
        if (React.isValidElement(node)) {
            if (node.type === "br") return <br key={`br-${i}`} />;
            const el = node as React.ReactElement<any, any>;
            return React.cloneElement(
                el,
                { key: i },
                React.Children.map(el.props.children, (child, j) =>
                    renderContent(child, i + j)
                )
            );
        }

        return node;
    };

    return (
        <h1 className="text-[64px] font-medium leading-[1.1]">
            {React.Children.map(children, (child, i) => renderContent(child, i))}
        </h1>
    );
};

export default AnimatedHeading;
