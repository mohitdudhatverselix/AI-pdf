import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

interface FormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useAuth();

  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });

  useEffect(() => {
    if (currentUser) {
      navigate('/');
    }
  }, [currentUser, navigate]);

  const handleSignin = () => {
    const existingUsers: FormData[] = JSON.parse(localStorage.getItem('users') || "") || [];
    const foundUser: FormData | undefined = existingUsers.find(
      (user) =>
        user.email === formData.email && user.password === formData.password
    );
  
    if (foundUser) {
      console.log('User signed in:', foundUser);
      setCurrentUser(foundUser);
      alert('Signin successful!');
      navigate('/');
    } else {
      console.log('User not found or incorrect password');
    }
  };
  

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSignin();
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-3xl font-extrabold text-center mb-6">Sign In</h1>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
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
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
