import AuthInputs from './components/login/AuthInputs.jsx';
import Header from './components/header/Header.jsx';
import {Routes, Route} from 'react-router-dom';
import NewAccount from './components/newAccount/NewAccount.jsx';
import Navigation from './components/navigation/Navigation.jsx';
import NewOrder from './components/orders/NewOrder.jsx';
import ByCustomerName from './components/orders/ByCustomerName.jsx';
import OwnerSettings from './components/ownerSettings/OwnerSetings.jsx';
import AllMechanics from './services/AllMechanics.jsx';

import Order2 from './components/orders/Order2.jsx';

export default function App() {
  return (
    <>
    <Navigation />
      <Header />
      
       <Routes>
        <Route path='/'element={<AuthInputs/>}/>
        <Route path='/NewAccount'element={<NewAccount/>}/> 
        <Route path='/newOrder'element={<NewOrder/>}/>
        <Route  path='/orders/byDate'element={<h1 style={{ textAlign: 'center' }}>By Date</h1>}/>
        <Route path='/orders/byCustomerName'element={<ByCustomerName/>}/>
        <Route path='/orders/byRegNo'element={<h1 style={{ textAlign: 'center' }}>By Registration No</h1>}/>
        <Route path='/mechanics'element={<AllMechanics/>}/>
        <Route path='/allOrders'element={<Order2/>}/>
        <Route path='/ownerSettings'element={<OwnerSettings/>}/>
        <Route path='/*' element={<h1 style={{ textAlign: 'center' }}>404 Not Found</h1>} />
      </Routes>
      
    </>
  );
}
