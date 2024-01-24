import React from 'react';
import { Card, CardHeader, Table, TableHeader, TableBody, TableRow, Button} from '../components/styledComponents/StyledComponents';


export default function CreateOrderCard2(data) {
  const { Id,
    DateTime,
    OwnerId,
    ProductId,
    Quantity,
    Packaging,
    AddType,
    AddPaper,
    AddBubbleWraps,
    Status,
    Courier,
    TraysNo,
    Instruction ,
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
    
    <Card>
    <Button >Print</Button>
      <CardHeader>
        <h2>Service Details</h2>
        <p>Date: {DateTime}</p>
        <p>Status: {Status}</p>
      </CardHeader>
      <Table>
        <TableHeader>
          <tr>
          <th>Order ID</th>
          <th>Product ID</th>
          <th>Quantity</th>
          <th>Packaging</th>
          <th>Add Type</th>
          <th>Add Paper</th>
          <th>Add Bubble Wraps</th>
          <th>Trays No</th>
          <th>Instruction</th>
          <th>Customer Message</th>
          </tr>
        </TableHeader>
        <TableBody>
          <TableRow>
            <td>{Id}</td>
            <td>{ProductId}</td>
            <td>{Quantity}</td>
            <td>{Packaging.Type}</td>
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
  );
}
