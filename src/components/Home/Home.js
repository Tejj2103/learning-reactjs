import React from "react";
import Product from "../Product/Product";

function Home(props) {
  const productList = props.productList;
  const visible = props.visible;
  console.log("props", props)


  return (
    visible ?
      productList.map((item, i) => {
        return <Product name={item.name} value={item.price} desc={item.desc} />
      }) : 
      
      <p>productList is not visible to you</p>
  )
}

export default Home;


