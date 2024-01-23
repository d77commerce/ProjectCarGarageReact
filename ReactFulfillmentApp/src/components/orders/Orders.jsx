import createOrderCard from '../../services/OrderCard';

export default function Orders({ data }) {
  // Check if data is an array
  if (!Array.isArray(data)) {
    throw new Error('Invalid data type: data must be an array of orders');
  }

  return (
    <div>
      {data.map((order,index) => (
        <div key={index}>
          {createOrderCard(order)}
        </div>
      ))}
    </div>
  );
}
