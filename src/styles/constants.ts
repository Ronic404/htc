const colors = {
  red: '#E5261E',
  gray_1: '#333333',
  gray_3: '#828282',
  gray_4: '#BDBDBD',
  gray_6: '#F2F2F2',
  hover: '#CC221B',
  htc: '#1F4766',
}

export const device = {
  mobileS: '(max-width: 320px)',
  mobileM:'(max-width: 375px)',
  mobileL: '(max-width: 425px)',
  tablet: '(max-width: 768px)',
  laptop: '(max-width: 1024px)',
  laptopL: '(max-width: 1440px)',
  desktop: '(max-width: 2560px)',
};

export const swipeParams = {
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1024: {
      slidesPerView: 4,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    321: {
      slidesPerView: 2,
      spaceBetween: 20
    }
  }
}

export default colors;