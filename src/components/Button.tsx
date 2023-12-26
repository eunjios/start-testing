import { useState } from 'react';
import classes from './Button.module.css';

function Button() {
  const [isWhite, setIsWhite] = useState(true);
  const btnClass = `${classes.button} ${
    isWhite ? classes.white : classes.black
  }`;
  const text = `Change to ${isWhite ? 'Black' : 'White'}!`;

  const toggle = () => {
    setIsWhite((prev) => !prev);
  };

  return (
    <div className={classes.container}>
      <button onClick={toggle} className={btnClass}>
        {text}
      </button>
    </div>
  );
}

export default Button;
