import { createGlobalStyle } from 'styled-components';

import colors, { device } from './constants';

import Rubik_regular from '../fonts/Rubik/static/Rubik-Regular.ttf';
import Rubik_medium from '../fonts/Rubik/static/Rubik-Medium.ttf';

export default createGlobalStyle`
  @font-face {
    font-family: 'rubik';
    src: url(${Rubik_regular});
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'rubik';
    src: url(${Rubik_medium});
    font-weight: 500;
    font-style: normal;
  }

  * {
    font-family: 'rubik', sans-serif;
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    :focus-visible {
      outline: none;
    }
  }

  html {
    font-size: 10px;
    color: ${colors.gray_1};
    @media ${device.mobileL} {
      font-size: 8px;
    }
  }

  a {
    color: ${colors.gray_1};
  }

  .container {
    width: 82%;
    margin: auto;
    @media ${device.tablet} {
      width: 90%;
    }
  }
`;