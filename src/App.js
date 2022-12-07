import React, { Component } from 'react';
import DefaultLayout from './layouts/DefaultLayout/defaultLayout';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <DefaultLayout />
      </BrowserRouter>
    );
  }
}
export default App;