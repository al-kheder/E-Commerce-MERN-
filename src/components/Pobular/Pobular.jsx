import React from "react";
import "./Pobular.css";
import { Item } from "../Item/Item";
import data_product from "../Assets/data";
export const Pobular = () => {
  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="pobular-item">
        {data_product.map((item, i) => {
          return <Item key={i} item={item} />;
        })}
      </div>
    </div>
  );
};
