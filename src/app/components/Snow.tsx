"use client";

import { useState, useEffect } from "react";
import Snowfall from "react-snowfall";

export default function Snow() {
  const [isDecember, setIsDecember] = useState(false);

  useEffect(() => {
    const currentMonth = new Date().getMonth();
    setIsDecember(currentMonth === 11);
  }, []);

  return (
    <>
      {isDecember && (
        <div className="fixed inset-0 z-50 pointer-events-none">
          <Snowfall snowflakeCount={100} />
        </div>
      )}
    </>
  );
}
