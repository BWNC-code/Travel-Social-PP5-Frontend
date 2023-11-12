import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { axiosReq } from "../../api/axiosDefaults";


const PostFilter = ({ onCategoryChange }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axiosReq.get("/categories/");
        setCategories(data.results); // Adjust based on your API response structure
      } catch (err) {
        console.log("Error fetching categories", err);
      }
    };

    fetchCategories();
  }, []); 

  return (
    <Form.Group>
      <Form.Label>Category</Form.Label>
      <Form.Control
        as="select"
        name="category"
        onChange={(e) => onCategoryChange(e.target.value)} // Use onCategoryChange for handling changes
      >
        <option value="">Select a Category</option>
        {categories.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.name}
          </option>
        ))}
      </Form.Control>
    </Form.Group>
  );
};

export default PostFilter;
