import { NativeSyntheticEvent, TargetedEvent, TouchableOpacityProps } from 'react-native';

export interface TouchableWithoutFeedbackProps extends TouchableOpacityProps {
  useDefaultHitSlop?: boolean;
  children?: React.ReactNode;
  focusable?: boolean;
}

export type TouchableWithoutFeedbackElement = React.ReactElement<TouchableWithoutFeedbackProps>;

export interface TouchableBaseWebProps extends TouchableWithoutFeedbackProps {
  onMouseEnter?: (e: NativeSyntheticEvent<TargetedEvent>) => void;
  onMouseLeave?: (e: NativeSyntheticEvent<TargetedEvent>) => void;
  onFocus?: (e: NativeSyntheticEvent<TargetedEvent>) => void;
  onBlur?: (e: NativeSyntheticEvent<TargetedEvent>) => void;
}
/**
 * Additional props introduced in MeowUI. v0.1.0
 * @since foxUI 1.0.0
 */
export interface TouchableWebProps extends TouchableBaseWebProps {
  className?: string;
}

export type TouchableWebElement = React.ReactElement<TouchableWebProps>;
