import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import MyRoutes from "./Components/Routs";
import Box from "@mui/material/Box";
import { useState, useMemo, useEffect, createContext } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
export const ColorModeContext = createContext({ toggleColorMode: () => {} });
function App() {
  // const [mode, setMode] =useState (("light") || ("dark") : ( "light"));
  // const colorMode = useMemo(
  //   () => ({
  //     toggleColorMode: () => {
  //       setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  //     },
  //   }),
  //   []
  // );
  const [mode, setMode] = useState("light");

  useEffect(() => {
    setMode(localStorage.getItem("mode") || "light");
  }, []);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );
  return (
    <div>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <Box
            sx={{
              bgcolor: "background.default",
              color: "text.primary",
            }}
          >
            <Navbar />
            <MyRoutes />
          </Box>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </div>
  );
}

export default App;
