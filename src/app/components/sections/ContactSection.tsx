import { sectionBgImage, sectionClassName } from "@/constants/styles";
import Shadow from "../common/Shadow";
import Label from "../common/Label";
import { Handshake } from "lucide-react";
import { cn } from "@/lib/utils";
import DetialsHeading from "../common/DetialsHeading";

// Contact section
export default function ContactSection() {
    return (
        <section
            style={sectionBgImage}
            className={cn(sectionClassName, "min-h-screen -mt-0.5 border-t")}
        >
            {/* Shadow */}
            <Shadow />

            {/* Label */}
            <Label icon={<Handshake size={16} />} text="Contact Us" />

            {/* Details */}
            <div className="w-full relative z-10 grid grid-cols-2 items-center">
                {/* First column */}
                <div className="flex flex-col gap-10">
                    {/* Heading */}
                    <DetialsHeading
                        heading={
                            <h1 className="text-[64px] font-medium leading-none">
                                How to <span className="text-[#58655a]">get in</span>
                                <br />
                                <span className="text-[#58655a]">touch</span> with us
                            </h1>
                        }
                        para="Have a question? We're always here to help."
                    />

                    {/* Map */}
                    <div className="w-full h-[500px] pr-10">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3712.9336847818295!2d76.00829677779532!3d11.750265358719151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba5df06d8ceebfd%3A0x98af067024383961!2sGompass%20travel%20experts!5e1!3m2!1sen!2sin!4v1760858761547!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            allowFullScreen
                            loading="lazy"
                            className="rounded-2xl shadow-md"
                        ></iframe>
                    </div>
                </div>

                {/* Second column */}
            </div>
        </section>
    );
}
