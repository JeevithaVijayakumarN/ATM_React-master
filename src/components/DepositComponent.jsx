import React from 'react'
import { Card } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import atmApi from '../api/atmApi';
const DepositComponent = () => {
    // const navigate = useNavigate();
    const [depositAmount, setDepositAmount]=useState({amount:""})
    const depositApi = (event) => {
        event.preventDefault();
        atmApi
            .post("/amount/deposit", depositAmount)
            .then(
                (response) => {
                    let data = response.data;
                    if (data.data) {
                        console.log(data.data);
                       
                    } else if (data.error) {
                        console.log(data.error.message);
                    }
                },
                (error) => {
                    console.log(`Axios -> ${error.message}`);
                }
            )
            .catch((error) => {
                console.log("Something went wrong");
            });
    };


  return (
    // <div>
         <Card>
        <Card.Body>
          <Card.Title>Deposit Amount</Card.Title>
          <Card.Text>
           Enter the amount
          </Card.Text>
          <InputGroup>
        <Form.Control
          placeholder="amount"
          value={depositAmount.amount}
          onChange={(event) => {
            setDepositAmount({ ...depositAmount, amount: event.target.value });
          }}
          />
        <Button variant="outline-secondary" onClick={(event) =>   depositApi(event)}>deposit</Button>
      </InputGroup>
        </Card.Body>
        <Card.Footer>
         hdfc.atm
        </Card.Footer>
      </Card>
    // </div>
  )
}

export default DepositComponent