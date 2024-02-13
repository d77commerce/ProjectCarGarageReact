import React from 'react';
import { Card, CardHeader, Table, TableHeader, TableBody, TableRow, Button} from '../components/styledComponents/StyledComponents';
import './OrderCard.css';


export default function CreateOrderCard2(data) {
  const {   
    Id,
    DateTime,
    OwnerId,
    Products,
    Quantity,
    Packaging: {Type, Material},
    AddType,
    AddPaper,
    AddBubbleWraps,
    Status,
    Courier,
    TraysNo,
    Instruction,
    ReceiverFirstName,
    ReceiverLastName,
    ReceiverPhone,
    ReceiverCountry,
    ReceiverCity,
    ReceiverStreet,
    ReceiverAddressLine1,
    ReceiverAddressLine2,
    ReceiverPostcode,
    CustomerMessage
  } = data;
  return (
    <>
    
    <Card>
      <div className='actions'>
    <Button >Print</Button>
    <Button onClick={()=>window.location.href = `http://localhost:5173/fullinfo/${Id}`}>Full Details</Button>
    <Button onClick={()=>window.location.href = `http://localhost:5173/order/edit/${Id}`}>Edit</Button>
    <Button >Delete</Button>
    </div>
      <CardHeader>
        <h2>Receiver Details</h2>
        <p>Name: {ReceiverFirstName} {ReceiverLastName}</p>
        <p>Phone: {ReceiverPhone}</p>
        <p>Address: {ReceiverCountry}, {ReceiverCity}, {ReceiverStreet}, {ReceiverAddressLine1}, {ReceiverAddressLine2}, {ReceiverPostcode}</p>
      
        <h2>Service Details</h2>
        <p>Date: {DateTime}</p>
        <p>Status: {Status}</p>
      </CardHeader>
      <Table>
        <TableHeader>
          <tr>
          <th>Order ID</th>
          <th>Products Id's</th>
          <th>Quantity</th>
          <th>Packaging</th>
          <th>Add Type</th>
          <th>Add Paper</th>
          <th>Bubble Wraps</th>
          <th>Trays No</th>
          <th>Instruction</th>
          <th>Customer Message</th>
          </tr>
        </TableHeader>
        <TableBody>
          <TableRow>
            <td>{Id}</td>
            {Products.map((x,index) => (
            <td key={index}>{x}</td>
            ))}

            <td>{Quantity}</td>
            <td>{Type} - {Material}</td>
            <td>{AddType}</td>
            <td>{AddPaper}</td>
            <td>{AddBubbleWraps}</td>
            <td>{TraysNo}</td>
            <td>{Instruction}</td>
            <td>{CustomerMessage}</td>
          </TableRow>
        </TableBody>
        </Table>

    </Card>
    </>
  );
}
