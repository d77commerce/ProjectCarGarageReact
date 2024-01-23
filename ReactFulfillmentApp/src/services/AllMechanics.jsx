import{ useState, useEffect } from 'react';
import { StyledTable } from '../components/styledComponents/StyledComponents';

const URL = 'http://localhost:3030/jsonstore/users';

const AllMechanics = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((res) => setData(Object.values(res)));
  }, []);

  return (
    <div>
      <h1>Data from your-api-endpoint</h1>
      <StyledTable>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
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
              <td>{element.phoneNumber}</td>
              <td>
              <button>Edit</button>
              <button style={{ marginLeft: '8px' }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </div>
  );
};

export default AllMechanics;
