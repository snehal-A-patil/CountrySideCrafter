import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(''); // Added state for success message
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = { email, password }; // Collect form data
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Login failed');

      const data = await response.json();
      localStorage.setItem('token', data.token); // Store JWT token

      // Store user data (assuming 'user' comes with the response)
      localStorage.setItem('user', JSON.stringify(data.user)); 

      setSuccess('Login successful! Redirecting...'); // Set success message
      setError(''); // Clear any previous errors
      setEmail('');
      setPassword('');

      // Redirect to home page after success
      setTimeout(() => {
        navigate('/');
      }, 2000); // Wait 2 seconds before redirecting (optional)

    } catch (err) {
      setError(err.message || 'Login failed');
      setSuccess(''); // Clear success message in case of error
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white shadow-md rounded">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        
        {/* Display error and success messages */}
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        {success && <p className="text-green-500 text-sm mb-4">{success}</p>} 
        
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#4E342E] text-white py-2 rounded  transition"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Don't have an account? <a href="/signup" className="text-[#4E342E]">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
