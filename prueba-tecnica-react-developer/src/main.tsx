import { createRoot } from "react-dom/client";
import { createTheme, ThemeProvider } from "@mui/material";
import "./index.css";
import { router } from "./router";
import { RouterProvider } from "react-router-dom";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const theme = createTheme({});

const root = createRoot(document.getElementById("app")!);

root.render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
);
