import React from 'react';
import { Card, CardHeader, Table, TableHeader, TableBody, TableRow, Button} from '../components/styledComponents/StyledComponents';


export default function createOrderCard(mechanicData) {
  const { date, mechanicName, carInfo, customerInfo, servicesInfo } = mechanicData;

  return (
    
    <Card>
      <Link to=''><Button >Print</Button></Link> 
      <CardHeader>
        <h2>Service Details</h2>
        <p>Date: {date}</p>
        <p>Mechanic: {mechanicName}</p>
      </CardHeader>

      <Table>
        <TableHeader>
          <tr>
          <th>Task Description</th>
          <th>Total Price</th>
          </tr>
        </TableHeader>

        <TableBody>
          <TableRow>
            <td>{servicesInfo.taskDescription}</td>
            <td>${servicesInfo.totalPrice}</td>
          </TableRow>
        </TableBody>
      </Table>

      <Table>
        <TableHeader>
          <tr>
          <th>Reg No</th>
          <th>Make</th>
          <th>Model</th>
          <th>Year</th>
          <th>Fuel</th>
          <th>Mileage</th>
          <th>Transmission</th>
          </tr>
        </TableHeader>
        <TableBody>
          <TableRow>
            <td>{carInfo.regNo}</td>
            <td>{carInfo.make}</td>
            <td>{carInfo.model}</td>
            <td>{carInfo.year}</td>
            <td>{carInfo.fuel}</td>
            <td>{carInfo.mileage}</td>
            <td>{carInfo.transmission}</td>
          </TableRow>
        </TableBody>
      </Table>
      <Table>
        <TableHeader>
          <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          </tr>
        </TableHeader>
        <TableBody>
          <TableRow>
            <td>{customerInfo.name}</td>
            <td>{customerInfo.phone}</td>
            <td>{customerInfo.email}</td>
          </TableRow>
        </TableBody>
      </Table>
    </Card>
  );
}
