import React from 'react';
import PropTypes from 'prop-types';
import './PrintOnClick.css';

const PrintOnClick = ({ onChange, onKeyPress, onClick }) => {
  return (
    <div className="total">
      <form>
        <input
          className="input-box1"
          type="text"
          onChange={onChange}
          onKeyPress={onKeyPress}
        />
      </form>
      <form>
        <button className="print-button" type="button" onClick={onClick}>
          enter
        </button>
      </form>
    </div>
  );
};

PrintOnClick.propTypes = {
  onChange: PropTypes.func.isRequired,
  onKeyPress: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PrintOnClick;
