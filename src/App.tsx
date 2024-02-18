import { useState } from "react";
import Timer from "./features/Timer/Timer";
import { Button } from "@/components/ui/button";

function App() {
  const [seconds, setSeconds] = useState(1800);
  const [active, setActive] = useState(false);

  return (
    <div className="container">
      <Timer initialSeconds={seconds} active={active} setActive={setActive} />
      <div className="flex gap-2">
        <Button onClick={() => setSeconds(600)}>10</Button>
        <Button onClick={() => setSeconds(1500)}>25</Button>
        <Button onClick={() => setSeconds(1800)}>30</Button>
        <Button onClick={() => setActive(true)}>Iniciar</Button>
        <Button onClick={() => setActive(false)}>Pausar</Button>
      </div>
    </div>
  );
}

export default App;
