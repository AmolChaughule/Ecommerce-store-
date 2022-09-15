// ProductDetails.js

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => {
      setProduct(response.data);
    });
  }, [id]);

  const { title, price, description, image, rating } = product;
  return (
    <div style={{ margin: "auto", border: "1px solid teal", width: "400px" }}>
      <img src={image} style={{ margin: "auto", width: 200 }} />
      <h2>
        {id} - {title}
      </h2>
      <h2>Price-{price}</h2>
      <p>Description-{description}</p>
    </div>
  );
};

export default ProductDetails;
