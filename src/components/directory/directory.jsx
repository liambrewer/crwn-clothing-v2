import './directory.scss';

import CategoryItem from '../category-item/category-item';

import { Link } from 'react-router-dom';

const Directory = ({ categories }) => (
  <div className='directory-container'>
    {categories.map((category) => (
      <CategoryItem key={category.id} category={category} />
    ))}
    <Link to='/shop'>
      <h1>Shop</h1>
    </Link>
  </div>
);

export default Directory;
