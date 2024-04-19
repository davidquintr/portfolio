"use client"
import cap from "../../../public/cap.webp"
import Image from "next/image";
import { useEffect, useState } from 'react';

export default function Birthday() {
    const [showImage, setShowImage] = useState(false);

    useEffect(() => {
        const verifyDate = () => {
            const currentDate = new Date();
            const currentMonth = currentDate.getMonth() + 1;
            const currentDay = currentDate.getDate();

            if (currentMonth === 4 && currentDay == 18) {
                setShowImage(true);
            } else {
                setShowImage(false);
            }
        };

        verifyDate();
    }, []);

    return (
        <>
            {showImage && (
                <Image className=" z-50 absolute -top-[20%] left-[35%]" alt="Birthday Cap" title="I'ts my birthday :D" src={cap} width={30} sizes="(max-width: 768px) 28vw, (max-width: 1200px) 18vw, 20vw"/>
            )}
        </>
    )
}
