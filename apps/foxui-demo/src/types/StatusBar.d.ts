import type { StatusBarProps as RNStatusBarProps } from 'expo-status-bar';

export interface StatusBarProps extends RNStatusBarProps {
  className?: string;
}
