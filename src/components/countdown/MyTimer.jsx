/**
 * https://www.digitalocean.com/community/tutorials/react-countdown-timer-react-hooks
 *  */

import { useEffect, useState } from "react";

const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`06/17/${year}`) - +new Date();
    // console.log(difference);
    // console.log(new Date(`06/02/${year}`));

    let timeLeft = {};

    if (difference > 0) {
        timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
        };
    }

    // console.log(timeLeft);
    return timeLeft;
};

calculateTimeLeft();

export default function MyTimer() {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    // console.log(timeLeft);

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        if(!timeLeft[interval]) {
            return;
        }
        timerComponents.push(
            <span>
                {timeLeft[interval]} {interval}{" "}
            </span>
        );
    });

    return (
        <div>
            <h1>MyTimer - 17/06/2024</h1>
            {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </div>
    )
}
