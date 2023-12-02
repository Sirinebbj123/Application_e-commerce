import React, { useState, useEffect } from "react";
import '../../Styles/clock.css';

const Clock = () => {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  let interval;

  const countDown = () => {
    const destination = new Date("Dec 10, 2023").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = destination - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      if (difference < 0) {
        clearInterval(interval);
      } else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    countDown();
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="clock__wrapper d-flex align-items-center gap-3">
      <div className="clock__data d-flex align-items-center gap-3">
        <h1 className="text-white fs-3 mb-2">{days}</h1>
        <span className="text-white fs-3">:</span>
        <h1 className="text-white fs-3 mb-2">{hours}</h1>
        <span className="text-white fs-3">:</span>
        <h1 className="text-white fs-3 mb-2">{minutes}</h1>
        <span className="text-white fs-3">:</span>
        <h1 className="text-white fs-3 mb-2">{seconds}</h1>
      </div>
    </div>
  );
};

export default Clock;
