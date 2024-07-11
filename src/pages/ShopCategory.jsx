import React, { useContext } from "react";
import "../pages/CSS/ShopCategory.css";
import { ShopContext } from "../context/ShopContext";
import dropdown_icon from "../components/Assets/dropdown_icon.png";
import { Item } from "../components/Item/Item";
export const ShopCategory = ({ category, banner }) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          sort by <img src={dropdown_icon} alt />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (category === item.category) {
            return <Item key={i} item={item} />;
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">Explore More</div>
    </div>
  );
};
