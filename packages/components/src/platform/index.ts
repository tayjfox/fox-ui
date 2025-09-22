/**
 * @license
 * Copyright (c) 2025 Vedla Labs by Tay Fox. All Rights Reserved.
 *
 * This project is licensed under the MIT License.
 * See the LICENSE file in the project root for full license information.
 *
 * @author Tay Fox <tay@vedla.ca>
 * @description: A React Native implementation of a container component.
 * @since MeowUI 0.1.0
 */

import { Platform } from 'react-native';

const isWeb = Platform.OS === 'web';
const isIOS = Platform.OS === 'ios';
const isAndroid = Platform.OS === 'android';
const isWindows = Platform.OS === 'windows';
const isMacOS = Platform.OS === 'macos';

const isMobile = isIOS || isAndroid;
const isDesktop = isWindows || isMacOS;
const isNative = isMobile || isDesktop;

const getPlatform = () => {
  return Platform.OS;
};

export { getPlatform, isAndroid, isDesktop, isIOS, isMacOS, isMobile, isNative, isWeb, isWindows };

export default getPlatform();
