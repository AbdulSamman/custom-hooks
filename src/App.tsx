import "./App.scss";
import { PageUseFetch } from "./components/PageUseFetch";
import { PageUseToggle } from "./components/PageUseToggle";
import { PageWelcome } from "./components/PageWelcome";
import { PageStarter } from "./components/PageStarter";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="logo">
        <NavLink to="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" />
        </NavLink>
        <h1>Custom Hooks Site</h1>
      </div>
      <nav>
        <NavLink to={"/welcome"}>Welcome</NavLink>
        <NavLink to={"/useToggle"}>useToggle</NavLink>
        <NavLink to={"/useFetch"}>useFetch</NavLink>
      </nav>
      <Routes>
        <Route path="/welcome" element={<PageWelcome />} />
        <Route path="/useToggle" element={<PageUseToggle />} />
        <Route path="/useFetch" element={<PageUseFetch />} />
        <Route path="*" element={<PageStarter />} />
      </Routes>
    </div>
  );
}

export default App;
