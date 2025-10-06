/**
 * @file DataProvider.tsx
 * @desc The DataProvider component provides data and functionality to its children components.
 */

import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Represents a value that can be stored in storage.
 * It can be a string, number, boolean, object, null, or undefined.
 */
export type StorageValue = string | number | boolean | object | null | undefined;

/**
 * Sets data in AsyncStorage for the given key.
 * @param key - The key to set the data for.
 * @param value - The value to be stored.
 * @returns A promise that resolves when the data is set successfully.
 */
const setData = async (key: string, value: StorageValue): Promise<void> => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Failed to set data for key ${key}:`, error);
  }
};

/**
 * Retrieves data from AsyncStorage for the given key.
 * @param key - The key to retrieve the data for.
 * @returns A promise that resolves with the retrieved data, or null if the data is not found.
 */
const getData = async (key: string): Promise<StorageValue | null> => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.error(`Failed to get data for key ${key}:`, error);
    return null;
  }
};

/**
 * Deletes data from AsyncStorage for the given key.
 * @param key - The key to retrieve the data for.
 * @returns A promise that resolves with the retrieved data, or null if the data is not found.
 */
const deleteData = async (key: string): Promise<void> => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error(`Failed to delete data for key ${key}:`, error);
  }
};




const storage = {
  setData,
  getData,
  deleteData,
  set: setData,
  getString: getData
}

export default storage;
export { deleteData, getData, setData, storage };
