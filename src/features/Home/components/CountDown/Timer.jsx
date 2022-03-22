import React, { Fragment } from "react";

Timer.propTypes = {};

function Timer(props) {
  return (
    <Fragment>
      <div className="countdown-day">
        <p>{props.days}</p>
        <p>ngày</p>
      </div>
      <div className="countdown-hour">
        <p>{props.hours}</p>
        <p>giờ</p>
      </div>
      <div className="countdown-minute">
        <p>{props.minutes}</p>
        <p>phút</p>
      </div>
      <div className="countdown-second">
        <p>{props.seconds}</p>
        <p>giây</p>
      </div>
    </Fragment>
  );
}

export default Timer;
