import React, { useRef, useEffect } from 'react';

function Timer() {
  const count = useRef(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      count.current += 1;
      console.log(count.current);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <div>Timer Count: {count.current}</div>;
}
