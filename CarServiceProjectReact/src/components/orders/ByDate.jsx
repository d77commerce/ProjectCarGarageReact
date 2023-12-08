import { useState } from "react";
import Calendar from "react-calendar";
import Orders from "./Orders";
import OrdersData from "../../assets/OrdersData";

export default function ByDate() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const formattedSelectedDate = selectedDate.toLocaleDateString("en-GB"); // Format: DD/MM/YYYY
  const OrdersDataByDate = OrdersData.filter(order => order.date === formattedSelectedDate);

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <div style={{margin: '20px'}}>
      <Calendar onChange={handleDateChange} value={selectedDate} />
      <h1 style={{textAlign: 'center'}}>By Date</h1>
      <p style={{textAlign: 'center'}}>Selected Date: {formattedSelectedDate}</p>
      { OrdersDataByDate.length > 0 ? <Orders data={OrdersDataByDate} /> : <p>No orders found for this date</p> }
    </div>
  );
}
