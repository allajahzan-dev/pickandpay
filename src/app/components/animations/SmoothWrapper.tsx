import { Fragment, ReactNode } from "react";
import ScrollSmoother from "./ScrollSmoother";
import Navbar from "../navbar/Navbar";

// Smooth wrapper
export default function SmoothWrapper({ children }: { children: ReactNode }) {
    return (
        <Fragment>
            {/* Mobile navbar */}
            <Navbar className="block lg:hidden" />

            {/* Smooth wrapper */}
            <div id="smooth-wrapper" className="relative">
                <div id="smooth-content">
                    {/* Desktop navbar */}
                    <Navbar className="hidden lg:block" />
                    {children}
                </div>
            </div>

            <ScrollSmoother />
        </Fragment>
    );
}
