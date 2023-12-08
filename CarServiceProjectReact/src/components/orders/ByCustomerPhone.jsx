import { useState } from 'react';
import Orders from './Orders';
import OrdersData from '../../assets/OrdersData';
import { StyledForm ,Label, Button } from '../styledComponents/StyledComponents';

export default function ByCustomerPhone() {
    const [phone, setPhone] = useState('');
    const [orders, setOrders] = useState([]);
    const [error, setError] = useState('');

    const handleRegNoChange = (event) => {
        setPhone(event.target.value);
        console.log(phone);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
console.log(phone);
        const filteredOrders = OrdersData.filter(order => order.customerInfo.phone === phone);
console.log(filteredOrders);
console.log(OrdersData);
        if (filteredOrders.length === 0) {
            setError('No orders found for the given phone number.');
            setOrders([]);
        } else {
            setError('');
            setOrders(filteredOrders);
        }
    };

    return (
        <div>
            <h1>By Customer Phone No</h1>
            <StyledForm  onSubmit={handleSubmit}>
                <Label>
                    Customer phone No:
                    <input type="text" value={phone} onChange={handleRegNoChange} />
                </Label>
                <Button>Submit</Button>
                
            </StyledForm>
            {error && <p>{error}</p>}
            <Orders data={orders} />
        </div>
    );
}
  // const handleRegNoChange = (event) => {
    //     setRegNo(event.target.value);
    // }
    
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     setError('');
    //     setOrders([]);
    //     fetch(`http://localhost:8080/orders/byRegNo/${regNo}`)
    //     .then(response => response.json())
    //     .then(data => {
    //         if (data.error) {
    //         setError(data.error);
    //         } else {
    //         setOrders(data);
    //         }
    //     })
    //     .catch(error => setError(error.message));
    // }
    