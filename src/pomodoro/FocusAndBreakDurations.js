function FocusAndBreakDurations (){



    return (<div className="row">
    <div className="col">
      <div className="input-group input-group-lg mb-2">
        <span className="input-group-text" data-testid="duration-focus">
          {/* TODO: Update this text to display the current focus session duration 
          make time varible/access time via an object */ }
          Focus Duration: 25:00
        </span>
        <div className="input-group-append">
          {/* TODO: Implement decreasing focus duration and disable during a focus or break session 
          (make not clickable when timer is running, and make click event to decrease focus duration value)*/}
          <button
            type="button"
            className="btn btn-secondary"
            data-testid="decrease-focus"
          >
            <span className="oi oi-minus" />
          </button>
          {/* TODO: Implement increasing focus duration  and disable during a focus or break session 
          (make not clickable when timer is running, and make click event to increase focus duration value)*/}
          <button
            type="button"
            className="btn btn-secondary"
            data-testid="increase-focus"
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
            {/* TODO: Update this text to display the current break session duration 
             make time varible/access time via an object */}
            Break Duration: 05:00
          </span>
          <div className="input-group-append">
            {/* TODO: Implement decreasing break duration and disable during a focus or break session
            (make not clickable when timer is running, and make click event to increase focus duration value)*/}
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="decrease-break"
            >
              <span className="oi oi-minus" />
            </button>
            {/* TODO: Implement increasing break duration and disable during a focus or break session
            (make not clickable when timer is running, and make click event to increase focus duration value)*/}
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="increase-break"
            >
              <span className="oi oi-plus" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>)
}