import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import  Navbar from "./Components/Navbar";
import DetailsPage from "./Components/DetailsPage";
function App() {
  return (
    <BrowserRouter>
      <main className="App">
<Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<DetailsPage/>} />

        </Routes>
        {document.body.classList.add(localStorage.getItem("mode"))}
      </main>
    </BrowserRouter>

  );
}

export default App;
