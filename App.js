import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import Header from './components/Header/Header';
import { CssBaseline } from '@material-ui/core';
import Footer from './components/Footer/Footer';
import Home from './components/pages/Home/Home';
import Payment from './components/pages/Payment/Payment';
import './index.css';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      light: '#3A3A3A',
      main: '#252525'
    },
    secondary: {
      main: '#D50000'
    },
    background: {
      default: '#252525',
    },
    text: {
      primary: '#FEFEFE',
      secondary: '#252525'
    },
  }
})

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/payment" component={Payment} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
