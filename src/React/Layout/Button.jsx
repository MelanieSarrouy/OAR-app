import React from 'react';

const Button = (props) => {
  return (
    <button className="button inputButton" type="button">
      {props.content}
    </button>
  )
};

export default Button;