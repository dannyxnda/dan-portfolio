export const breakpoints = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560,
}

export const pc = `@media screen and (min-width: ${breakpoints.tablet}px)`

export const sp = `@media screen and (max-width: ${breakpoints.tablet - 1}px)`
