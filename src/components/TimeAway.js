import React, { useState, useEffect } from 'react';

const TimeAway = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
  const [countdown, setCountdown] = useState('00:00');

  useEffect(() => {
    const updateCurrentTime = () => {
      setCurrentTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };

    const updateCountdown = () => {
      const now = new Date();
      const nextHour = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours() + 1, 0, 0, 0);
      const diff = nextHour - now + 60000; // Add one minute (60000 milliseconds)
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      if (diff <= 60000) {
        setCountdown(`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`);
      } else {
        const hours = Math.floor(diff / (1000 * 60 * 60));
        setCountdown(`${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`);
      }
    };

    const timer = setInterval(() => {
      updateCurrentTime();
      updateCountdown();
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="time-block">
      <h2 id="class-time" className="go-galaxy" style={{margin: 0}}>{currentTime}</h2>
      <h1 id="class-countdown" className="go-ice" style={{margin: 0}}>{countdown}</h1>
    </div>
  );
};

export default TimeAway;
