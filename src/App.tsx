import { useState } from "react";
import Timer from "./features/Timer/Timer";
import { Button } from "@/components/ui/button";
import { appWindow } from "@tauri-apps/api/window";
const draggableElement = document.body;
if (draggableElement) {
  draggableElement.setAttribute("data-tauri-drag-region", "");
}
await appWindow.startDragging();
function App() {
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [active, setActive] = useState(false);
  const [reset, setReset] = useState(false); // Adiciona estado para reinicialização

  const setSecondsToFocus = () => setTimerSeconds(5);
  const setSecondsToShortBreak = () => setTimerSeconds(300);
  const setSecondsToLongBreak = () => setTimerSeconds(900);

  const toggleTimer = () => {
    if (timerSeconds !== 0) {
      setActive(!active);
    }
  };

  const resetTimer = () => {
    setReset(true); // Sinaliza para reiniciar o timer
    setActive(false); // Garante que o timer está pausado
  };

  return (
    <div className="container" data-tauri-drag-region>
      <div className="flex gap-2">
        <Button onClick={setSecondsToFocus}>Focus</Button>
        <Button onClick={setSecondsToShortBreak}>Short Break</Button>
        <Button onClick={setSecondsToLongBreak}>Long Break</Button>
      </div>
      <Timer
        key={timerSeconds}
        initialSeconds={timerSeconds}
        active={active}
        setActive={setActive}
        reset={reset} // Passa o estado de reset para o hook
        setReset={setReset} // Passa a função para alterar o estado de reset
      />
      <div className="flex gap-2 justify-center w-fit self-center">
        <Button onClick={toggleTimer}>{active ? "Pausar" : "Iniciar"}</Button>
        <Button onClick={resetTimer}>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.84998 7.49998C1.84998 4.66458 4.05979 1.84998 7.49998 1.84998C10.2783 1.84998 11.6515 3.9064 12.2367 5H10.5C10.2239 5 10 5.22386 10 5.5C10 5.77614 10.2239 6 10.5 6H13.5C13.7761 6 14 5.77614 14 5.5V2.5C14 2.22386 13.7761 2 13.5 2C13.2239 2 13 2.22386 13 2.5V4.31318C12.2955 3.07126 10.6659 0.849976 7.49998 0.849976C3.43716 0.849976 0.849976 4.18537 0.849976 7.49998C0.849976 10.8146 3.43716 14.15 7.49998 14.15C9.44382 14.15 11.0622 13.3808 12.2145 12.2084C12.8315 11.5806 13.3133 10.839 13.6418 10.0407C13.7469 9.78536 13.6251 9.49315 13.3698 9.38806C13.1144 9.28296 12.8222 9.40478 12.7171 9.66014C12.4363 10.3425 12.0251 10.9745 11.5013 11.5074C10.5295 12.4963 9.16504 13.15 7.49998 13.15C4.05979 13.15 1.84998 10.3354 1.84998 7.49998Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        </Button>
      </div>
    </div>
  );
}

export default App;
