import React from "react";
import { minutesToDuration, secondsToDuration } from "../utils/duration";

export default function SessionTitleProgressBar({session, focusDuration,breakDuration,isTimerRunning,}) {
  if (!session) return null;

  const progressValue =(
    session.label === "Focusing"
      ? ((focusDuration * 60 - session?.timeRemaining) / (focusDuration * 60)) *
        100
      : ((breakDuration * 60 - session?.timeRemaining) / (breakDuration * 60)) *
        100);
  const pausedStatus = <h3>Paused</h3>

return (
    <div>
      {/* TODO: This area should show only when there is an active focus or break - i.e. the session is running or is paused */}
      <div className="row mb-2">
        <div className="col">
          {/* TODO: Update message below to include current session (Focusing or On Break) total duration */}
          <h2 data-testid="session-title">
            {session?.label} for{" "}
            {session?.label === "Focusing"
              ? `${minutesToDuration(focusDuration)} minutes`
              : `${minutesToDuration(breakDuration)} minutes`}
          </h2>
          {!isTimerRunning&&session&&pausedStatus}
          <p className="lead" data-testid="session-sub-title">
            {secondsToDuration(session?.timeRemaining)} remaining
          </p>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col">
          <div className="progress" style={{ height: "20px" }}>
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuemin="0"
              aria-valuemax="100"
              aria-valuenow={progressValue} // TODO: Increase aria-valuenow as elapsed time increases
              style={{ width: `${progressValue}%` }} // TODO: Increase width % as elapsed time increases
            />
          </div>
        </div>
      </div>
    </div>
  );
}
