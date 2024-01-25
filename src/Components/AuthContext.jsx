import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('currentUser')) || null);

  useEffect(() => {
    // If currentUser is not set and the route is a private route, redirect to '/signin'
    if (!currentUser) {
      const currentPath = window.location.pathname;
      const privateRoutes = ['/screen1', '/screen2', '/screen3', '/screen4', '/screen5', '/screen6', '/screen7', '/screen8', '/screen9', '/screen10'];
      
      if (!['/signin', '/signup', ...privateRoutes].includes(currentPath)) {
        navigate('/signin');
      }
    } else {
      // Save the currentUser to local storage
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
    }
  }, [currentUser, navigate]);

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
