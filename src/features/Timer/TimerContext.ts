import React from "react";

export interface TimerContextData {
  seconds: number;
  active: boolean;
  setActive: (active: boolean) => void;
  setSeconds: (seconds: number) => void;
  restartTimer: (seconds: number) => void;
}

export const TimerContext = React.createContext<TimerContextData>(
  {} as TimerContextData,
);
