import  { useState, useRef } from 'react';
import { Input, Button } from "../components/styledComponents/StyledComponents";
import "./NewProduct.css";


export default function NewProduct() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [productBarcode, setProductBarcode] = useState("");
    const [kg, setKg] = useState("");
    const [lengthCm, setLengthCm] = useState("");
    const [heightCm, setHeightCm] = useState("");
    const [widthCm, setWidthCm] = useState("");
    const [description, setDescription] = useState("");
    const [shortDescription, setShortDescription] = useState("");
    const [producerId, setProducerId] = useState("");
    const [clientId, setClientId] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const inputRefName = useRef();
    const inputRefPrice = useRef();
    const inputRefQuantity = useRef();
    const inputRefProductBarcode = useRef();
    const inputRefKg = useRef();
    const inputRefLengthCm = useRef();
    const inputRefHeightCm = useRef();
    const inputRefWidthCm = useRef();
    const inputRefDescription = useRef();
    const inputRefShortDescription = useRef();
    const inputRefProducerId = useRef();
    const inputRefClientId = useRef();
    function setProductInfo() {
        setName(inputRefName.current.value.toUpperCase());
        setPrice(inputRefPrice.current.value.toUpperCase());
        setQuantity(inputRefQuantity.current.value.toUpperCase());
        setProductBarcode(inputRefProductBarcode.current.value.toUpperCase());
        setKg(inputRefKg.current.value.toUpperCase());
        setLengthCm(inputRefLengthCm.current.value.toUpperCase());
        setHeightCm(inputRefHeightCm.current.value.toUpperCase());
        setWidthCm(inputRefWidthCm.current.value.toUpperCase());
        setDescription(inputRefDescription.current.value.toUpperCase());
        setShortDescription(inputRefShortDescription.current.value.toUpperCase());
        setProducerId(inputRefProducerId.current.value.toUpperCase());
        setClientId(inputRefClientId.current.value.toUpperCase());
        inputRefName.current.value = "";
        inputRefPrice.current.value = "";
        inputRefQuantity.current.value = "";
        inputRefProductBarcode.current.value = "";
        inputRefKg.current.value = "";
        inputRefLengthCm.current.value = "";
        inputRefHeightCm.current.value = "";
        inputRefWidthCm.current.value = "";
        inputRefDescription.current.value = "";
        inputRefShortDescription.current.value = "";    
        inputRefProducerId.current.value = "";
        inputRefClientId.current.value = "";
    }
    function setCustomer() {
        setSubmitted(true);
    }   
    return (
        <>
            <h1 style={{ textAlign: 'center' }}>New Product</h1>
              <div className="Right-side">
                <div id ="auth-inputs">
                    <h2>Storage and delivery</h2>
                    <Input type="text" placeholder="Enter order number" />
                    <Input type="text" placeholder="Enter order date"  />
                    <Input type="text" placeholder="Enter order status" />
                    <Input type="text" placeholder="Enter order payment" />
                    <Input type="text" placeholder="Enter order delivery" />
                    <Input type="text" placeholder="Enter order total" />
                    <Input type="text" placeholder="Enter order discount" />
                  
                    </div>
                    <hr/>
                    <div id ="auth-inputs">
                    <Button onClick={setProductInfo}>Add Product</Button>
                    </div>
            </div>
            <div className="left-side">
                <div id ="auth-inputs">
                    <h2>Product Info</h2>
                    <Input type="text" placeholder="Enter product name" ref={inputRefName} />
                    <Input type="text" placeholder="Enter product price" ref={inputRefPrice} />
                    <Input type="text" placeholder="Enter order number" />
                    <Input type="text" placeholder="Enter order date"  />
                    <Input type="text" placeholder="Enter order status" />
                    <Input type="text" placeholder="Enter order payment" />
                    <Input type="text" placeholder="Enter order delivery" />
                    <Input type="text" placeholder="Enter order total" />
                    <Input type="text" placeholder="Enter order discount" />
                    <Input type="text" placeholder="Enter order tax" />
                    </div>
            </div>
            <div className='center'>
             <div  id="auth-inputs">
                <h2>Product Qth and price</h2>
                <Input type="text" placeholder="Enter product price" ref={inputRefPrice} />
                <Input type="text" placeholder="Enter product quantity" ref={inputRefQuantity} />
                <Input type="text" placeholder="Enter product barcode" ref={inputRefProductBarcode} />
                <Input type="text" placeholder="Enter product kg" ref={inputRefKg} />
                <Input type="text" placeholder="Enter product lengthCm" ref={inputRefLengthCm} />
                <Input type="text" placeholder="Enter product heightCm" ref={inputRefHeightCm} />
                <Input type="text" placeholder="Enter product widthCm" ref={inputRefWidthCm} />
                <Input type="text" placeholder="Enter product description" ref={inputRefDescription} />
                <Input type="text" placeholder="Enter product shortDescription" ref={inputRefShortDescription} />
                <Input type="text" placeholder="Enter product producerId" ref={inputRefProducerId} />
            </div>
            </div>
           <hr/>
            
        </>
    );
    }
// Compare this snippet from ReactFulfillmentApp/src/components/styledComponents/StyledComponents.jsx:
// import styled from 'styled-components';
//
// export const Table = styled.table`
//   border-collapse: collapse;
//   width: 100%;
//   margin-top: 20px;
//  
//   th, td {
//     padding: 8px;
//     text-align: left;
//     border-bottom: 1px solid #ddd;
//   }
//
//   tr:hover {
//     background-color: #f5f5f5;
//   }
//
//   th {
//     background-color: #f0920e;
//     color: white;
//   }
// `;
// export const Card = styled.div`
//   border: 3px solid gray;
//   padding: 10px;
//   margin-bottom: 20px;
// `;
//
// export const CardHeader = styled.div`
    
//   font-size: 18px;
//   margin-bottom: 10px;
// `;
//
// export const Table = styled.table`
//   border-collapse: collapse;
//   width: 100%;
//   margin-top: 20px;
// `;
//
// export const TableHeader = styled.thead`
//   th {
//     text-align: center;
//     padding-right: 10px;
//   }
// `;
//
// export const TableBody = styled.tbody`
//   td {
//     padding-bottom: 5px;
//   }
// `;
//
// export const TableRow = styled.tr`
//   background-color: #eee;
//   padding: 10px 15px;
//   border-bottom: 1px solid #ccc;
//   text-align: center;
// `;
//
// export const Button = styled.button`
//   background-color: #f0920e;
//   border: none;
//   border-radius: 5px;
//   color: white;
//   padding: 10px 20px;
//   text-align: center;
//   text-decoration: none;
//   display: inline-block;
//   font-size: 16px;
//   margin: 4px 2px;
//   cursor: pointer;
// `;
//
// export const Input = styled.input`
//   width: 100%;
//   padding: 12px 20px;
//   margin: 8px 0;
//   box-sizing: border-box;
// `;
//
// export const Select = styled.select`
//   width: 100%;
//   padding: 12px 20px;
//   margin: 8px 0;
//   box-sizing: border-box;
// `;
//
// export const Textarea = styled.textarea`
//   width: 100%;
//   padding: 12px 20px;
//   margin: 8px 0;
//   box-sizing: border-box;
// `;
//


