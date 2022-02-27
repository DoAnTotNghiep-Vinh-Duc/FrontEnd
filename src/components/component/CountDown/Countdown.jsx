import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { useClock } from "../../../hooks/useClock";
import "./Countdown.scss";
import Timer from "./Timer";

Countdown.propTypes = {
  futureDate: PropTypes.string.isRequired,
};

function Countdown(props) {
  const { futureDate } = props;
  const { days, hours, minutes, seconds, isTimeUp } = useClock(futureDate);

  const timerContent = isTimeUp ? (
    <div className="time-up">Thời gian sale đã hết</div>
  ) : (
    <Fragment>
      <div className="countdown-time">
        <Timer days={days} hours={hours} minutes={minutes} seconds={seconds} />
      </div>
      <div className="countdown-discount">
        <p className="countdown-discount1">GIẢM GIÁ TỚI</p>
        <p className="countdown-discount2">65%</p>
      </div>
      <div className="countdown-btn">MUA NGAY</div>
    </Fragment>
  );

  return (
    <div className="countdown">
      <div className="countdown-bgr">
        <div className="countdown-content">
          <div className="countdown-content-title">Flash sale hàng tháng</div>
          {timerContent}
        </div>
      </div>
    </div>
  );
}

export default Countdown;
