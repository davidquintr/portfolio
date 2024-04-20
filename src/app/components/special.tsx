"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import events from "../sources/events";

export default function SpecialDays() {
  const [getSpecialEvents, setSpecialEvents] = useState<boolean[]>([]);

  useEffect(() => {
    const verifyDate = () => {
      const currentDate = new Date();
      const currentMonth = currentDate.getMonth() + 1;
      const currentDay = currentDate.getDate();

      const updatedSpecialEvents = events.map((event) => {
        if (currentMonth !== event.month) {
          return false;
        }

        const isTimeRange = Array.isArray(event.dayRange);
        const isInRange = isTimeRange
          ? currentDay >=
              (Array.isArray(event.dayRange) ? event.dayRange[0] : 0) &&
            currentDay <=
              (Array.isArray(event.dayRange) ? event.dayRange[1] : 0)
          : currentDay === event.dayRange;

        return isInRange;
      });

      setSpecialEvents([...updatedSpecialEvents]);
    };

    verifyDate();
  }, []);

  console.log(getSpecialEvents);

  return (
    <>
      {getSpecialEvents.map(
        (special, index) =>
          special && (
            <Image
              className="absolute"
              style={{
                zIndex: events[index].index,
                top: events[index].position.top,
                bottom: events[index].position.top,
                left: events[index].position.left,
                right: events[index].position.right,
              }}
              alt={events[index].name}
              src={events[index].image}
              width={events[index].size}
              height={events[index].size}
              key={index}
            />
          )
      )}
    </>
  );
}
