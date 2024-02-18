import { useState } from "react";
import Timer from "./features/Timer/Timer";
import { Button } from "@/components/ui/button";

function App() {
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [active, setActive] = useState(false);
  const setSecondsToFocus = () => setTimerSeconds(1500);
  const setSecondsToShortBreak = () => setTimerSeconds(300);
  const setSecondsToLongBreak = () => setTimerSeconds(900);

  const toggleTimer = () => {
    setActive(!active);
  };

  return (
    <div className="container">
      <Timer
        key={timerSeconds}
        initialSeconds={timerSeconds}
        active={active}
        setActive={setActive}
      />
      <div className="flex gap-2">
        <Button onClick={setSecondsToFocus}>Focus</Button>
        <Button onClick={setSecondsToShortBreak}>Short Break</Button>
        <Button onClick={setSecondsToLongBreak}>Long Break</Button>
        <Button onClick={toggleTimer}>{active ? "Pausar" : "Iniciar"}</Button>
        <Button onClick={() => setActive(false)}>Pausar</Button>
      </div>
    </div>
  );
}

export default App;
