import type { Metadata } from "next";
import "./globals.css";
import SmoothWrapper from "./components/animations/SmoothWrapper";
import { urbanist } from "@/fonts/urbanist";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
    title: "Pick & Pay",
    description: "Supermarket brand",
    themeColor: "#ffffff",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={cn(urbanist.className, "antialiased")}>
                <SmoothWrapper>{children}</SmoothWrapper>
            </body>
        </html>
    );
}
