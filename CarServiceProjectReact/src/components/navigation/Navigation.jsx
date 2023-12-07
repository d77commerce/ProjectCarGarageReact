import { Button} from '../styledComponents/StyledComponents';
import Dropdown from '../dropDown/DropDown';

import { Link } from 'react-router-dom';
import './Navigation.css';

export default function Navigation() {
  return (
    <div className='actions'>
      <Link to='/newOrder'><Button>New Order</Button></Link>
      <Dropdown>   
        <div className="dropdown-content">
          <Link to='/allOrders'>All</Link>
          <Link to='/orders/byDate'>By Date</Link>
          <Link to='/orders/byCustomerName'>By Customer Name</Link>
          <Link to='/orders/byRegNo'>By Registration No</Link>
        </div>
      </Dropdown>
      <Link to='/mechanics'><Button>Mechanics</Button></Link>
      <Link to='/ownerSettings'><Button>Control Panel</Button></Link>  
      <Link to='/'><Button>Exit</Button></Link>
    </div>
  );
}
