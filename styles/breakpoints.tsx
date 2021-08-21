export const breakpoints = {
  mobileS: 320,
  mobileM: 375, // mobile main
  mobileL: 425,
  tablet: 768,
  laptop: 1024, // desktop main
  laptopL: 1440,
  desktop: 2560,
}

// const getMediaCSS = (
//   breakpoint: BreakPoint,
//   upDown: 'up' | 'down',
//   ...args: any
// ) => {
//   if (upDown === 'up') {
//     return css`
//       @media screen and (min-width: ${breakpoints[breakpoint]}px) {
//         ${css(...args)}
//       }
//     `
//   }

//   return css`
//     @media screen and (max-width: ${breakpoints[breakpoint] - 1}px) {
//       ${css(...args)}
//     }
//   `
// }
