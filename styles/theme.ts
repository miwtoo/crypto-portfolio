import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { blue, indigo } from "@mui/material/colors";

// Create a theme instance.
let theme = createTheme({
  palette: {
    primary: blue,
    secondary: indigo,
  },
});

theme = responsiveFontSizes(theme);

export default theme;
