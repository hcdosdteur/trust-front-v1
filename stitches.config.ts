import { createStitches } from '@stitches/react';

export const COLORS = {
  main: '#C2D7E4',
  grade1: '#616C72',
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
});
