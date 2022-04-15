import "./App.css";
import { useState, useEffect, createContext } from "react";
import { Header } from "./components/Header/Header";
import { NavBar } from "./components/NavBar/NavBar";
import { Home } from "./pages/Home/Home";

export const UserContext = createContext(null);

function App() {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const nextUserId = new URLSearchParams(window.location.search).get(
      "user_id"
    );
    setUserId(nextUserId);
  }, []);

  return (
    <div className="layout">
      <UserContext.Provider value={userId}>
        <Header />
        <NavBar />
        <Home />
      </UserContext.Provider>
    </div>
  );
}

export default App;
