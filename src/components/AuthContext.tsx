import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
  id: string;
  username: string;
  email: string;
}
interface FormData {
  email: string;
  password: string;
}

interface AuthContextProps {
  currentUser: User | null;
  setCurrentUser: (user: User | null | any) => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState<User | null>(
    () => JSON.parse(localStorage.getItem('currentUser')|| "") || null
  );

  useEffect(() => {
    if (!currentUser) {
      const currentPath = window.location.pathname;
      const privateRoutes = ['/screen1', '/screen2', '/screen3', '/screen4', '/screen5', '/screen6', '/screen7', '/screen8', '/screen9', '/screen10'];

      if (!['/signin', '/signup', ...privateRoutes].includes(currentPath)) {
        navigate('/signin');
      }
    } else {
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
    }
  }, [currentUser, navigate]);

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
