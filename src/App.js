import React from "react";
import "./App.css";


import { ThemeProvider, createTheme } from '@material-ui/core/styles';

// import Login from "./pages/login";
// import Homepage from "./pages/Homepage";
// import Settings from './pages/Settings'
import Main from './routes/main'
// import Phq from './pages/phq_session'

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat",
  },
  listItemText: {
    fontFamily: "Montserrat",
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Main />
      </div>
    </ThemeProvider>
  );
}

export default App;
