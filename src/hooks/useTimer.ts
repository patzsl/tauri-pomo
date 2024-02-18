import { useEffect, useRef, useState } from "react";

export const useTimer = (
  initialSeconds: number,
  active: boolean,
  setActive: (active: boolean) => void,
) => {
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);
  const secondsLeftRef = useRef(secondsLeft);

  useEffect(() => {
    let interval: any = null;
    if (active) {
      interval = setInterval(() => {
        secondsLeftRef.current--;
        setSecondsLeft(secondsLeftRef.current);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [active]);

  return { secondsLeft, active }; // Certifique-se de retornar 'active' aqui
};
