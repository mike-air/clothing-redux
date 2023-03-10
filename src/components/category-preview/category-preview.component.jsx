import React from "react";
import "./category-preview.style.scss";
import ProductCard from "../product-card/product-card.component";
import { Link } from "react-router-dom";
const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container" >
      <h2 className="title">
        <span>{title.toUpperCase()}</span>
        <Link className="link" to={title}>See more &gt;</Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
