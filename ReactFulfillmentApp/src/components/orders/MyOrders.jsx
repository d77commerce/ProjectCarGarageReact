import OrdersData from "../../assets/OrdersData2.js";
import Orders from "./Orders2.jsx";

export default function OrderAll() {
    return (
        <div style={{margin: '20px'}}>
            <h1 style={{textAlign: 'center'}}>All orders</h1>
            <Orders data={OrdersData}/>
        </div>
    )
}