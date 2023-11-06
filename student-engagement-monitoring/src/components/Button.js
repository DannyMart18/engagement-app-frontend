import React from 'react';

function Button({ onClick, text, buttonStyle }) {
  return (
    <button className={buttonStyle} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
