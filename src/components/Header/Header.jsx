import React from "react";
import "./Header.css";

const Header = ({ progress = 0, answered = 0, total = 35 }) => {
  return (
    <>
      {/* HERO */}
      <header className="hero">
        <div className="hero-badge">HSEIT · NR-1 · ISO 45003</div>

        <h1>
          Pesquisa de <span>Riscos Psicossociais</span>
        </h1>

        <p>
          Health and Safety Executive Indicator Tool — HSE-IT
          <br />
          Suas respostas são anônimas e contribuem para um ambiente de trabalho
          mais saudável.
        </p>

        <div className="hero-meta">
          <span>Anônimo e voluntário</span>
          <span>~15 minutos</span>
          <span>Dados protegidos (LGPD)</span>
        </div>
      </header>

      {/* PROGRESS */}
      <div className="progress-wrap">
        <div className="progress-inner">
          <div className="progress-labels">
            <span>
              {answered} de {total} questões respondidas
            </span>
            <span>{progress}%</span>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;