import React from "react";
import classNames from "../utils/class-names";
export default function PlayPauseButtons({isTimerRunning,setIsTimerRunning,setSession,focusDuration,session}) {
  /**
   * Called whenever the play/pause button is clicked.
   */
  function playPause() {
    setIsTimerRunning((prevState) => {
      const nextState = !prevState;
      if (nextState) {
        setSession((prevStateSession) => {
          // If the timer is starting and the previous session is null,
          // start a focusing session.
          if (prevStateSession === null) {
            return {
              label: "Focusing",
              timeRemaining: focusDuration * 60,
            };
          }
          return prevStateSession;
        });
      }
      return nextState;
    });
  }
  //fucntion to be called when stop button is clicked
  //this should reset the timer to its original state
  const stopTimer = () => {
    setIsTimerRunning(false);
    setSession(null);
  };

  return (
    <div className="row">
      <div className="col">
        <div
          className="btn-group btn-group-lg mb-2"
          role="group"
          aria-label="Timer controls"
        >
          <button
            type="button"
            className="btn btn-primary"
            data-testid="play-pause"
            title="Start or pause timer"
            onClick={playPause}
          >
            <span
              className={classNames({
                oi: true,
                "oi-media-play": !isTimerRunning,
                "oi-media-pause": isTimerRunning,
              })}
            />
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            data-testid="stop"
            title="Stop the session"
            //disabled prevents stop button from being clickable while timer is not running
            disabled={!session}
            onClick={stopTimer}
          >
            <span className="oi oi-media-stop" />
          </button>
        </div>
      </div>
    </div>
  );
}
