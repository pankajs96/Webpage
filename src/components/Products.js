import React, { useState } from "react";
//import  Image from "./components/Image"

const Products = () => {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState("products");

  const [products] = useState([
    {
      name: "Samsung M31",
      price: "₹14000",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNDJtBHk8-nj3KwVu_Wgcx-1-JoUTYoOieiHc2VjZ_APk0c8hAOPu7kuKeqkRetnXKiV8&usqp=CAU",
    },
    {
      name: "Redmi Note 10",
      price: "₹13000",
      image:
        "data:image/jpeg;base64,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",
    },
    {
      name: 'Lenovo 14" 8GB RAM',
      price: "₹57000",
      image:"https://www.lenovo.com/medias/lenovo-laptop-thinkbook-15p-front.png?context=bWFzdGVyfHJvb3R8MzE2MzN8aW1hZ2UvcG5nfGhmOS9oMjUvMTEwNzY1MTQ4NDA2MDYucG5nfDkxYWJiMDYxOGI2Zjc3MWRhOTU4ZjY1MWI2NWVmMjcwODE2MTc3YmRhOWFjYTk3YWQwZDA1ZjgzOTJjZWU1ZmM"
       
    },
    {
      name: "Boat Wireless Earphone",
      price: "₹1200",
      image:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/2e056443-6505-46ef-aa88-e20e2778b0a9.png",
    },
  ]);

  const addToCart = () => {
    setCart([...cart, products]);
  };

  const renderProducts = () => (
    <>
      <h1 className="protxt">Our Products</h1>
      <div className="pro">
        {products.map((product, idx) => (
          <div className="product" key={idx}>
                <img src={product.image} alt={product.name} className="proimage" />
                <div className="procontent">
                <h3 className="ui header proname">{product.name}</h3>
                <h4>{product.price}</h4>
                <button className="ui button" onClick={() => addToCart(product)}>Add to cart
                </button><br /><br />
                </div>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <div className="ui raised very padded text container segment">
      <header>
        <button className="ui button">Cart ({cart.length})</button>
      </header>
      {page === "products" && renderProducts()}
    </div>
  );
};


 

export default Products;
