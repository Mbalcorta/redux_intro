import React from "react";
import List from "./List";
import Form from "./Form";
import Pickup from "./Pickup"

const App = () => (
  <div className="container">
  <div className="subtotal-container">
    <div className="subtotal"><span>Subtotal</span><span>$102.96</span></div>
    <Pickup />
    <div className="subtotal"><span>Est. taxes & fees</span><span>$8.92</span></div>
     <div className="subtotal"><span>(Based on 94066)</span></div>
    <List />
  </div>
  <div className="col-md-4 offset-md-1">
    <h2>Add a new article</h2>
    <Form />
  </div>
</div>
);
export default App;