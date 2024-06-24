import React from "react";
import { Item } from "../Item/Item";
import "./NewCollection.css";
import new_collection from "../Assets/new_collections";
export const NewCollections = () => {
  return (
    <div className="new-collections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {new_collection.map((item, i) => {
          return <Item key={i} item={item} />;
        })}
      </div>
    </div>
  );
};
