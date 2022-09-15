// StoreAPITask.js;

import React from "react";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./ProductDetails";
const StoreAPITask = () => {
  return (
    <section>
      <div>
        <CategoryList />
      </div>
      <div>
        <Routes>
          {/* {/ http://localhost:3000/11 /} */}
          <Route path="/:category" element={<ProductList />} />

          {/* {/ http://localhost:3000/details/11 /} */}
          <Route path="/details/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </section>
  );
};

export default StoreAPITask;
