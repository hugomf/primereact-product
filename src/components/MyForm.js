import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MyForm() {
  // Use the useState hook to store the form data in a state variable
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    sku: '',
    imagePath: '',
    description: '',
  });

  // Use the useState hook to store the list of items in a state variable
  const [items, setItems] = useState([]);

  // Use the useEffect hook to fetch the list of items when the component mounts
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('http://localhost:8080/product');
      setItems(response.data.items);
    }
    fetchData();
  }, []);

  // Function to handle form submissions
  async function handleSubmit(event) {
    event.preventDefault();
    // Determine the HTTP method based on whether the form data has an ID
    
    const baseUrl = 'http://localhost:8080/product';

    const method = formData.id ? 'put' : 'post';
    const url = formData.id ? baseUrl + "/" + formData.id : baseUrl;

    // Call the appropriate method using axios
    await axios[method](url, formData);
    // Reset the form data and fetch the updated list of items
    setFormData({
      id: '',
      title: '',
      sku: '',
      imagePath: '',
      description: '',
    });
    const response = await axios.get('http://localhost:8080/product');
    setItems(response.data);
  }

  // Function to handle form input changes
  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  // Function to handle the deletion of an item
  async function handleDelete(id) {
    await axios.delete(`http://localhost:8080/product/${id}`);
    const response = await axios.get('http://localhost:8080/product');
    setItems(response.data);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="title" name="name" value={formData.title} onChange={handleChange} />
      <br />
      <label htmlFor="description">Sku:</label>
      <input type="text" id="sku" name="sku" value={formData.sku} onChange={handleChange} />
      <br />
      <label htmlFor="description">Description:</label>
      <input type="text" id="description" name="description" value={formData.description} onChange={handleChange} />
      <br />
      <label htmlFor="description">ImagePath:</label>
      <input type="text" id="imagePath" name="imagePath" value={formData.imagePath} onChange={handleChange} />
      <br />
      <button type="submit">Save</button>
      <hr />
      {items.map(item => (
        <div key={item.id}>
          <span>{item.id}</span>
          <button onClick={() => setFormData(item)}>Edit</button>
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </div>
      ))}
    </form>
  );
}

export { MyForm }