import { CountdownCircleTimer } from "react-countdown-circle-timer";


const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

// get size from screen
let deviceSize = window.innerWidth;

const timerProps = {
  isPlaying: true,
  size: deviceSize / 4.5,
  strokeWidth: 6
};

const renderTime = (dimension, time) => {
  return (
    <div className="time-wrapper">
      <div className="time">{time}</div>
      <div>{dimension}</div>
    </div>
  );
};

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;

export default function CircleTimer() {
    const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
  // const endTime = stratTime + 243248; // use UNIX timestamp in seconds
  // const endTime = stratTime + 1831914; //1831914
  const endTime = 1718647200 - stratTime; //1718658000 is epoch time for 17/06/2024 9pm
// 1717400772
// 1718647200
  const remainingTime = endTime;
  console.log("remainingTime: "+remainingTime);
  console.log("stratTime: "+stratTime);
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;
  // const difference = remainingTime;
  const difference = +new Date(`06/17/2024`) - +new Date();
  console.log("difference: " + difference);
  let timeLeft = {};

    if (difference > 0) {
        timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
        };
    }

  console.log(timeLeft);
  return (
    <div className="circle-timer">
      <h1>CircleTimer</h1>
      <CountdownCircleTimer
        {...timerProps}
        colors="#7E2E84"
        duration={daysDuration}
        initialRemainingTime={remainingTime}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            {/* {renderTime("days", getTimeDays(daysDuration - elapsedTime))} */}
            { renderTime("days", timeLeft.days)}
          </span>
        )}
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        colors="#D14081"
        duration={daySeconds}
        initialRemainingTime={remainingTime % daySeconds}
        onComplete={(totalElapsedTime) => ({
          shouldRepeat: remainingTime - totalElapsedTime > hourSeconds
        })}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            {/* {renderTime("hours", getTimeHours(daySeconds - elapsedTime))} */}
            {renderTime("hours", timeLeft.hours)}

          </span>
        )}
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        colors="#EF798A"
        duration={hourSeconds}
        initialRemainingTime={remainingTime % hourSeconds}
        onComplete={(totalElapsedTime) => ({
          shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds
        })}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            {/* {renderTime("minutes", getTimeMinutes(hourSeconds - elapsedTime))} */}
            {renderTime("minutes", timeLeft.minutes)}
          </span>
        )}
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        colors="#218380"
        duration={minuteSeconds}
        initialRemainingTime={difference % minuteSeconds}
        onComplete={(totalElapsedTime) => ({
          shouldRepeat: difference - totalElapsedTime > 0
        })}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            {/* {renderTime("seconds", getTimeSeconds(elapsedTime))} */}
            {renderTime("seconds", timeLeft.seconds)}
          </span>
        )}
      </CountdownCircleTimer>
    </div>
  );
}
