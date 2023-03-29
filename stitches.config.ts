import { createStitches } from '@stitches/react';

export const COLORS = {
  main: '#DBCEC0',
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
