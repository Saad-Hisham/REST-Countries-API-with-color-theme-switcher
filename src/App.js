import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Navbar from "./Components/Navbar";
import DetailsPage from "./Components/DetailsPage";

function App() {
  const [isTextVisible, setTextVisible] = useState(false);

  const toggleTextVisibility = () => {
    setTextVisible(!isTextVisible);
  };

  return (
    <BrowserRouter>
      <main className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<DetailsPage />} />
        </Routes>
        {document.body.classList.add(localStorage.getItem("mode"))}
        <footer>
          <img
            src="https://i.ibb.co/p1FfgPJ/289962500-365203045735667-4283766746154825318-n.jpg"
            id="me"
            onClick={toggleTextVisibility}
          />
          <div className={`text ${isTextVisible ? "show" : ""}`}>
            <p className="attribution">
              Challenge by{" "}
              <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
                Frontend Mentor
              </a>
              . Coded with ❤️ by{" "}
              <a href="https://www.frontendmentor.io/profile/Saad-Hisham" target="_blank">
                Saad Hisham😼
              </a>
              .
            </p>
          </div>
        </footer>
      </main>
    </BrowserRouter>
  );
}

export default App;
