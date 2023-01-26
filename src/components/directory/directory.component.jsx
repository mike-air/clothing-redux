import React from 'react'
import CategoryItem from '../directory-item/directory-item.component';
import './directory.style.scss'
const Directory = ({categories}) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </div>
  );
}

export default Directory