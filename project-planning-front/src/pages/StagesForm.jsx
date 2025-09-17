import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function StagesForm({ projectData, setProjectData }) {
  const [etapas, setEtapas] = useState(projectData.etapas || []);
  const navigate = useNavigate();

  const handleChange = (index, field, value) => {
    const nuevasEtapas = [...etapas];
    nuevasEtapas[index][field] = value;
    setEtapas(nuevasEtapas);
  };

  const addEtapa = () => {
    setEtapas([
      ...etapas,
      { nombre: "", fechaInicio: "", fechaFin: "", cobertura: "", descripcion: "" },
    ]);
  };

  const handleSave = () => {
    setProjectData({ ...projectData, etapas });
    console.log("Proyecto final:", { ...projectData, etapas });
    alert("Proyecto guardado (ver consola)");
  };

  return (
    <div>
      <button onClick={() => navigate("/proyecto")} className="back-button">
        ←
      </button>

      <h2>Plan de Trabajo</h2>
      {etapas.map((etapa, index) => (
        <div key={index} style={{ marginBottom: "1rem" }}>
          <input
            type="text"
            placeholder="Nombre de la etapa"
            value={etapa.nombre}
            onChange={(e) => handleChange(index, "nombre", e.target.value)}
          />
          <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
            <input
              type="date"
              value={etapa.fechaInicio}
              onChange={(e) => handleChange(index, "fechaInicio", e.target.value)}
            />
            <input
              type="date"
              value={etapa.fechaFin}
              onChange={(e) => handleChange(index, "fechaFin", e.target.value)}
            />
          </div>
          <select
            value={etapa.cobertura}
            onChange={(e) => handleChange(index, "cobertura", e.target.value)}
            style={{ marginTop: "10px" }}
          >
            <option value="">Tipo de cobertura</option>
            <option value="economico">Económico</option>
            <option value="materiales">Materiales</option>
            <option value="mano_obra">Mano de obra</option>
            <option value="otros">Otros</option>
          </select>
          <textarea
            placeholder="Descripción del pedido"
            value={etapa.descripcion}
            onChange={(e) => handleChange(index, "descripcion", e.target.value)}
            style={{ marginTop: "10px" }}
          />
        </div>
      ))}

      <button onClick={addEtapa} className="btn btn-add">
        + Agregar Etapa
      </button>
      <button onClick={handleSave} className="btn btn-primary">
        Guardar Proyecto
      </button>
    </div>
  );
}
