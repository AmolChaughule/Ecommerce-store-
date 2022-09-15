// ProductList.js

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
const ProductList = () => {
  const { category } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .then((response) => {
        setProducts(response.data);
      });
  }, [category]);

  return (
    <>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {products &&
          products.map(({ id, title, price, description, image, rating }) => (
            <div
              key={id}
              style={{
                width: 250,
                border: "1px solid #333",
                padding: 2,
                margin: 5,
              }}
            >
              <img src={image} style={{ width: "100%" }} />
              <h3>
                <Link to={`/details/${id}`}> {title}</Link>
              </h3>
              <h4>Price: {price}</h4>
              <p>{description}</p>
              <p>
                Rating: {rating?.rate} by {rating?.count}
              </p>
            </div>
          ))}
      </div>
    </>
  );
};

export default ProductList;
