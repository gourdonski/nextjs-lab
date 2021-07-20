import { createGlobalStyle } from 'styled-components';

export const $breakpoint = {
  xs: '480px',
  sm: '600px',
  md: '960px',
  lg: '1280px',
  xl: '1440px',
};

export const $fontSize = {
  sm: '0.5rem',
  md: '1rem',
  lg: '1.25rem',
  xl: '1.5rem',
  xxl: '2rem',
  xxxl: '3rem',
  xxxxl: '4rem',
};

export const $spacing = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '0.75rem',
  lg: '1rem',
  xl: '1.5rem',
  xxl: '2rem',
  xxxl: '3rem',
  xxxxl: '5rem',
};

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  html {
    font-size: ${$spacing.md};

    @media (min-width: ${$breakpoint.sm}) {
      font-size: ${$spacing.lg};
    }
  }

  body {
    margin: 0;
    min-width: ${$breakpoint.xs};
  }

  .sr-only {
    border: 0;
    clip: rect(0, 0, 0, 0);
    height: 1px;
    padding: 0;
    position: absolute;
    margin: -1px;
    overflow: hidden;
    white-space: nowrap;
    width: 1px;
  }
`;
