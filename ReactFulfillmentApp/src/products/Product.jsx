import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CreateProductCard from '../services/ProductCard';
import ProductCard from '../services/ProductCard';

export default function Product() {
    const { id } = useParams();
    const [data,setData] = useState(null);
    const URL = `http://localhost:3030/jsonstore/products/${id}`;
    console.log(URL);
    console.log(id);
    useEffect(() => {
        fetch(URL)
            .then((res) => res.json())
            .then((res) => setData(res))
            .catch((err) => console.log(err));
    }  ,[]);
    console.log(data);
    return (
        <ProductCard {...data} /> 
        

    )   
}
