import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import "./Scroll.scss";

Scroll.propTypes = {
  showBelow: PropTypes.number,
};

function Scroll({ showBelow }) {
  const [show, setShow] = useState(showBelow ? false : true);

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` });
  };

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll);
      return () => window.removeEventListener(`scroll`, handleScroll);
    }
  });

  return (
    show && (
      <div className="scroll" onClick={handleClick}>
        <i className="fas fa-angle-up"></i>
      </div>
    )
  );
}

export default Scroll;
