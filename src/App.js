import { Route, Routes } from "react-router-dom";
import AppNavbar from "./components/AppNavbar";
import Products from "./components/Products";
import ShowCard from "./components/ShowCard";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/card" element={<ShowCard />} />
      </Routes>
    </div>
  );
}

export default App;
