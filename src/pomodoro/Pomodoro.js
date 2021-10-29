import React, { useState } from "react";

import FocusAndBreakDurations from "./FocusAndBreakDurations";
import useInterval from "../utils/useInterval";
import SessionTitleProgressBar from "./SessionTitleProgressBar";
import PlayPauseButtons from "./PlayPauseButtons";

// These functions are defined outside of the component to insure they do not have access to state
// and are, therefore more likely to be pure.

/**
 * Update the session state with new state after each tick of the interval.
 * @param prevState
 *  the previous session state
 * @returns
 *  new session state with timing information updated.
 */
function nextTick(prevState) {
  const timeRemaining = Math.max(0, prevState.timeRemaining - 1);
  return {
    ...prevState,
    timeRemaining,
  };
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Higher order function that returns a function to update the session state with the next session type upon timeout.
 * @param focusDuration
 *    the current focus duration
 * @param breakDuration
 *    the current break duration
 * @returns
 *  function to update the session state.
 */
function nextSession(focusDuration, breakDuration) {
  /**
   * State function to transition the current session type to the next session. e.g. On Break -> Focusing or Focusing -> On Break
   */
  return (currentSession) => {
    if (currentSession.label === "Focusing") {
      return {
        label: "On Break",
        timeRemaining: breakDuration * 60,
      };
    }
    return {
      label: "Focusing",
      timeRemaining: focusDuration * 60,
    };
  };
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function Pomodoro() {
  // Timer starts out paused
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  // The current session - null where there is no session running
  const [session, setSession] = useState(null);


  const [focusDuration, setFocusDuration] = useState(25);
  const [breakDuration, setBreakDuration] = useState(5);
  //////////////////////////////////////////////////////////////////////////////////////
  /**
   * Custom hook that invokes the callback function every second
   *
   */
  useInterval(
    () => {
      if (session.timeRemaining === 0) {
        new Audio("https://bigsoundbank.com/UPLOAD/mp3/1482.mp3").play();
        return setSession(nextSession(focusDuration, breakDuration));
      }
      return setSession(nextTick);
    },
    isTimerRunning ? 1000 : null
  );
  //////////////////////////////////////////////////////////////////////////////////////

  return (
    <div className="pomodoro">
      <FocusAndBreakDurations
        focusDuration={focusDuration}
        setFocusDuration={setFocusDuration}
        breakDuration={breakDuration}
        setBreakDuration={setBreakDuration}
      />
      <PlayPauseButtons
        isTimerRunning={isTimerRunning}
        setIsTimerRunning={setIsTimerRunning}
        focusDuration={focusDuration}
        setSession={setSession}
      />
      <SessionTitleProgressBar
        session={session}
        focusDuration={focusDuration}
        breakDuration={breakDuration}
      />
    </div>
  );
}

export default Pomodoro;
