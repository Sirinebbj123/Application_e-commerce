import React from "react";
import Productscart from "./Productscart";

const Productslist = ({ data }) => {
    console.log("Data in Productslist:", data);
  
    return (
      <>
        {data.map((item ,index) => (
        <Productscart key={item.id} item={item} />        ))}
      </>
    );
  };
export default Productslist;  