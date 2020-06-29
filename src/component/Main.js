import React, { useState, useContext } from "react";
import Clock from "./Clock";
import ClockControlBtn from "./ClockControlBtn";
import Interaction from "./Interaction";
import Task from "./Task";
import Calendar from "./Calendar";
import "./Main.css";

export const MODE = {
  MIN30: 1,
  MIN60: 2,
};

export const STATUS = {
  DEFAULT: 0,
  WORK: 1,
  BREAK: 2,
};

export const VOLUME = {
  MUTE: 0,
  MEDIUM: 50,
  HIGH: 100,
};

const MainContext = React.createContext({
  sec: null,
  setSec: () => {},
  isStarted: false,
  setIsStarted: () => {},
  isPaused: false,
  setIsPaused: () => {},
  currentMode: MODE.MIN30,
  setCurrentMode: () => {},
  currentStatus: STATUS.DEFAULT,
  setCurrentStatus: () => {},
  currentTask: "",
  setCurretTask: () => {},
  tasks: [],
  setTasks: () => {},
  vol: 50,
  setVol: () => {},
});

export const useMainContext = () => useContext(MainContext);

const Main = () => {
  const [sec, setSec] = useState(null);
  const [isStarted, setIsStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentMode, setCurrentMode] = useState(MODE.MIN30);
  const [currentStatus, setCurrentStatus] = useState(STATUS.DEFAULT);
  const [currentTask, setCurrentTask] = useState("");
  const [tasks, setTasks] = useState([
    { task: "test", mode: 2, time: 1492718346338 },
    { task: "test", mode: 1, time: 1590409308205 },
    { task: "test", mode: 2, time: 1592548875108 },
    { task: "test", mode: 1, time: 1593000528494 },
    { task: "test", mode: 1, time: 1593000528494 },
  ]);
  const [vol, setVol] = useState(VOLUME.MEDIUM);
  return (
    <MainContext.Provider
      value={{
        sec,
        setSec,
        isStarted,
        setIsStarted,
        isPaused,
        setIsPaused,
        currentMode,
        setCurrentMode,
        currentStatus,
        setCurrentStatus,
        currentTask,
        setCurrentTask,
        tasks,
        setTasks,
        vol,
        setVol,
      }}
    >
      <div className="main-comp">
        <div className="clock-and-interaction-container">
          <Clock />
          <ClockControlBtn />
          <Interaction />
        </div>
        <div className="task-list-and-calendar-container">
          <Task />
          <Calendar />
        </div>
      </div>
    </MainContext.Provider>
  );
};

export default Main;
