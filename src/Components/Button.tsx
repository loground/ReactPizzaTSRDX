import React from 'react';
import classNames from 'classnames';

type ButtonProps = {
  onClick?: () => void;
  className?: string;
  outline?: boolean;
  children: React.ReactNode;
};

const Button: React.FC <ButtonProps> = ({ onClick, className, outline, children }) => {
  return (
    <button
      onClick={onClick}
      className={classNames('button', className, {
        'button--outline': outline,
      })}>
      {children}
    </button>
  );
};

export default Button;
