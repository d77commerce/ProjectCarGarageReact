
import { useState, useEffect } from 'react';
import { StyledTable, TableBody, TableHeader } from '../components/styledComponents/StyledComponents';
import MenuLeftSide from '../components/menu/MenuLeftSide';


const URL = 'http://localhost:3030/jsonstore/users';

export default function Menu() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((res) => setData(Object.values(res)));
  }, []);

  return(
    <>
    <MenuLeftSide />
    <div style={{ display: 'flex' }}>
   
    {/* Add the rest of your content here */}
    <StyledTable>
      <TableHeader>
        <tr>
          <th>Order ID</th>
          <th>Date of the Order</th>
          <th>Status</th>
          <th>Courier</th>
          <th>Actions</th>
      
        </tr>
      </TableHeader>
      <TableBody>
        {data && data.map((element,index) => (
          <tr key={index}>
            <td>{element._id}</td>
            <td>{element.firstName}</td>
            <td>{element.lastName}</td>
            <td>{element.email}</td>
            <td>
            <button>Show Full Info</button>
           </td>
          </tr>
        ))}
      </TableBody>
    </StyledTable>
  </div>
    </>
  )
    
}