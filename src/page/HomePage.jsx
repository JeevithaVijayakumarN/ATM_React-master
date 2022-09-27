import React from "react";

import { CardGroup } from "react-bootstrap";
import BalanceComponent from "../components/BalanceComponent";
import DepositComponent from "../components/DepositComponent";
import WithdrawlComponent from "../components/WithdrawlComponent";


const HomePage = () => {
  return (
    <>
    <h2 className="text-center">Welcome To ATM !!!!</h2>
    <CardGroup>
    
      <WithdrawlComponent/>    
      <DepositComponent/>    
      <BalanceComponent/>
      
    </CardGroup>
    </>
  );
};

export default HomePage;
