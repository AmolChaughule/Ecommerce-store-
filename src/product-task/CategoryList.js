import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        setCategories(response.data);
      });
  }, []);

  return (
    <>
      <h4>Categoies</h4>
      <ul style={{ display: "flex", justifyContent: "space-around" }}>
        {categories &&
          categories.map((cat) => (
            <button key={cat}>
              <Link to={`/${cat}`}>{cat}</Link>
            </button>
          ))}
      </ul>
    </>
  );
};

export default CategoryList;
