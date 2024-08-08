import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/signup', { email, password });
      alert('User created successfully');
    } catch (error) {
      alert('Error creating user');
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold">Sign Up</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        {/* Form fields here */}
      </form>
    </div>
  );
};

export default SignUp;
