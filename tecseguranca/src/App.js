import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

//hooks
import { useState, useEffect } from "react";
import { useAuthentication } from "./hooks/useAuthentication";

//context
import { AuthProvider } from "./context/AuthContext";

//components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { BsDoorOpen } from "react-icons/bs";

//pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import RegisterPpe from "./pages/RegisterPpe/RegisterPpe";
import RequestPpe from "./pages/RequestPpe/RequestPpe";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();
  const navigateHome = "/";
  const navigateLogin = "/login";
  const navigateAbout = "/about";
  const navigateRegister = "/register";
  const navigateRegisterPpe = "/ppe/register";
  const navigateRequestPpe = "/ppe/request";
  const navigateDashboard = "/dashboard";

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if (loadingUser) {
    return <p>Carregando, por favor aguarde...</p>;
    //return <CircularProgressbar styles={{ width: 200, height: 200 }} />;
  }

  return (
    <div className="App">
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path={navigateHome} element={<Home />} />
              <Route path={navigateAbout} element={<About />} />
              <Route
                path={navigateLogin}
                element={!user ? <Login /> : <Navigate to={navigateHome} />}
              />
              <Route
                path={navigateRegister}
                element={!user ? <Register /> : <Navigate to={navigateHome} />}
              />
              <Route
                path={navigateRegisterPpe}
                element={
                  user ? <RegisterPpe /> : <Navigate to={navigateLogin} />
                }
              />
              <Route
                path={navigateRequestPpe}
                element={
                  user ? <RequestPpe /> : <Navigate to={navigateLogin} />
                }
              />
              <Route
                path={navigateDashboard}
                element={user ? <Dashboard /> : <Navigate to={navigateLogin} />}
              />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
