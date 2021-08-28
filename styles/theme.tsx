export const theme = {
  colors: {
    defaultColor: '#000000',
    helloBackground: '#7fa9dd',
    helloText: '',
    white: '#FFF',
    experienceBackground: '#cf9393',
    contactBackground: '#57bb30d5',
  },
}

export const darkTheme = {
  colors: {},
}

export type ThemeType = typeof theme
export type ThemeProps = {
  theme: ThemeType
}
