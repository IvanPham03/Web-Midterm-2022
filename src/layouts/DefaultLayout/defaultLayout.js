import React, { Component } from 'react'
import Header from '../components/Header/header'
import Footer from '../components/Footer/footer'
import {Route, Routes} from 'react-router-dom';
import Inspiration from '../Inspiration/inspiration';
import Stories from '../Stories/stories';
import Product from '../Product/product';
import Contact from '../Contact/contact';

export default class defaultLayout extends Component {
  render() {
    return (
      <div>
            <Header />
            <Routes>
              <Route index element={<Inspiration />} />
              <Route path='/inspiration' element={<Inspiration />} />
              <Route path='/product' element={<Product />} />
              <Route path='/stories' element={<Stories />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
            <Footer />
      </div>
    )
  }
}