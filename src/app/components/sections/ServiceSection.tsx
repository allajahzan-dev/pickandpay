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
                        What we <span className="text-[#58655a]">offer</span>
                    </>
                }
                para={
                    <p
                        className="w-full text-base text-muted-foreground font-medium will-change-transform
                        sm:w-[70%] md:w-[60%] xl:w-[40%] md:text-lg"
                    >
                        We care about your comfort! Pick & Pay offers friendly service,
                        fresh food, online ordering, and fast home delivery.
                    </p>
                }
            />

            {/* Services */}
            <div
                className="grid grid-cols-1 gap-12 mt-12
                md:grid-cols-2 xl:grid-cols-3"
            >
                {services.map((service) => {
                    const IconComponent = iconsMap[service.icon];
                    return (
                        <div
                            key={service.id}
                            className="flex flex-col items-center justify-start gap-2 will-change-transform"
                        >
                            <div className="w-fit p-5 border rounded-full shadow-md">
                                {IconComponent && <IconComponent size={20} />}
                            </div>
                            <h1
                                className="text-xl text-center font-medium mt-2
                                md:text-2xl"
                            >
                                {service.title}
                            </h1>
                            <p
                                className="w-full text-sm text-muted-foreground text-center
                                sm:w-[80%] md:w-[85%] xl:w-[90%] md:text-base"
                            >
                                {service.description}
                            </p>
                        </div>
                    );
                })}
            </div>

            {/* Button */}
            <Button className="bg-[#161c1b] hover:bg-[#161c1b]/90 p-5 px-8 mt-12 text-lg cursor-pointer shadow-md">
                Know More
            </Button>
        </section>
    );
}
