import { useTimer } from "@/hooks/useTimer";
import { formatTime } from "@/utils/formatTime";

interface TimerProps {
  initialSeconds: number;
  active: boolean;
  setActive: (active: boolean) => void;
  reset: boolean; // Adiciona a propriedade reset
  setReset: (reset: boolean) => void; // Adiciona a propriedade setReset
}

const Timer: React.FC<TimerProps> = ({
  initialSeconds,
  active,
  setActive,
  reset,
  setReset,
}) => {
  const { secondsLeft } = useTimer(
    initialSeconds,
    active,
    setActive,
    reset,
    setReset,
  );
  const formattedTime = formatTime(secondsLeft);

  return (
    <div className="container">
      <h1>{formattedTime}</h1>
    </div>
  );
};

export default Timer;
