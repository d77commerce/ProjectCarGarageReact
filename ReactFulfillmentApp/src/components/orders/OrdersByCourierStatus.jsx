
import Orders from "./Orders2.jsx";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const URL = 'http://localhost:3030/jsonstore/orders';

export default function OrdersByCourierStatus() {
    const {status} = useParams();
   
    const [data,setData] = useState(null);
    console.log(status);
    console.log(URL);
    useEffect(() => {
        fetch(URL)
            .then((res) => res.json())
            .then((res) => setData(Object.values(res)));
           
    }, []);
    
    
    return (
        <div style={{margin: '20px'}}>
            <h1 style={{textAlign: 'center'}}>{status}</h1>
           {
                data && <Orders data={data.filter(x=>x.Status === status)}/>
           }
        </div>
    );
}