import Calendar from 'react-calendar';
import {LeftSideMenuContainer,LeftMenuItem, StyledTable} from '../components/styledComponents/StyledComponents.jsx';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const URL = 'http://localhost:3030/jsonstore/users';

export default function LeftSideMenu() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((res) => setData(Object.values(res)));
  }, []);

  return(
    <>
    <div style={{ display: 'flex' }}>
    <LeftSideMenuContainer> 
        <Calendar />
        <br/>
        <Link to="/"><button style={{color :"red"}}>Today</button></Link>
        <br/>
        <button style={{color :"red"}}>Yesterday</button>
        <br/>
        <button style={{color :"red"}}>Last Week</button>
        <br/>
        <button style={{color :"red"}}>Last Month</button>
   
    </LeftSideMenuContainer>
    {/* Add the rest of your content here */}
    <StyledTable>
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Date of the Order</th>
          <th>Status</th>
          <th>Courier</th>
          <th>Actions</th>
      
        </tr>
      </thead>
      <tbody>
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
      </tbody>
    </StyledTable>
  </div>
    </>
  )
    
}