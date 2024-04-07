import { IconType } from "react-icons";

interface ITechItem {
    icon: IconType;
    text: string;
    height: number;
}

export default function TechItem({ icon: Icon, text, height }: ITechItem) {
    return (
        <li className="flex gap-1 px-2 py-1 items-center rounded-[4px] dark:text-dark-gray-100 dark:bg-dark-blue-500 bg-light-gray-100 text-light-primary pointer-events-none">
            <Icon size={height} />
            <span className={`text-[${height}px]`}>{text}</span>
        </li>
    );
}
