import React from "react";
import "./PerfilRespondente.css";

const PerfilRespondente = ({ formData, setFormData }) => {
  const handleChange = (e) => {
  const { id, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    perfil: {
      ...prev.perfil,
      [id]: value,
    },
  }));
};
 

  return (

    <div>
      <div className="Perfil">
      <h2>🟧Perfil do Respondente</h2>
      </div>
    <div className="id-card">

      <div className="fields-grid">
        {/* Sexo */}
        <div className="field">
          <label>Sexo</label>
          <select id="f-sexo" value={formData.perfil?.["f-sexo"] || ""} onChange={handleChange}>
            <option value="">Selecione…</option>
            <option>Masculino</option>
            <option>Feminino</option>
            <option>Não-binário</option>
            <option>Prefiro não informar</option>
          </select>
        </div>

        {/* Idade */}
        <div className="field">
          <label>Faixa etária</label>
          <select id="f-idade" value={formData.perfil?.["f-idade"] || ""} onChange={handleChange}>
            <option value="">Selecione…</option>
            <option>18 a 29 anos</option>
            <option>30 a 39 anos</option>
            <option>40 a 49 anos</option>
            <option>50 a 59 anos</option>
            <option>60 anos ou mais</option>
          </select>
        </div>

        {/* Escolaridade */}
        <div className="field">
          <label>Escolaridade</label>
          <select id="f-escol" value={formData.perfil?.["f-escol"] || ""} onChange={handleChange}>
            <option value="">Selecione…</option>
            <option>Fundamental incompleto/completo</option>
            <option>Médio incompleto/completo</option>
            <option>Superior incompleto/completo</option>
            <option>Pós-graduação</option>
          </select>
        </div>

        {/* Tempo */}
        <div className="field">
          <label>Tempo de contrato</label>
          <select id="f-tempo" value={formData.perfil?.["f-tempo"] || ""} onChange={handleChange}>
            <option value="">Selecione…</option>
            <option>Menos de 6 meses</option>
            <option>6 meses a 1 ano</option>
            <option>1 a 2 anos</option>
            <option>2 a 3 anos</option>
          </select>
        </div>

        {/* Grupo */}
        <div className="field">
          <label>Grupo de trabalho</label>
          <select id="f-grupo" value={formData.perfil?.["f-grupo"] || ""} onChange={handleChange}>
            <option value="">Selecione…</option>
            <option>Operacional / Campo</option>
            <option>Técnico / Inspeção</option>
            <option>Supervisor / Encarregado</option>
            <option>Coordenador / Gerente</option>
            <option>Administrativo</option>
          </select>
        </div>

        {/* Turno */}
        <div className="field">
          <label>Turno</label>
          <select id="f-turno" value={formData.perfil?.["f-turno"] || ""} onChange={handleChange}>
            <option value="">Selecione…</option>
            <option>Diurno</option>
            <option>Noturno</option>
            <option>Rotativo</option>
            <option>Administrativo</option>
          </select>
        </div>

        {/* Setor */}
        <div className="field">
          <label>Unidade / Setor</label>
          <input
            type="text"
            id="f-setor"
            placeholder="Ex: Montagem – Unidade SP"
            value={formData.perfil?.["f-setor"] || ""}
            onChange={handleChange}
          />
        </div>

        {/* Estado civil */}
        <div className="field">
          <label>Estado civil</label>
          <select id="f-civil" value={formData.perfil?.["f-civil"] || ""} onChange={handleChange}>
            <option value="">Selecione…</option>
            <option>Solteiro(a)</option>
            <option>Casado(a) / União estável</option>
            <option>Divorciado(a)</option>
            <option>Viúvo(a)</option>
          </select>
        </div>
      </div>
    </div>
  </div>
  );
};

export default PerfilRespondente;