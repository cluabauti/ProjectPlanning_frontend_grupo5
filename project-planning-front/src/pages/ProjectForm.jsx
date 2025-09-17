import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProjectForm({ projectData, setProjectData }) {
  const [form, setForm] = useState(projectData);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setProjectData(form);
    navigate("/proyecto/etapas");
  };

  return (
    <div>
      <h2>Crear Proyecto</h2>
      <input
        type="text"
        name="nombre"
        placeholder="Nombre del proyecto"
        value={form.nombre}
        onChange={handleChange}
      />
      <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        <input
          type="date"
          name="fechaInicio"
          value={form.fechaInicio}
          onChange={handleChange}
        />
        <input
          type="date"
          name="fechaFin"
          value={form.fechaFin}
          onChange={handleChange}
        />
      </div>
      <button onClick={handleSubmit} className="btn btn-primary">
        Siguiente
      </button>
    </div>
  );
}
