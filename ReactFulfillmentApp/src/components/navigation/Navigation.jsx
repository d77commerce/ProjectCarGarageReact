import { Button} from '../styledComponents/StyledComponents';
import Dropdown from '../dropDown/DropDown';

import { Link } from 'react-router-dom';
import './Navigation.css';

export default function Navigation() {
  return (
    <>
    <div className='actions'>
      <Link to='/newOrder'><Button>New Order</Button></Link>
      <Dropdown>   
        <div className="dropdown-content">
          <Link to='/allOrders'>All</Link>
          <Link to='/orders/byDate'>By Date</Link>
          <Link to='/orders/byCustomerName'>By Customer Name</Link>
          <Link to='/orders/byRegNo'>By Registration No</Link>
          <Link to='/orders/byCustomerPhone'>By Customer Phone No</Link>
        </div>
      </Dropdown>  
      <Link to='/'><Button>Exit</Button></Link>
      <Link to='/login'><Button>Logout</Button></Link>
      <Link to='/newProduct'><Button>New Product</Button></Link>
      <Link to='/products'><Button>My Products</Button></Link>
      <Link to='/myAccount'><Button>My Account</Button></Link>
      <Link to='/myOrders'><Button>My Orders</Button></Link>
      
    </div>
     <hr/>
    </>
    
   
  );
}
