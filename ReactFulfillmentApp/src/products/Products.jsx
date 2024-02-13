import { Table,TableBody,TableHeader, TableRow,Button } from "../components/styledComponents/StyledComponents";
import { useState, useEffect } from 'react';
const URL = 'http://localhost:3030/jsonstore/products';

export default function Products() {
  const [data,setData] = useState(null); 
 
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((res) => setData(Object.values(res)));
  }
  ,[]);
  function handleDetailsClick(id) {
    console.log(id);
    window.location.href = `http://localhost:5173/product/${id}`;
    
  }
  return (
    <div style={{ margin: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Products</h1>
      <Table>
        <TableHeader>
            <tr>
                <th> Name</th>
                <th> Price</th>
                <th> Quantity</th>
                <th>Id</th>
                <th>Actions</th>
            </tr>
        </TableHeader>
        <TableBody>
          {data && data.map((element,index) => (
            
              <TableRow key={index}>
                <td>{element.Name}</td>
                <td>{element.Price}</td>
                <td>{element.Quantity}</td>
                <td>{element.ProductBarcode}</td>
                <td >
                    <Button  onClick={()=>handleDetailsClick(element.Id)}>Details</Button>
                </td>
                </TableRow>
           
          ))}
        </TableBody>
        </Table>
    </div>
  );
}
