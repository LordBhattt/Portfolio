import { useEffect, useState } from 'react';

function formatBomTime(date) {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).format(date);

  return `BOM  ${parts}`;
}

export default function useTime() {
  const [time, setTime] = useState(() => formatBomTime(new Date()));

  useEffect(() => {
    const update = () => {
      setTime(formatBomTime(new Date()));
    };

    update();
    const intervalId = window.setInterval(update, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return time;
}
