import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { axiosReq } from "../../api/axiosDefaults";
import PropTypes from "prop-types";

const PostFilter = ({ onCategoryChange }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axiosReq.get("/categories/");
        setCategories(data.results);
      } catch (err) {
        // console.log(err)
      }
    };

    fetchCategories();
  }, []);

  return (
    <Form.Group>
      <Form.Label className="d-none">Category</Form.Label>
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

PostFilter.propTypes = {
  onCategoryChange: PropTypes.func.isRequired,
};

export default PostFilter;
