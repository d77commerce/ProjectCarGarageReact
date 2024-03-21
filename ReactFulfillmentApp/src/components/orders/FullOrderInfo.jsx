import { useParams } from 'react-router-dom';
import { LeftSideMenuContainer,LeftMenuItem,Table,TableBody,TableHeader,TableRow } from '../styledComponents/StyledComponents';
import Calendar from 'react-calendar';
import { useState, useEffect } from 'react';
import { Button } from '../styledComponents/StyledComponents';
import MenuLeftSide from '../menu/MenuLeftSide';


export default function FullOrderInfo(){

    const {id} = useParams();
    const URL = `http://localhost:3030/jsonstore/orders/${id}`;
    const [data,setData] = useState(null);
    const [error, setError] = useState(null)
    console.log(URL);
    console.log(id);
        console.log(data);

        useEffect(() => {
          const fetchData = async () => {
            try {
              const response = await fetch(URL);
              if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.status}`);
              }
              const orderData = await response.json();
              setData(orderData);
            } catch (error) {
              setError(error);
              console.error('Error fetching order data:', error);
            }
          };
      
          fetchData();
        }, [id]);
    
    function handleEditClick(id) {
        console.log(id);
        window.location.href = `http://localhost:5173/order/edit/${id}`;
        
      }

    return (
        <>
    <div style={{ display: 'flex' }}>
<MenuLeftSide/>
     {data?(
    <div>
     <Table>
        <TableHeader>   
         <TableRow>
                <th> DateTime</th>
                <th> Total SUM</th>
                <th> Products Id's</th>
                <th>Quantity</th>
                <th>Packaging</th>
                <th>AddType</th>
                <th>AddPaper</th>
                <th>AddBubbleWraps</th>
          </TableRow>
               
        </TableHeader>
           <TableBody>
            <TableRow>
                <td>{data.DateTime}</td>
                <td>{ data.OwnerId}</td>
                <td>{data.Products && data.Products.Id}</td>
                <td>{ data.Quantity}</td>
                <td>Type: {data.Packaging.Type}-{data.Packaging.Material}</td>
                <td>{ data.AddType ? 'Yes':'No'}</td>
                <td>{ data.AddPaper ? 'Yes':'No'}</td>
                <td>{ data.AddBubbleWraps ? 'Yes':'No'}</td>
                </TableRow>
        </TableBody>
      </Table>
      <Table>
        <TableHeader>
         <TableRow>
                <th style={{color :"red"}}>Status</th>
                <th>Courier</th>
                <th>TraysNo</th>
                <th>Instruction</th>
          </TableRow> 
         </TableHeader>
         <TableBody>
            <TableRow>
                <td>{ data.Status}</td>
                <td>{ data.Courier}</td>
                <td>{ data.TraysNo}</td>
                <td>{ data.Instruction}</td>
            </TableRow>
         </TableBody>
      </Table>
      <Table>
       <TableHeader>
         <TableRow>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Phone</th>
                <th>Country</th>
                <th>City</th>
                <th>Street</th>
                <th>AddressLine1</th>
                <th>AddressLine2</th>
                <th>Postcode</th>
          </TableRow>
        </TableHeader>
          <TableBody>
           <TableRow>
                <td>{ data.ReceiverFirstName}</td>
                <td>{ data.ReceiverLastName}</td>
                <td>{ data.ReceiverPhone}</td>
                <td>{ data.ReceiverCountry}</td>
                <td>{ data.ReceiverCity}</td>
                <td>{ data.ReceiverStreet}</td>
                <td>{ data.ReceiverAddressLine1}</td>
                <td>{ data.ReceiverAddressLine2}</td>
                <td>{ data.ReceiverPostcode}</td>
              </TableRow>
         </TableBody>
       </Table>
       <Table>
        <TableHeader>
         <TableRow>
                    <th>CustomerMessage</th>
         </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <td>{ data.CustomerMessage}</td>
          </TableRow>
        </TableBody>
         </Table>
         <br/>
         <Button style={{"marginLeft": "20px"}} onClick={()=>handleEditClick(data.Id)}>Edit</Button>
          
          <Button style={{"marginLeft": "20px"}}>Print</Button>
        </div>
    ):( error
      ? <div>Error: {error.message}</div>
      : <div>Loading...</div> )}
    </div>
    </>
  );
}