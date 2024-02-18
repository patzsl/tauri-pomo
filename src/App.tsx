import { useState } from "react";
import Timer from "./features/Timer/Timer";
import { Button } from "@/components/ui/button";

function App() {
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [active, setActive] = useState(false);
  const [reset, setReset] = useState(false); // Adiciona estado para reinicialização

  const setSecondsToFocus = () => setTimerSeconds(1500);
  const setSecondsToShortBreak = () => setTimerSeconds(300);
  const setSecondsToLongBreak = () => setTimerSeconds(900);

  const toggleTimer = () => {
    setActive(!active);
  };

  const resetTimer = () => {
    setReset(true); // Sinaliza para reiniciar o timer
    setActive(false); // Garante que o timer está pausado
  };

  return (
    <div className="container">
      <Timer
        key={timerSeconds}
        initialSeconds={timerSeconds}
        active={active}
        setActive={setActive}
        reset={reset} // Passa o estado de reset para o hook
        setReset={setReset} // Passa a função para alterar o estado de reset
      />
      <div className="flex gap-2">
        <Button onClick={setSecondsToFocus}>Focus</Button>
        <Button onClick={setSecondsToShortBreak}>Short Break</Button>
        <Button onClick={setSecondsToLongBreak}>Long Break</Button>
        <Button onClick={toggleTimer}>{active ? "Pausar" : "Iniciar"}</Button>
        <Button onClick={resetTimer}>Reiniciar</Button>
      </div>
    </div>
  );
}

export default App;
