import OrdersData from "../../assets/OrdersData";

export default function Order(id) {
    const order = OrdersData.find(order => order.id === id);
    return (
        <div style={{margin: '20px'}}>
            <h1 style={{textAlign: 'center'}}>{order.date }</h1>
            <h3 style={{textAlign: 'center'}}>{order.customerInfo.name}</h3>
            <h3 style={{textAlign: 'center'}}>{order.customerEmail}</h3>
            <h3 style={{textAlign: 'center'}}>{order.carInfo.regNo}</h3>
            <h3 style={{textAlign: 'center'}}>{order.carInfo.make}</h3>
            <h3 style={{textAlign: 'center'}}>{order.carInfo.model}</h3>
            <h3 style={{textAlign: 'center'}}>{order.carInfo.year}</h3>
            <h3 style={{textAlign: 'center'}}>{order.carInfo.fuel}</h3>
            <h3 style={{textAlign: 'center'}}>{order.carInfo.mileage}</h3>
            <h3 style={{textAlign: 'center'}}>{order.carInfo.transmission}</h3>
            <h3 style={{textAlign: 'center'}}>{order.servicesInfo.taskDescription}</h3>
            <h3 style={{textAlign: 'center'}}>{order.servicesInfo.totalPrice}</h3>
            <h3 style={{textAlign: 'center'}}>{order.mechanicName}</h3> 
        </div>
    )   
}