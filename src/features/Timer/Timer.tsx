import { useTimer } from "@/hooks/useTimer";
import { formatTime } from "@/utils/formatTime";

interface TimerProps {
  initialSeconds: number;
  active: boolean;
  setActive: (active: boolean) => void;
}

const Timer: React.FC<TimerProps> = ({ initialSeconds, active, setActive }) => {
  const { secondsLeft } = useTimer(initialSeconds, active, setActive);
  const formattedTime = formatTime(secondsLeft);

  return (
    <div className="container">
      <h1>{formattedTime}</h1>
    </div>
  );
};

export default Timer;
