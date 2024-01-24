import React from 'react';
import { Card, CardHeader, Table, TableHeader, TableBody, TableRow, Button} from '../components/styledComponents/StyledComponents';



export default function ProductCard(data) {
  const {Id,Name, Quantity, Kg,LengthCm,HeightCm,WidthCm,Price,Description,ShortDescription,ProductBarcode,ProducerId,ClientId} = data;
  return (
    
    <Card>
    <Button >Print</Button>
      <CardHeader>
        <h2>Product Name - {Name}</h2>
        <p>Kilogram whit pacing - {Kg}</p>
        <p>Quantity - {Quantity}</p>
        <p>Price - {Price}</p>
      </CardHeader>
      <Table>
        <TableHeader>
          <tr>
          <th>Id</th>
          <th>Quantity</th>
          </tr>
        </TableHeader>
        <TableBody>
          <TableRow>
            <td>{Id}</td>
            <td>{Quantity}</td>           
          </TableRow>
        </TableBody>
      </Table>
      <Table>
        <TableHeader>
          <tr>
          <th>ProductBarcode</th>
          <th>ProducerId</th>
          <th>ClientId</th>
          <th>Length in Cm</th>
          <th>Height in Cm</th>
          <th>Width in Cm</th>

          </tr>
        </TableHeader>
        <TableBody>
          <TableRow>
            <td>{ProductBarcode}</td>
            <td>{ProducerId}</td> 
            <td>{ClientId}</td>   
            <td>{LengthCm}</td>
            <td>{HeightCm}</td>
            <td>{WidthCm}</td>
          </TableRow>
        </TableBody>
      </Table>
      <h3>Description : {Description}</h3>
      <h3>Short Description : {ShortDescription}</h3>
    </Card>
  );
}
