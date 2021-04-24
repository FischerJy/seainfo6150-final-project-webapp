import React from "react";

const Bar = (props) => {
  return (
    <div className="main">
      The bar page with
      <p>categoryId of {props.categoryId}</p>
      <p>productId of {props.productId}</p>
    </div>
  );
};

export default Bar;
