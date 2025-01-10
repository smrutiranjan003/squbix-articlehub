import React from 'react';

const FilterPills = () => {
  const categories = ['All', 'Technology', 'Business', 'Health'];

  return (
    <div className="filter-pills">
      {categories.map((category) => (
        <button key={category} className="pill">
          {category}
        </button>
      ))}
    </div>
  );
};

export default FilterPills;
