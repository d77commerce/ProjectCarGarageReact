import CreateOrderCard from '../../services/OrderCard2';
import { LeftSideMenuContainer,LeftMenuItem } from '../styledComponents/StyledComponents';
import Calendar from 'react-calendar';

export default function Orders({ data }) {
  // Check if data is an array
  if (!Array.isArray(data)) {
    throw new Error('Invalid data type: data must be an array of orders');
  }

  return (
    <>
    <div style={{ display: 'flex' }}>
    <LeftSideMenuContainer> 
        <Calendar />
       <br/>
        <button style={{color :"red"}}>Today</button> 
        <br/>
        <button style={{color :"red"}}>Yesterday</button>
        <br/>
        <button href="#" style={{color :"red"}}>Last Week</button>
        <br/>
        <button style={{color :"red"}}>Last Month</button>
      {/* Add more menu items as needed */}
    </LeftSideMenuContainer>
    <div>
      {data.map((order,index) => (
        <div key={index}>
          {CreateOrderCard(order)}
        </div>
        ))}
    </div>
    </div>
    </>
  );
}
