import { useEffect, useRef, useState } from "react";

export const useTimer = (
  initialSeconds: number,
  active: boolean,
  setActive: (active: boolean) => void,
  reset: boolean,
  setReset: (reset: boolean) => void,
) => {
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);
  const secondsLeftRef = useRef(secondsLeft);

  useEffect(() => {
    secondsLeftRef.current = initialSeconds;
    setSecondsLeft(initialSeconds);
  }, [initialSeconds]); // Adiciona initialSeconds como dependência

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

  useEffect(() => {
    if (reset) {
      setSecondsLeft(initialSeconds);
      setReset(false); // Desativa o sinalizador de reinicialização
    }
  }, [reset]);

  return { secondsLeft, active };
};
