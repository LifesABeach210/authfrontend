import "./App.css";
import { Routes, Route } from "react-router-dom";
import RegistrationPage from "./Pages/RegistrationPage";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import NavBar from "./Componets/NavBar";
import { useState } from "react";

function App() {
  const [isAuthLoading, setIsAuthLoading] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route
            path="/"
            element={
              <NavBar
                isAuthLoading={isAuthLoading}
                setIsAuthLoading={setIsAuthLoading}
              />
            }
          >
            <Route index element={<Home />} />
            <Route
              path="/login"
              element={
                <Login
                  isAuthLoading={isAuthLoading}
                  setIsAuthLoading={setIsAuthLoading}
                />
              }
            />
            <Route
              path="/registration"
              element={
                <RegistrationPage
                  isAuthLoading={isAuthLoading}
                  setIsAuthLoading={setIsAuthLoading}
                />
              }
            />
          </Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;