import { sectionClassName } from "@/constants/styles";
import { cn } from "@/lib/utils";
import SectionHeading from "../common/SectionHeading";
import Label from "../common/Label";
import { Hand } from "lucide-react";
import { fetchServices } from "@/app/utils/fetchServices";

// Service section
export default async function ServiceSection() {
    // Services
    const { services } = await fetchServices();

    return (
        <section
            className={cn(
                sectionClassName,
                "min-h-screen -mt-0.5 border-t items-center"
            )}
        >
            {/* Label */}
            <Label icon={<Hand size={16} />} text="Our Services" />

            {/* Heading */}
            <SectionHeading
                className="items-center text-center"
                heading={
                    <>
                        What We <span className="text-[#58655a]">Offer</span>
                    </>
                }
                para={
                    <p className="w-[40%] text-lg text-muted-foreground font-medium will-change-transform">
                        We care about your comfort! Pick&Pay provides friendly in-store
                        service, fresh food sections, online ordering, and quick home
                        delivery everything you need, all in one place
                    </p>
                }
            />

            {/* Services */}
            <div className="relative grid grid-cols-3 gap-10">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className="flex flex-col items-center justify-start gap-2"
                    >
                        <div className="w-fit p-5 border rounded-full">
                            {service.Icon && <service.Icon size={20} />}
                        </div>
                        <h1 className="text-2xl font-medium">{service.title}</h1>
                        <p className="w-[80%] text-base text-muted-foreground text-center">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
