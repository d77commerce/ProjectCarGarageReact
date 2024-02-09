import React from 'react';
import { Card, CardHeader, Table, TableHeader, TableBody, TableRow, Button } from '../components/styledComponents/StyledComponents';

export default function ProductCard(data) {
  function handlePrintClick(id) {
    console.log(id);
    printCustomText();
  }

  function printCustomText() {
    const customText = generateCustomText(); // Generate custom text here
    const popupWin = window.open('', '_blank', 'width=800,height=800');
    popupWin.document.open();
    popupWin.document.write(`<html><body onload="window.print();">${customText}</body></html>`);
    popupWin.document.close();
  }

  function generateCustomText() {
    const { Name, Quantity, Kg, LengthCm, HeightCm, WidthCm, Price, Description, ShortDescription, ProductBarcode, ProducerId, ClientId } = data;
    // Generate custom text here using the data
    const customText = `
    <div style="
    background-color: #f5f5f5; /* Lighter background for label-like appearance */
    color: #000;
    padding: 20px;
    width: 300px;
    border: 1px solid #ccc; /* Lighter border */
    border-radius: 5px;
    font-family: Arial, sans-serif; /* Common courier-style font */
    text-align: center;
  ">
    <div style="font-size: 18px; font-weight: bold; margin-bottom: 10px;">
      Delivery Details
    </div>
    <img src="barcode.png" alt="Product Barcode" style="width: 150px; margin-bottom: 10px;" /> /* Insert barcode image */
    <div style="margin-left: 10px; line-height: 1.5;">
      <p style="font-weight: bold;">Product Name:</p>
      <p>${Name}</p>
      <p style="font-weight: bold;">Quantity:</p>
      <p>${Quantity}</p>
      <p style="font-weight: bold;">Weight (kg):</p>
      <p>${Kg}</p>
      <p style="font-weight: bold;">Dimensions (LxWxH):</p>
      <p>${LengthCm}x${WidthCm}x${HeightCm} cm</p>
    </div>
  </div>
    `;
    return customText;
  }
  

  const { Id } = data;
  return (
    <Card>
      <Button onClick={() => handlePrintClick(Id)}>Print</Button>
      <CardHeader>
        <h2>Product Name - {data.Name}</h2>
        <p>Kilogram with packing - {data.Kg}</p>
        <p>Quantity - {data.Quantity}</p>
        <p>Price - {data.Price}</p>
      </CardHeader>
      {/* Table components go here */}
    </Card>
  );
}
