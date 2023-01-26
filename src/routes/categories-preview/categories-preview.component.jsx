import { Fragment, useContext } from "react";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { CategoriesContext } from "../../context/categories.context";
import { docRef } from "../../utils/firebase/firebase.utils";
const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <div style={{padding:'20px'}}>
      {Object.keys(categoriesMap).map((title, i) => {
        const products = categoriesMap[title];

        return <CategoryPreview products={products} key={i} title={title} />;
      })}
    </div>
  );
};

export default CategoriesPreview;
