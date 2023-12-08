import OrdersData from "../../assets/OrdersData.js";
import Orders from "./Orders.jsx";

export default function OrderAll() {
    return (
        <div style={{margin: '20px'}}>
            <h1 style={{textAlign: 'center'}}>All orders</h1>
            <Orders data={OrdersData}/>
        </div>
    )
}