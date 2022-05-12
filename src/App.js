import "./App.css";
import { createContext } from "react";
import { Header } from "./components/Header/Header";
import { NavBar } from "./components/NavBar/NavBar";
import { Home } from "./pages/Home/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./pages/NotFound";

export const UserContext = createContext(null);

const UserNotFound = () => {
  return "User Not Found";
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/user/:id/:type"
          element={
            <div className="layout">
              <Header />
              <NavBar />
              <Home />
            </div>
          }
        />
        <Route
          path="/user/:id"
          element={
            <div className="layout">
              <Header />
              <NavBar />
              <Home />
            </div>
          }
        />
        <Route path="/" element={<Navigate replace to="/user/12" />} />

        <Route path="/user_not_found" element={<UserNotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
