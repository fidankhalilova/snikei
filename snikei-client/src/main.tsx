import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./constants/theme.ts";
import UseQueryProvider from "./Provider/UseQueryProvider.tsx";

createRoot(document.getElementById("app")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <UseQueryProvider>
        <App />
      </UseQueryProvider>
    </ThemeProvider>
  </StrictMode>
);
