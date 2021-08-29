export const theme = {
  colors: {
    defaultColor: '#000000',
    helloBackground: '#7fa9dd',
    helloText: '',
    white: '#FFF',
    experienceBackground: '#a2a4dc',
    contactBackground: '#e8ff6bd5',
    aboutBackground: '#d4abab',
    techBackground: '#d4abab',
  },
}

export const darkTheme = {
  colors: {},
}

export type ThemeType = typeof theme
export type ThemeProps = {
  theme: ThemeType
}
