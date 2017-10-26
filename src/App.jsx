import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui';

import './App.css';
import Router from './router';
import Layout from './Layout/Layout';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Layout>
          <Router />
        </Layout>
      </MuiThemeProvider>
    );
  }
}

export default App;
