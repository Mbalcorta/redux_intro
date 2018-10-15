import React from "react";
import List from "./List";
import Pickup from "./Pickup"

const Total = () => (
  <div className="subtotal-container">
    <div className="subtotal">
      <span>Subtotal</span>
      <span>$102.96</span>
    </div>
    <Pickup />
    <div className="subtotal">
      <span>Est. taxes & fees</span>
      <span>$8.92</span>
    </div>
    <div className="subtotal">
      <span>(Based on 94066)</span>
    </div>
    <div className="break"></div>
    <div className="subtotal total">
      <span>Est. total</span>
      <span>$108.03</span>
    </div>
    <List />
  </div>
);
export default Total;




