import React from 'react';
import { NavigationButtonProps } from './index';
import './Navigation-Button.css';

const NavigationButton = ({
  disabled = false,
  onNavigate,
  children
}: NavigationButtonProps) => {
  const disabledLink = disabled ? 'disabled' : '';
  const uninteractiveLink = onNavigate ? '' : 'uninteractive';

  return (
    <a
      className={`link ${disabledLink} ${uninteractiveLink}`}
      onClick={onNavigate}
    >
      {children}
    </a>
  );
};

export default NavigationButton;
