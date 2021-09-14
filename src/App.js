import React from "react";
import "./App.css";

// import Drawer from './components/drawer';
// import Step1 from './components/signup_step1';
// import Login from './pages/login';
import Signup from './pages/signup';

import { ThemeProvider, createTheme } from '@material-ui/core/styles';

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
        <Signup />
      </div>
    </ThemeProvider>
  );
}

export default App;
