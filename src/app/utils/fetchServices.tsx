import BASE_URL from "@/constants/baseUrl";
import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

// Interface for IService
export interface IService {
    id: number;
    Icon: ForwardRefExoticComponent<
        Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
    >;
    title: string;
    description: string;
}

// Fetch services
export const fetchServices = async (): Promise<{
    services: IService[];
}> => {
    try {
        const resp = await fetch(`${BASE_URL}/data/services.json`);
        const data = await resp.json();
        return data;
    } catch (err) {
        console.error("Failed to read services:", err);
        return { services: [] };
    }
};
