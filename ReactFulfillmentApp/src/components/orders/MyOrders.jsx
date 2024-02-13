import OrdersData from "../../assets/OrdersData2.js";
import Orders from "./Orders2.jsx";
import { useState, useEffect } from 'react';
const URL = 'http://localhost:3030/jsonstore/orders';

export default function myOrders() {
    const [data,setData] = useState(null);
    console.log(URL);
    useEffect(() => {
        fetch(URL)
          .then((res) => res.json())
          .then((res) => setData(Object.values(res)));
      }
      ,[]);
    console.log(data);
    return (
        <div style={{margin: '20px'}}>
            <h1 style={{textAlign: 'center'}}>All orders</h1>
            <Orders data={data}/>
        </div>
    );
}