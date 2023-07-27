import React from "react";

import React from "react";
import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [formData, setFormData] = useState({ text: "", category: "" });
  const optionsList = categories.map((category) => (
    <option key={category} value={category}>
      {category}
    </option>
  ));

  const handleOnChange = (e) => {
    const newObj = { ...formData, [e.target.name]: e.target.value };
    setFormData(newObj);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onTaskFormSubmit(formData);
  };

function NewTaskForm() {
  return (
    <form className="new-task-form">
    <form className="new-task-form" onSubmit={handleFormSubmit}>
      <label>
        Details
        <input type="text" name="text" />
        <input
          type="text"
          name="text"
          value={formData.text}
          onChange={handleOnChange}
        />
      </label>
      <label>
        Category
        <select name="category">
          {/* render <option> elements for each category here */}
        <select
          name="category"
          value={formData.category}
          onChange={handleOnChange}
        >
          {optionsList}
        </select>
        </select>
      </label>
      <input type="submit" value="Add task" />
      </form>
    </form>
  );
}}
export default NewTaskForm;