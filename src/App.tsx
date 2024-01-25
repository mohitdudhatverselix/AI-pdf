import { ThemeProvider } from "@/components/theme-provider"
import { ReactNode } from "react";
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./components/mode-toggle";
import Screen5 from "./components/Screen5";
import Screen4 from "./components/Screen4";
import Screen1 from "./components/Screen1";
import Screen2 from "./components/Screen2";
import Screen3 from "./components/Screen3";
import Side_Menu from "./components/Side_menu";
import Screen7 from "./components/Screen7";
import Screen8 from "./components/Screen8";
import Screen9 from "./components/Screen9";
import Screen10 from "./components/Screen10";
import { AuthProvider, useAuth } from "./components/AuthContext";
import { Navigate, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import SignIn from "./components/Signin";

interface AppProps {
  children: ReactNode;
}

function App({ children }: AppProps) {
  const PrivateRoute = ({ element, ...rest }) => {
    const { currentUser } = useAuth();

    return currentUser ? (
      element
    ) : (
      <Navigate
        to="/signin"
        state={{ from: (rest.location && rest.location.pathname) || "/" }}
      />
    );
  };
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
  
      <AuthProvider>
      {children}
          <Routes>
            <Route path="/" element={<Screen2 />} />
            <Route
              path="/screen1"
              element={<PrivateRoute element={<Screen1 />} />}
            />
            <Route
              path="/screen2"
              element={<PrivateRoute element={<Screen2 />} />}
            />
            <Route
              path="/screen3"
              element={<PrivateRoute element={<Screen3 />} />}
            />
            <Route
              path="/screen4"
              element={<PrivateRoute element={<Screen4 />} />}
            />
            <Route
              path="/screen5"
              element={<PrivateRoute element={<Screen5 />} />}
            />
            <Route
              path="/screen6"
              element={<PrivateRoute element={<Side_Menu />} />}
            />
            <Route
              path="/screen7"
              element={<PrivateRoute element={<Screen7 />} />}
            />
            <Route
              path="/screen8"
              element={<PrivateRoute element={<Screen8 />} />}
            />
            <Route
              path="/screen9"
              element={<PrivateRoute element={<Screen9 />} />}
            />
            <Route
              path="/screen10"
              element={<PrivateRoute element={<Screen10 />} />}
            />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
