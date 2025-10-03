import { ReactNode } from 'react';

import { Navigator } from 'expo-router';

export interface DataContextValue {
  rootNavigator?: Navigator;
  setRootNavigator: React.Dispatch<React.SetStateAction<Navigator | null>>;
}
/**
 * Represents the props for the DataProvider component.
 */
export type DataProviderProps = {
  children: ReactNode;
};
