import React, { Component } from 'react';
import DefaultLayout from './layouts/DefaultLayout/defaultLayout';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './layouts/DefaultLayout/scrollToTop';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ScrollToTop />
        <DefaultLayout />
      </BrowserRouter>
    );
  }
}
export default App;