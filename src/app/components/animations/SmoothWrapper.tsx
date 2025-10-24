import { Fragment, ReactNode } from "react";
import ScrollSmoother from "./ScrollSmoother";
import Navbar from "../navbar/Navbar";
import SmoothBottomBlur from "./BottomBlur";

// Smooth wrapper
export default function SmoothWrapper({ children }: { children: ReactNode }) {
    return (
        <Fragment>
            {/* Mobile navbar */}
            {/* <Navbar className="block md:hidden" /> */}

            {/* Smooth wrapper */}
            <div id="smooth-wrapper" className="relative">
                <div id="smooth-content">
                    {/* Desktop navbar */}
                    <Navbar />
                    {children}
                </div>
            </div>

            <ScrollSmoother />
        </Fragment>
    );
}
