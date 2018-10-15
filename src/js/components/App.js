import React from "react";
import Form from "./Form";
import Total from "./Total";
import ItemDetail from "./ItemDetail";

const App = () => (
  <div className="container">
  <Total />
  <ItemDetail />
  <div className="col-md-4 offset-md-1">
    <h2>Add a new article</h2>
    <Form />
  </div>
</div>
);
export default App;