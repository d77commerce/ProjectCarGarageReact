import AuthInputs from './components/login/AuthInputs.jsx';
import Header from './components/header/Header.jsx';
import {Routes, Route} from 'react-router-dom';
import NewAccount from './components/newAccount/NewAccount.jsx';
import Navigation from './components/navigation/Navigation.jsx';
import NewOrder from './components/orders/NewOrder.jsx';
import ByCustomerName from './components/orders/ByCustomerName.jsx';
import OwnerSettings from './components/ownerSettings/OwnerSetings.jsx';
import AllMechanics from './services/AllMechanics.jsx';
import MyAccount from './myAccount/MyAccount.jsx';


import OrderAll from './components/orders/OrdersAll.jsx';
import ByDate from './components/orders/ByDate.jsx';
import ByRegNo from './components/orders/ByRegNo.jsx';
import ByCustomerPhone from './components/orders/ByCustomerPhone.jsx';
import MyOrders from './components/orders/MyOrders.jsx';
import { Button, Footer } from './components/styledComponents/StyledComponents.jsx';
import Product from './products/Product.jsx';
import Products from './products/products.jsx';
import NewProduct from './products/NewProduct.jsx';
import FullOrderInfo from './components/orders/FullOrderInfo.jsx';
import OrdersByCourierStatus from './components/orders/OrdersByCourierStatus.jsx';

export default function App() {
  return (
    <>
    <Navigation />
     
       <Routes>
        <Route path='/'element={<AuthInputs/>}/>
        <Route path='/NewAccount'element={<NewAccount/>}/> 
        <Route path='/newOrder'element={<NewOrder/>}/>
        <Route  path='/orders/byDate'element={<ByDate/>}/>
        <Route path='/orders/byCustomerName'element={<ByCustomerName/>}/>
        <Route path='/orders/byCustomerPhone'element={<ByCustomerPhone/>}/>
        <Route path='/orders/byRegNo'element={<ByRegNo/>}/>
        <Route path='/mechanics'element={<AllMechanics/>}/>
        <Route path='/allOrders'element={<OrderAll/>}/>
        <Route path='/ownerSettings'element={<OwnerSettings/>}/>
        <Route path='/myOrders'element={<MyOrders/>}/>
        <Route path='/about'element={<h1 style={{ textAlign: 'center' }}>About</h1>} />
        <Route path='/myAccount'element={<MyAccount/>} />
        <Route path='/*' element={<h1 style={{ textAlign: 'center' }}>404 Not Found</h1>} />
        <Route path='/products'element={<Products/>}/>
        <Route path='/product/:id'element={<Product/>}/>
        <Route path='/newProduct'element={<NewProduct/>} />
        <Route path='/fullInfo/:id'element={<FullOrderInfo/>}/>
        <Route path='/OrdersByCourierStatus/:status' element={<OrdersByCourierStatus/> }/>
      </Routes>
      <Footer>
        <p>© 2021. All rights reserved.</p>
        <button >Terms of Service</button>
      </Footer>
    </>
  );
}
