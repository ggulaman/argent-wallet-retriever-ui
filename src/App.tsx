import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Home from "./pages/Home";
import { orange, blue } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: orange[500],
      contrastText: "#fff",
    },
    secondary: {
      main: blue[500],
      contrastText: "#fff",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Home></Home>
      </Box>
    </ThemeProvider>
  );
};

export default App;
