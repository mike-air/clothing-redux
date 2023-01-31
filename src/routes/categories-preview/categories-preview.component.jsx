import { useSelector } from "react-redux";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { selectCategoriesMap } from "../../store/categories/category.selector";
const CategoriesPreview = () => {

  const categoriesMap = useSelector(selectCategoriesMap)
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
