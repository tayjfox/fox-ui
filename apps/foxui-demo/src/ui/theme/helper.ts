import convert, { RGB } from 'color-convert';

const hslConvert = (color: string): string => {
  let hsl: [number, number, number];

  if (color.startsWith('#')) {
    hsl = convert.hex.hsl(color);
  } else if (color.startsWith('rgb')) {
    const rgbValues = color.match(/\d+/g)?.map(Number);
    if (rgbValues && rgbValues.length === 3) {
      hsl = convert.rgb.hsl(rgbValues as RGB);
    } else {
      throw new Error('Invalid RGB color format');
    }
  } else if (color.startsWith('hsl')) {
    const values = color.match(/[\d.]+/g);
    if (values && values.length >= 3) {
      return `${values[0]} ${values[1]}% ${values[2]}%`;
    }
    throw new Error('Invalid HSL color format');
  } else {
    throw new Error('Invalid color format');
  }

  return `${hsl[0]} ${hsl[1]}% ${hsl[2]}%`;
};

export default hslConvert;
export { hslConvert, hslConvert as hsl };
