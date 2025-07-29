'use client';

import { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: Date;
}

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export default function Countdown({ targetDate }: CountdownProps) {
  const calculateTimeLeft = (): TimeLeft | null => {
    const difference = +targetDate - +new Date();
    
    if (difference <= 0) {
      const today = new Date();
      if (
        targetDate.getDate() === today.getDate() &&
        targetDate.getMonth() === today.getMonth()
      ) {
         return null; // It's today
      }
    }
    
    return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    // Set initial value on client
    setTimeLeft(calculateTimeLeft());
    
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (timeLeft === null) {
      return <div className="text-2xl font-bold font-headline text-primary animate-pulse">🎉 Happy Birthday! 🎉</div>;
  }

  return (
    <div className="flex justify-center gap-2 sm:gap-3 text-center" aria-label="Countdown timer">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="flex flex-col items-center p-2 bg-primary/10 rounded-lg min-w-[55px] sm:min-w-[65px] shadow-inner">
          <span className="text-3xl sm:text-4xl font-bold text-primary tracking-tighter">{String(value).padStart(2, '0')}</span>
          <span className="text-xs sm:text-sm uppercase text-primary/70 tracking-wider font-body">{unit}</span>
        </div>
      ))}
    </div>
  );
}
