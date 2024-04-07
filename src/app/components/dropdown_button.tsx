"use client"
import { IconDefinition, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

interface IDropdownButton {
    icon: IconDefinition;
    name: string
    elements: {
        link: string,
        name: string
    }[]
}

export default function DropdownButton({icon, name, elements}: IDropdownButton){
    const [isOpen, setOpen] = useState<boolean>();

    function onDropdownClick() {
        setOpen(!isOpen)
    }

    return(
        <div className="relative z-10">
            <button onClick={onDropdownClick} className={`bg-light-blue-100 hover:bg-light-blue-200 transition-all active:scale-95 text-light-primary flex justify-center items-center gap-1 px-1.5 py-1 ${isOpen ? 'rounded-b-none rounded-t-md' : 'rounded-md'}`}>
                <FontAwesomeIcon
                    icon={icon}
                    className="size-4"
                />
                <p>{name}</p>
                <FontAwesomeIcon
                    icon={faAngleUp}
                    className={`size-2 ${isOpen && 'rotate-180'}`}
                />
            </button>
            <div className={`absolute w-full transition-all overflow-hidden left-0 rounded-b-md ${isOpen ? `h-[${40 * elements.length}px]` : 'h-0'}`}>
                <div className="bg-light-blue-100 shadow-md">
                    {elements.map((el, index) => (
                        <Link target="_blank" onClick={onDropdownClick} href={el.link} key={index} className="block px-4 py-2 hover:bg-light-blue-200 active:scale-95 transition-all">{el.name}</Link>
                    ))}
                </div>
            </div>
        </div>
    )
}