import axios from 'axios';
import React, { useState } from 'react';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/login', { email, password });
      alert('Login successful');
      // Handle successful login, like storing tokens and redirecting
    } catch (error) {
      alert('Error logging in');
    }
  };

  return (
    <div className=" mx-auto mt-8">
      <h2 className="text-2xl font-bold">Login</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
