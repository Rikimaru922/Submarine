import { green, grey } from "@mui/material/colors"
import { createTheme } from "@mui/material/styles"

/**
 * material-ui theme color pallete
 * @see https://material-ui.com/style/color/
 */
export const MuiTheme = createTheme({
  palette: {
    primary: {
      light: grey[700],
      main: grey[800],
      dark: grey[900],
    },
    secondary: {
      light: green[300],
      main: green[500],
      dark: green[700],
    },
  },
})
