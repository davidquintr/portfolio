"use client"
import nicaragua from "../../../public/nicaragua_2018.svg"
import cap from "../../../public/cap.webp"
import Image from "next/image";
import { useEffect, useState } from 'react';

export default function SpecialDays() {
    const [showNicaraguaImage, setNicaraguaImage] = useState(false);
    const [showBirthdayImage, setBirthdayImage] = useState(false);


    useEffect(() => {
        const verifyDate = () => {
            const currentDate = new Date();
            const currentMonth = currentDate.getMonth() + 1;
            const currentDay = currentDate.getDate();

            if (currentMonth === 4 && currentDay >= 18 && currentDay <= 21) {
                setNicaraguaImage(true);
            } else {
                setNicaraguaImage(false);
            }

            if (currentMonth === 4 && currentDay == 19) {
                setBirthdayImage(true);
            } else {
                setBirthdayImage(false);
            }
        };

        verifyDate();
    }, []);

    return (
        <>
            {showBirthdayImage && (
                <Image className=" z-50 absolute -top-[18%] left-[35%]" alt="Birthday Cap" title="I'ts my birthday :D" src={cap} width={30} sizes="(max-width: 768px) 28vw, (max-width: 1200px) 18vw, 20vw"/>
            )}
            {showNicaraguaImage && (
                <Image className="absolute left-0" alt="Nicaragua 2018" src={nicaragua} width={120} sizes="(max-width: 768px) 28vw, (max-width: 1200px) 18vw, 20vw"/>
            )}
        </>
    )
}
