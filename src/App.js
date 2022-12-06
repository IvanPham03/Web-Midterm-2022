import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from './layouts/DefaultLayout/defaultLayout.js'
import Contact from './layouts/Contact/contact.js'
import Stories from './layouts/Stories/stories.js'
import Product from './layouts/Product/product.js'

export default function App() {
  return (
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<DefaultLayout />} />
            <Route path="/product" exact component={Product}/>
            <Route path="/storeis" component={Stories} />
            <Route path="/contact" component={Contact} />
          </Routes>
      </BrowserRouter>
  );
}

