import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectForm from "./pages/ProjectForm";
import StagesForm from "./pages/StagesForm";
import LandingPage from "./pages/LandingPage";
import Header from "./components/Header";
import { useState } from "react";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [projectData, setProjectData] = useState({
    nombre: "",
    fechaInicio: "",
    fechaFin: "",
    etapas: [],
  });

  return (
    <BrowserRouter>
      <Header isLoggedIn={isLoggedIn} onLogin={() => setIsLoggedIn(true)} />
      <div className="container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/proyecto"
            element={
              <div className="form-box">
                <ProjectForm
                  projectData={projectData}
                  setProjectData={setProjectData}
                />
              </div>
            }
          />
          <Route
            path="/proyecto/etapas"
            element={
              <div className="form-box">
                <StagesForm
                  projectData={projectData}
                  setProjectData={setProjectData}
                />
              </div>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
