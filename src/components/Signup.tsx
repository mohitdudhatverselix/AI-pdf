import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

interface FormData {
  username: string;
  email: string;
  password: string;
}

const Signup: React.FC = () => {
  const history = useNavigate();
  const [formData, setFormData] = useState<FormData>({ username: '', email: '', password: '' });

  const handleSignup = () => {
    const existingUsers: FormData[] = JSON.parse(localStorage.getItem('users')|| "") || [];
    const newUsers = [...existingUsers, formData];

    localStorage.setItem('users', JSON.stringify(newUsers));
    setFormData({ username: '', email: '', password: '' });

    alert('Signup successful!');
    history('/signin');
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSignup();
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-3xl font-extrabold text-center mb-6">Sign Up</h1>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div>
            <label htmlFor="username" className="text-sm font-semibold">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="text-sm font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="text-sm font-semibold">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          <button
            type="submit"
            className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
