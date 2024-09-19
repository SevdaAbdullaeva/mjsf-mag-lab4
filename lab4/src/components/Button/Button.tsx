import React from 'react';
import './Button.css';

type ButtonColor = 'red' | 'blue' | 'green' | 'default';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps {
  label: string;
  color?: ButtonColor;
  size?: ButtonSize;
  icon?: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, color = 'default', size = 'medium', icon, onClick }) => {
  const buttonClass = `button ${color} ${size}`;

  return (
    <button className={buttonClass} onClick={onClick}>
      {icon && <span className="icon">{icon}</span>}
      {label}
    </button>
  );
};

export default Button;
