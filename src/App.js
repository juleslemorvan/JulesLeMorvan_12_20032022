import "./App.css";
import { Header } from "./components/Header/Header";
import { NavBar } from "./components/NavBar/NavBar";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <div className="layout">
      <Header />
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
