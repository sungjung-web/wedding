import React, { FC } from 'react';
import useDarkmode from 'src/hooks/useDarkmode';

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: FC<ButtonProps> = ({ onClick, label }) => {
  const isDarkMode = useDarkmode();
  const buttonColor = isDarkMode ? 'white' : 'black';

  return (
    <button onClick={onClick}>
      {label}
      <style jsx>{`
        width: 100%;
        cursor: pointer;
        font-size: 1rem;
        height: 3rem;
        background-color: transparent;
        border: 3px outset;
        color: ${buttonColor};
        display: flex;
        justify-content: center;
        align-items: center;
      `}</style>
    </button>
  );
};

export default Button;
