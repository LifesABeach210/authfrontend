import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Componets/NavBar";
import Home from "./Pages/Home";
import RegistrationPage from "./Pages/RegistrationPage";
import Login from "./Pages/Login";
import { useState } from "react";

function App() {
  const [authLoading, isAuthLoading] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route
            path={"/"}
            element={
              <NavBar
                isAuthLoading={isAuthLoading}
                authLoading={authLoading}
              />
            }
          />
          <Route index element = {<Home  />}/>
          <Route path='Login'
          element={<Login authLoading={authLoading}isAuthLoading={isAuthLoading}/>}

          />
          <Route path='registration' element={<RegistrationPage authLoading={authLoading}
          isAuthLoading={isAuthLoading}
           />} />

        </Routes>
      </header>
    </div>
  );
}

export default App;
