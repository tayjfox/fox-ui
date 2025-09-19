export interface ToastOptions {
  action?: 'success' | 'error' | 'warning' | 'info' | 'muted' | undefined;
  message?: string;
  placement?: 'top left' | 'top right' | 'bottom left' | 'bottom right' | 'top' | 'bottom';
  duration?: number;
}
