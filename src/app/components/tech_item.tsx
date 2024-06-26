import { IconType } from "react-icons";

interface ITechItem {
    icon: IconType;
    text: string;
    height: number;
}

export default function TechItem({ icon: Icon, text, height }: ITechItem) {
    return (
        <li className="flex gap-1 px-2 py-1 items-center rounded-[4px] dark:text-dark-gray-100 dark:bg-dark-background/35 bg-white text-light-primary pointer-events-none">
            <Icon size={height} />
            <span style={{fontSize: height}}>{text}</span>
        </li>
    );
}
