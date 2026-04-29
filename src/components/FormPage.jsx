import React, { useState } from "react";
import Header from "./Header/Header";
import PerfilRespondente from "./PerfilRespondente/PerfilRespondente";
import QuestoesHSEIT from "./Questions/QuestoesHSEIT";

const FormPage = () => {
  const total = 35;
  const [formData, setFormData] = useState({ perfil: {}, respostas: {} });

  const answeredQuestoes = Object.keys(formData.respostas).length;
  const answered = answeredQuestoes;
  const progress = Math.round((answeredQuestoes / total) * 100);

  const handleSubmit = async () => {
    const payload = { ...formData, createdAt: new Date().toISOString() };

    await fetch("http://localhost:3000/respostas", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    alert("Enviado com sucesso!");
  };

  return (
    <div>
      <Header progress={progress} answered={answered} total={total} />

      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "32px" }}>
        <PerfilRespondente formData={formData} setFormData={setFormData} />

        <QuestoesHSEIT formData={formData} setFormData={setFormData} />

        <div style={{ textAlign: "center", marginTop: 20 }}>
          <button className="btn-submit" onClick={handleSubmit}>
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormPage;
