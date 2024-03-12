import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import CountryDetail from "./Pages/CountryDetail";
import Home from "./Pages/Home";
import "./App.css";

function App() {
  return (
    <>
      <main className="theme">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:name" element={<CountryDetail />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
