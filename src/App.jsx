import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import CountryDetail from "./Pages/CountryDetail";
import Home from "./Pages/Home";
import "./App.css";

function App() {
  
  return (
    <>
    <BrowserRouter>
       

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:name" element={<CountryDetail />}/>
        </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
