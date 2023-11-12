import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';

const PostFilter = ({ onCategoryChange }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories from your API
    fetch('/api/categories')
      .then(response => response.json())
      .then(data => setCategories(data));
  }, []);

  return (
    <Form.Select aria-label="Select category" onChange={e => onCategoryChange(e.target.value)}>
      <option value="">All Categories</option>
      {categories.map(category => (
        <option key={category.id} value={category.id}>{category.name}</option>
      ))}
    </Form.Select>
  );
};

export default PostFilter;