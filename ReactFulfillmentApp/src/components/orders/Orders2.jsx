import CreateOrderCard from '../../services/OrderCard2';
import MenuLeftSide from '../menu/MenuLeftSide';



export default function Orders({ data }) {
 
  return (
    <>
    <div style={{ display: 'flex' }}>
   <MenuLeftSide />
    <div>
      {data && data.map((order,index) => (
        <div key={index}>
          {CreateOrderCard(order)}
        </div>
        ))}
    </div>
    </div>
    </>
  );
}
