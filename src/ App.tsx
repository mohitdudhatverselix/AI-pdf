import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Screen1 from "./Components/Screen1";
import Screen2 from "./Components/Screen2";
import Screen3 from "./Components/Screen3";
import Screen4 from "./Components/Screen4";
import Screen5 from "./Components/Screen5";
import Side_Menu from "./Components/Side_Menu";
import Screen7 from "./Components/Screen7";
import Screen8 from "./Components/Screen8";
import Screen9 from "./Components/Screen9";
import Screen10 from "./Components/Screen10";
import Signup from "./Components/Signup";
import Signin from "./Components/Signin";
import { useAuth } from "./Components/AuthContext";
import { AuthProvider } from "./Components/AuthContext";
import "./App.css";
import { ThemeProvider } from "./components/theme-provider";

function App() {
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
    <>
      <BrowserRouter>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <AuthProvider>
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
              <Route path="/signin" element={<Signin />} />
            </Routes>
          </AuthProvider>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
