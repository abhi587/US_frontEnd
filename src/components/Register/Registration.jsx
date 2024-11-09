import React, { useState } from 'react';
import axios from 'axios';
import './Register.css'

const Register = () => {
  const [formData, setFormData] = useState({
    title: '',
    name: '',
    phone: '',
    email: '',
    password: '',
    street: '',
    city: '',
    pincode: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};

    if (!formData.title) errors.title = 'Title is required';
    if (!formData.name) errors.name = 'Name is required';
    if (!/^[6-9]\d{9}$/.test(formData.phone)) errors.phone = 'Enter a valid 10-digit mobile number without country code and 0';
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) errors.email = 'Enter a valid email address';
    if (!formData.password || formData.password.length < 8 || formData.password.length > 15) errors.password = 'Password must be between 8 and 15 characters';
    if (!formData.street) errors.street = 'Street is required';
    if (!formData.city) errors.city = 'City is required';
    if (!formData.pincode) errors.pincode = 'Pincode is required';

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      const response = await axios.post('/api/register', formData);
      console.log(response.data);
      // Handle success (e.g., redirect to login page, show a success message, etc.)
    } catch (error) {
      console.error(error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <div className='main'>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <select name="title" value={formData.title} onChange={handleChange}>
            <option value="">Select</option>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Miss">Miss</option>
          </select>
          {errors.title && <p>{errors.title}</p>}
        </div>
        <div>
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div>
          <label>Phone</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
          {errors.phone && <p>{errors.phone}</p>}
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div>
          <label>Street</label>
          <input type="text" name="street" value={formData.street} onChange={handleChange} />
          {errors.street && <p>{errors.street}</p>}
        </div>
        <div>
          <label>City</label>
          <input type="text" name="city" value={formData.city} onChange={handleChange} />
          {errors.city && <p>{errors.city}</p>}
        </div>
        <div>
          <label>Pincode</label>
          <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} />
          {errors.pincode && <p>{errors.pincode}</p>}
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
