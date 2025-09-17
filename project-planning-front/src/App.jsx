import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectForm from "./pages/ProjectForm";
import StagesForm from "./pages/StagesForm";
import Header from "./components/Header";
import { useState } from "react";
import "./App.css";

function App() {
  const [projectData, setProjectData] = useState({
    nombre: "",
    fechaInicio: "",
    fechaFin: "",
    etapas: [],
  });

  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
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
