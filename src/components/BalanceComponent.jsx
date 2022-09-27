import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Card } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import atmApi from '../api/atmApi';


const BalanceComponent = () => {
  const [balance,setBalance]=useState([])
  
  useEffect(()=>{ 
    atmApi
    .get(`/amount/all`)
    .then((res)=>
    {
      if(res.data){
        setBalance(res.data)
      }else if(res.data){
        console.log(res.data.error.message)

      }else{
        console.log("Something went wrong")
      }
    })
    .catch((error)=>{
      console.log(`Error->${error}`)
    })
  })
 
  return (  
    // <div> 
        <Card>
        <Card.Body>
          <Card.Title>View Balance</Card.Title>          
          <Card.Text>
           Your available balance is:
           <Form.Control
          type="text" disabled value={balance}/>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          hdfc.atm
        </Card.Footer>
      </Card>   
    //  </div> 
  )
}

export default BalanceComponent