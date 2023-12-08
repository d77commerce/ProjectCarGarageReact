import { useState } from 'react';
import Orders from './Orders';
import OrdersData from '../../assets/OrdersData';
import { StyledForm ,Label, Button } from '../styledComponents/StyledComponents';

export default function ByRegNo() {
    const [regNo, setRegNo] = useState('');
    const [orders, setOrders] = useState([]);
    const [error, setError] = useState('');

    const handleRegNoChange = (event) => {
        setRegNo(event.target.value);
        console.log(regNo);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
console.log(regNo);
        const filteredOrders = OrdersData.filter(order => order.carInfo.regNo === regNo);
console.log(filteredOrders);
console.log(OrdersData);
        if (filteredOrders.length === 0) {
            setError('No orders found for the given registration number.');
            setOrders([]);
        } else {
            setError('');
            setOrders(filteredOrders);
        }
    };

    return (
        <div>
            <h1>By Registration No</h1>
            <StyledForm className='form-group' onSubmit={handleSubmit}>
                <Label>
                    Registration No:
                    <input type="text" value={regNo} onChange={handleRegNoChange} />
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
    