import { createStitches } from '@stitches/react';

export const COLORS = {
  main: '#C2D7E4',
  grade1: '#616C72',
  incorrect: '#af6868',
};

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: COLORS,
  },
  media: {
    moblie: '(max-width: 1023px)',
    pc: '(min-width: 1024px)',
  },
});
