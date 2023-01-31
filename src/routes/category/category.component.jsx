import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";

import ProductCard from "../../components/product-card/product-card.component";

import { selectCategoriesMap } from "../../store/categories/category.selector";
import "./category.style.scss";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);
 
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <div style={{padding:'20px'}}>
      <Link to={-1} className="back">
         &#8592;
      </Link>
      <h2 className="category-title">{category.toUpperCase()}</h2>
          <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Category;
