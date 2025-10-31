import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#c0f377",
    },
    secondary: {
      main: "#ffffff",
    },
    success: {
      main: "#000000",
    },
    error: {
      main: "#d32f2f",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 20,
          "&:hover": {
            backgroundColor: "#c0f377",
          },
        },
      },
    },
  },
});
