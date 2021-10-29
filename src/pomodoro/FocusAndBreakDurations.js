import { minutesToDuration } from "../utils/duration";
import React from "react";
export default function FocusAndBreakDurations({ focusDuration, setFocusDuration, breakDuration,setBreakDuration,isTimerRunning,}) {
  const handleDecreaseFocus = () => {
    if (focusDuration === 5) return;
    setFocusDuration((state) => state - 5);
  };
  const handleIncreaseFocus = () => {
    if (focusDuration === 60) return;
    setFocusDuration((state) => state + 5);
  };
  const handleDecreaseBreak = () => {
    if (breakDuration === 1) return;
    setBreakDuration((state) => state - 1);
  };
  const handleIncreaseBreak = () => {
    if (breakDuration === 15) return;
    setBreakDuration((state) => state + 1);
  };

  return (
    <div className="row">
      <div className="col">
        <div className="input-group input-group-lg mb-2">
          <span className="input-group-text" data-testid="duration-focus">
            Focus Duration: {minutesToDuration(focusDuration)}
          </span>
          <div className="input-group-append">
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="decrease-focus"
              onClick={handleDecreaseFocus}
              disabled={isTimerRunning}
            >
              <span className="oi oi-minus" />
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="increase-focus"
              onClick={handleIncreaseFocus}
              disabled={isTimerRunning}
            >
              <span className="oi oi-plus" />
            </button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="float-right">
          <div className="input-group input-group-lg mb-2">
            <span className="input-group-text" data-testid="duration-break">
              Break Duration: {minutesToDuration(breakDuration)}
            </span>
            <div className="input-group-append">
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="decrease-break"
                onClick={handleDecreaseBreak}
                disabled={isTimerRunning}
              >
                <span className="oi oi-minus" />
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="increase-break"
                onClick={handleIncreaseBreak}
                disabled={isTimerRunning}
              >
                <span className="oi oi-plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
