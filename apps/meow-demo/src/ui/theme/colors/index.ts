import { bigBadWolf, TW_BIGBADWOLF } from './bigBadWolf';
import { fireNFox, TW_FIRENFOX } from './fireNFox';
import { lightCat, TW_LIGHTCAT } from './lightCat';
import { midnightDog, TW_MIDNIGHTDOG } from './midnightDog';

const furlabThemes = {
  light: lightCat,
  dark: midnightDog,
  'big-bad-wolf': bigBadWolf,
  'fire-n-fox': fireNFox,
};

const themeMapping: Record<string, 'light' | 'dark'> = {
  light: 'light',
  dark: 'dark',
  'big-bad-wolf': 'dark',
  'fire-n-fox': 'light',
};

export { furlabThemes, themeMapping, TW_BIGBADWOLF, TW_FIRENFOX, TW_LIGHTCAT, TW_MIDNIGHTDOG };
