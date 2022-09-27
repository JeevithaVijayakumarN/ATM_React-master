import React from 'react'
import { Card } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button } from "react-bootstrap";
import { useState } from 'react';
import atmApi from '../api/atmApi';


const WithdrawlComponent = () => {
    const [withdrawlAmount,setWithdrawlAmount]=useState({amount:""})
    const withdrawlApi=(event)=>{
        event.preventDefault();
        atmApi
        .post("/amount/withdraw",withdrawlAmount)
        .then(
            (response)=>{
                let data=response.data;
                if(data.data){
                    console.log(data.data)
                }else if(data.error){
                    console.log(data.error.message)
                }
            },
            (error)=>{
                console.log(`Axios->${error.message}`)
            }
        )
        .catch((error)=>{
            console.log("Something went wrong")
        })
    }
  return (    
    // <div>
        <Card>       
       <Card.Body>
         <Card.Title>Withdraw Amount</Card.Title>
         <Card.Text>
          Enter the amount
         </Card.Text>
         <InputGroup>
       <Form.Control
         placeholder="amount" value={withdrawlAmount.amount}
         onChange={(event)=>{
            setWithdrawlAmount({...withdrawlAmount,amount:event.target.value})
         }}
         />
       <Button variant="outline-secondary" onClick={(event)=>withdrawlApi(event)}>withdrawl</Button>
     </InputGroup>       
       </Card.Body>
       <Card.Footer>
        hdfc.atm
       </Card.Footer>
     </Card>
    // </div>
  )
}

export default WithdrawlComponent