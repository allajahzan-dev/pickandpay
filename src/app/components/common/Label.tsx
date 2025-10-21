import { ReactNode } from "react";

// Interface for Props
interface Props {
    icon: ReactNode;
    text: string;
}

// Label
export default function Label({ icon, text }: Props) {
    return (
        <span className="w-fit p-1 px-3 flex items-center gap-2 text-muted-foreground bg-white/10 backdrop-blur-md border-0 rounded-sm shadow">
            {icon}
            <p className="text-sm font-semibold">{text}</p>
        </span>
    );
}
