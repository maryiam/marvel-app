import { ReactNode } from 'react';

export interface NavigationButtonProps {
  disabled?: boolean;
  onNavigate?: () => void;
  children?: ReactNode;
}
