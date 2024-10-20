import React from 'react';

const categories = ['fish', 'coral', 'mammal'];

const CategoryFilters = ({ setSelectedCategory }) => (
  <div id="category-filters">
    {categories.map((category) => (
      <button
        key={category}
        className="filter-btn"
        onClick={() => setSelectedCategory(category)}
      >
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </button>
    ))}
  </div>
);

export default CategoryFilters;
