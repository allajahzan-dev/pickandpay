import { sectionClassName } from "@/constants/styles";
import { cn } from "@/lib/utils";
import SectionHeading from "../common/SectionHeading";
import Label from "../common/Label";
import { HandHelping } from "lucide-react";
import { fetchServices } from "@/app/utils/fetchServices";
import { Store, Truck, UsersRound, Leaf, Package, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

// Service section
export default async function ServiceSection() {
    // Services
    const { services } = await fetchServices();

    // Icons map
    const iconsMap: Record<string, React.ElementType> = {
        Store,
        Truck,
        UsersRound,
        Leaf,
        Package,
        Gift,
    };

    return (
        <section
            className={cn(
                sectionClassName,
                "min-h-screen -mt-0.5 border-t items-center"
            )}
        >
            {/* Label */}
            <Label icon={<HandHelping size={16} />} text="Our Services" />

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
                        We care about your comfort! Pick & Pay provides friendly in-store
                        service, fresh food sections, online ordering, and quick home
                        delivery everything you need, all in one place
                    </p>
                }
            />

            {/* Services */}
            <div className="grid grid-cols-3 gap-12 mt-12">
                {services.map((service) => {
                    const IconComponent = iconsMap[service.icon];
                    return (
                        <div
                            key={service.id}
                            className="flex flex-col items-center justify-start gap-2 will-change-transform"
                        >
                            <div className="w-fit p-5 border rounded-full shadow-inner">
                                {IconComponent && <IconComponent size={20} />}
                            </div>
                            <h1 className="text-2xl font-medium mt-2">{service.title}</h1>
                            <p className="w-[80%] text-base text-muted-foreground text-center">
                                {service.description}
                            </p>
                        </div>
                    );
                })}
            </div>

            {/* Button */}
            <Button className="bg-[#161c1b] hover:bg-[#161c1b]/80 p-5 px-8 mt-12 text-lg shadow-md">
                Contact Us
            </Button>
        </section>
    );
}
