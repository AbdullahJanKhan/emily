import React from "react";
import "./App.css";

// import Drawer from './components/drawer';
// import Step1 from './components/signup_step1';
// import UserProfile from './components/UserProfile';
// import Login from './pages/login';
// import Signup from './pages/signup';
//import Settings from './pages/settings';
// import Report from './pages/reports';
// import Profile from './pages/profile';
import Startsession from './components/start_session';

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
        <Startsession />
      </div>
    </ThemeProvider>
  );
}

export default App;
