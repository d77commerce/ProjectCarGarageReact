 import React from 'react';
import {LeftSideMenuContainer, LeftMenuItem} from '../styledComponents/StyledComponents';
import Calendar from 'react-calendar';


 export default function MenuLeftSide() {
    function handleStatusClick(status) {
        window.location.href = `http://localhost:5173/OrdersByCourierStatus/${status}`;
        console.log(status);
      }
    return (
        <>
        <LeftSideMenuContainer> 
        <br/>
        <input type="text" placeholder="Search by Name" />
        <br/>
        <input type="text" placeholder="Search by Phone No" />
        <br/>
       <input type="text" placeholder="Search by Order Id" />
       <br/>
        <Calendar />         
        <br/>
        <button onClick={()=>handleStatusClick("Pending")} style={{color :"red"}}>Pending</button>
        <br/>
        <button onClick={()=>handleStatusClick("Processing")} style={{color :"red"}}>Processing</button>
        <br/>
        <button onClick={()=>handleStatusClick("In Transit")} style={{color :"red"}}>In Transit</button>
        <br/>
        <button onClick={()=>handleStatusClick("Out for Delivery")} style={{color :"red"}}>Out for Delivery</button>
        <br/>
        <button onClick={()=>handleStatusClick("Delivered")} style={{color :"red"}}>Delivered</button>
        <br/>
        <button onClick={()=>handleStatusClick("Attempted Delivery")} style={{color :"red"}}>Attempted Delivery</button>
        <br/>
        <button onClick={()=>handleStatusClick("Failed Delivery")} style={{color :"red"}}>Failed Delivery</button>
        <br/>
        <button onClick={()=>handleStatusClick("Returned to Sender")} style={{color :"red"}}>Returned to Sender</button>
        <br/>
        <button onClick={()=>handleStatusClick("Cancelled")} style={{color :"red"}}>Cancelled</button>
        <br/>
        <button onClick={()=>handleStatusClick("Refunded")} style={{color :"red"}}>Refunded</button>
        <br/>
        <hr/>
        <br/>
        <button style={{color :"White"}}>Today</button> 
        <br/>
        <button style={{color :"White"}}>Yesterday</button>
        <br/>
        <button style={{color :"White"}} >This Week</button>
        <br/>
        <button style={{color :"White"}}>Last Week</button>
        <br/>
        <button style={{color :"White"}} >This Month</button>
        <br/>
        <hr/>
        <br/>
        <button >Settings</button>
        <br/>
        <button >Help</button>
        <br/>
        <button >Logout</button>
        <br/>
        <br/>

        <LeftMenuItem>Orders</LeftMenuItem> 
        <LeftMenuItem>Products</LeftMenuItem>
        <LeftMenuItem>Customers</LeftMenuItem>
        <LeftMenuItem>Reports</LeftMenuItem>
        <LeftMenuItem>Settings</LeftMenuItem>
        <LeftMenuItem>Help</LeftMenuItem>


        
      
      {/* Add more menu items as needed */}
    </LeftSideMenuContainer> 
     </>    
        
    )}