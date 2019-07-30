import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');


const vw = width / 100;
const vh = height / 100;
const vmin = Math.min(vw, vh);
const vmax = Math.min(vw, vh);

export {
  vh,
  vw,
  vmax,
  vmin,
};
