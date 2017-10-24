import React, { Component } from 'react';

import './App.css';
import Router from './router';
import Layout from './components/layout/Layout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Router />
        </Layout>
      </div>
    );
  }
}

export default App;
