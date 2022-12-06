import { BrowserRouter, Link, Route, Routes} from "react-router-dom";
import logo from '../../../assets/images/logo.svg'
import Inspiration from '../../Inspiration/inspiration';
import Stories from '../../Stories/stories';
import Product from '../../Product/product';
import Contact from '../../Contact/contact';
function header() {
    return (
        <>
            <div>
                <img src={logo} alt='logo'></img>
                <Product />
            </div>
            <div>
                <BrowserRouter>
                    <nav className='main-nav'>
                        <ul>
                            <li>
                                <Link to='/inspiration'>Inspiration</Link>
                            </li>
                            <li>
                                <Link to='/stories'>Stories</Link>
                            </li>
                            <li>
                                <Link to='/product'>Product</Link>
                            </li>
                            <li>
                                <Link to='/contact'>Contact</Link>
                            </li>
                        </ul>
                    </nav>
                    <Routes>
                        <Route path='/' element={<Inspiration />}/>
                        <Route path='/product' element={<Product />}/>
                        <Route path='/stories' element={<Stories />}/>
                        <Route path='/contact' element={<Contact />}/>
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
}
export default header;