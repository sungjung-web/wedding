import React, { FC } from 'react';
import useDarkmode from 'src/hooks/useDarkmode';

interface ButtonProps {
  label: string;
  href: string;
}

const Button: FC<ButtonProps> = ({ href, label }) => {
  const isDarkMode = useDarkmode();
  const buttonColor = isDarkMode ? 'white' : 'black';

  return (
    <a href={href} target="_blank">
      {label}
      <style jsx>{`
        width: 100%;
        cursor: pointer;
        font-size: 1rem;
        height: 3rem;
        border: none;
        color: ${buttonColor};
        display: flex;
        justify-content: center;
        align-items: center;
        background: ${isDarkMode ? 'black' : 'white'};
        box-shadow: 0 0 1px 1px ${isDarkMode ? 'white' : 'lightgray'};
      `}</style>
    </a>
  );
};

export default Button;
