import { Mode } from '@src/interfaces'
import { experimental_sx as sx } from '@mui/material/styles'
import { createTheme } from '@mui/material/styles'

const { palette } = createTheme()
const { augmentColor } = palette

const createColor = (mainColor: string) =>
  augmentColor({ color: { main: mainColor } })

const getDesignTokens = ({
  mode,
  borderRadius,
  fontFamily = 'Nunito',
  fontSize = 16,
}: {
  mode: Mode
  borderRadius: number
  fontFamily: string
  fontSize: number
}) => ({
  typography: {
    fontFamily: `"${fontFamily}", sans-serif`,
    fontSize: fontSize,
  },
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: {
            light: '#0092fd',
            main: '#007bd6',
            dark: '#0070C2',
            contrastText: '#fff',
          },
          secondary: {
            light: '#f5f5f5',
            main: '#e0e0e0',
            dark: '#FFFFFF',
            contrastText: '#000',
          },
          background: {
            paper: '#fff',
          },
          light: createColor('#ebecf0'),
        }
      : {
          primary: {
            light: '#0092fd',
            main: '#007bd6',
            dark: '#0070C2',
            contrastText: '#fff',
          },
          secondary: {
            light: '#20232c',
            main: '#181a21',
            dark: '#101116',
            contrastText: '#fff',
          },
          background: {
            paper: '#181a21',
          },
          light: createColor('#303443'),
        }),
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: sx({
          color: mode === 'light' ? '#101116' : 'white',
        }),
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: sx({
          color: mode === 'light' ? '#20232c' : 'white',
        }),
      },
    },
    MuiPaper: {
      elevation: 0,
      styleOverrides: {
        root: sx({
          borderRadius: borderRadius,
        }),
      },
    },
    MuiButton: {
      styleOverrides: {
        root: sx({
          boxShadow: 'none',
          textTransform: 'none',
          borderRadius: borderRadius,
          color: mode === 'light' ? 'black' : 'white',
          '&.MuiButton-containedPrimary': {
            color: 'white',
            '& .MuiSvgIcon-root': {
              color: 'white',
            },
          },
          '&.MuiButton-containedLight': {
            background: mode === 'light' ? 'rgb(254, 250, 255)' : '#181a21',
          },
        }),
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: sx({
          borderRadius: borderRadius,
        }),
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: sx({
          borderRadius: borderRadius,
        }),
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: sx({
          borderRadius: borderRadius,
        }),
      },
    },
  },
})

export default getDesignTokens
