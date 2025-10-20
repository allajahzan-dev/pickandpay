import type { Metadata } from "next";
import "./globals.css";
import SmoothWrapper from "./components/animations/SmoothWrapper";
import { urbanist } from "@/fonts/urbanist";

export const metadata: Metadata = {
    title: "Pick-and-Pay",
    description: "Supermarket brand",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={urbanist.className}>
                <SmoothWrapper>{children}</SmoothWrapper>
            </body>
        </html>
    );
}
