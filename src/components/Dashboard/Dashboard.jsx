import React, { useEffect, useRef, useState } from "react";
import { Chart, ArcElement, PieController, Tooltip, Legend } from "chart.js";

Chart.register(ArcElement, PieController, Tooltip, Legend);

const API_URL = "http://localhost:3000/respostas";

const QUESTIONS = [
  { number: 1, id: "demanda_conflito_grupos", text: "No trabalho, diferentes grupos exigem de mim coisas difíceis de conciliar.", category: "demanda" },
  { number: 2, id: "demanda_prazos_impossiveis", text: "Tenho prazos impossíveis de serem cumpridos.", category: "demanda" },
  { number: 3, id: "demanda_intensidade_trabalho", text: "Tenho que trabalhar muito intensamente.", category: "demanda" },
  { number: 4, id: "demanda_sobrecarga_tarefas", text: "Preciso deixar de lado algumas tarefas porque tenho coisas demais para fazer.", category: "demanda" },
  { number: 5, id: "demanda_falta_pausas", text: "Não consigo fazer pausas suficientes.", category: "demanda" },
  { number: 6, id: "demanda_pressao_longos_periodos", text: "Sou pressionado para trabalhar por longos períodos.", category: "demanda" },
  { number: 7, id: "demanda_trabalho_rapido", text: "Tenho que trabalhar muito rápido.", category: "demanda" },
  { number: 8, id: "demanda_pressao_tempo", text: "Sofro pressões de tempo absurdas.", category: "demanda" },
  { number: 9, id: "controle_pausa_decisao", text: "Posso decidir quando fazer uma pausa.", category: "controle" },
  { number: 10, id: "controle_ritmo_trabalho", text: "Posso decidir sobre meu ritmo de trabalho.", category: "controle" },
  { number: 11, id: "controle_metodo_trabalho", text: "Posso escolher como fazer meu trabalho.", category: "controle" },
  { number: 12, id: "controle_tarefas_decisao", text: "Posso escolher o que fazer no trabalho.", category: "controle" },
  { number: 13, id: "controle_autonomia_execucao", text: "Tenho poder de decisão sobre minha maneira de trabalhar.", category: "controle" },
  { number: 14, id: "controle_flexibilidade_horario", text: "Meu horário de trabalho pode ser flexível.", category: "controle" },
  { number: 15, id: "chefia_feedback_retorno", text: "Recebo retorno sobre os trabalhos que realizo.", category: "chefia" },
  { number: 16, id: "chefia_apoio_problemas", text: "Posso contar com ajuda do meu chefe imediato.", category: "chefia" },
  { number: 17, id: "chefia_comunicacao_problemas", text: "Posso falar com meu chefe sobre algo que me incomodou.", category: "chefia" },
  { number: 18, id: "chefia_apoio_emocional", text: "Recebo apoio em situações emocionalmente desgastantes.", category: "chefia" },
  { number: 19, id: "chefia_motivacao", text: "Meu chefe imediato me motiva no trabalho.", category: "chefia" },
  { number: 20, id: "colegas_ajuda_dificuldade", text: "Meus colegas me ajudam quando o trabalho fica difícil.", category: "colegas" },
  { number: 21, id: "colegas_apoio", text: "Recebo ajuda e apoio dos meus colegas.", category: "colegas" },
  { number: 22, id: "colegas_respeito", text: "Sou respeitado pelos meus colegas.", category: "colegas" },
  { number: 23, id: "colegas_escuta_problemas", text: "Meus colegas ouvem meus problemas de trabalho.", category: "colegas" },
  { number: 24, id: "relacao_assedio_verbal", text: "Estou sujeito a assédio verbal ou comportamental.", category: "relac" },
  { number: 25, id: "relacao_atrito", text: "Existe atrito entre colegas de trabalho.", category: "relac" },
  { number: 26, id: "relacao_constrangimento", text: "Estou sujeito a constrangimentos no trabalho.", category: "relac" },
  { number: 27, id: "relacao_tensao", text: "Os relacionamentos no trabalho são tensos.", category: "relac" },
  { number: 28, id: "cargo_clareza_expectativas", text: "Sei claramente o que é esperado de mim.", category: "cargo" },
  { number: 29, id: "cargo_execucao", text: "Sei como executar meu trabalho.", category: "cargo" },
  { number: 30, id: "cargo_responsabilidades", text: "Sei minhas responsabilidades.", category: "cargo" },
  { number: 31, id: "cargo_metas_setor", text: "Conheço as metas do meu setor.", category: "cargo" },
  { number: 32, id: "cargo_integracao", text: "Entendo como meu trabalho se integra à organização.", category: "cargo" },
  { number: 33, id: "mudanca_questionamento", text: "Posso questionar mudanças no trabalho.", category: "mudanca" },
  { number: 34, id: "mudanca_consulta", text: "A equipe é consultada sobre mudanças no trabalho.", category: "mudanca" },
  { number: 35, id: "mudanca_esclarecimento", text: "Sou esclarecido sobre mudanças na prática.", category: "mudanca" },
];

const CATS = [
  { id: "demanda", label: "Demandas", color: "#dc2626", inv: true, qs: [
      "demanda_conflito_grupos",
      "demanda_prazos_impossiveis",
      "demanda_intensidade_trabalho",
      "demanda_sobrecarga_tarefas",
      "demanda_falta_pausas",
      "demanda_pressao_longos_periodos",
      "demanda_trabalho_rapido",
      "demanda_pressao_tempo",
    ]
  },
  { id: "controle", label: "Controle", color: "#1d4ed8", inv: false, qs: [
      "controle_pausa_decisao",
      "controle_ritmo_trabalho",
      "controle_metodo_trabalho",
      "controle_tarefas_decisao",
      "controle_autonomia_execucao",
      "controle_flexibilidade_horario",
    ]
  },
  { id: "chefia", label: "Apoio da Chefia", color: "#6d28d9", inv: false, qs: [
      "chefia_feedback_retorno",
      "chefia_apoio_problemas",
      "chefia_comunicacao_problemas",
      "chefia_apoio_emocional",
      "chefia_motivacao",
    ]
  },
  { id: "colegas", label: "Apoio Colegas", color: "#047857", inv: false, qs: [
      "colegas_ajuda_dificuldade",
      "colegas_apoio",
      "colegas_respeito",
      "colegas_escuta_problemas",
    ]
  },
  { id: "relac", label: "Relacionamento", color: "#c2410c", inv: true, qs: [
      "relacao_assedio_verbal",
      "relacao_atrito",
      "relacao_constrangimento",
      "relacao_tensao",
    ]
  },
  { id: "cargo", label: "Cargo", color: "#0369a1", inv: false, qs: [
      "cargo_clareza_expectativas",
      "cargo_execucao",
      "cargo_responsabilidades",
      "cargo_metas_setor",
      "cargo_integracao",
    ]
  },
  { id: "mudanca", label: "Mudança", color: "#b45309", inv: false, qs: [
      "mudanca_questionamento",
      "mudanca_consulta",
      "mudanca_esclarecimento",
    ]
  },
];

const getRiskLabel = (score, inv) => {
  if (inv) {
    if (score >= 3.1) return { label: "Alto", cls: "risk-alto" };
    if (score >= 2.1) return { label: "Moderado", cls: "risk-mod" };
    if (score >= 1.1) return { label: "Médio", cls: "risk-medio" };
    return { label: "Baixo", cls: "risk-baixo" };
  }

  if (score <= 1) return { label: "Alto", cls: "risk-alto" };
  if (score <= 2) return { label: "Moderado", cls: "risk-mod" };
  if (score <= 3) return { label: "Médio", cls: "risk-medio" };
  return { label: "Baixo", cls: "risk-baixo" };
};

const Dashboard = () => {
  const [responses, setResponses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedQuestions, setExpandedQuestions] = useState([]);
  const pieRef = useRef(null);
  const pieChartRef = useRef(null);

  const OPTION_LABELS = {
    0: "Nunca",
    1: "Raramente",
    2: "Às vezes",
    3: "Frequentemente",
    4: "Sempre",
  };

  const toggleQuestionDetails = (id) => {
    setExpandedQuestions((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  useEffect(() => {
    const fetchResponses = async () => {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error(`Erro ao carregar respostas: ${res.status}`);
        const data = await res.json();
        setResponses(Array.isArray(data) ? data : []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchResponses();
  }, []);

  const questionStats = QUESTIONS.map((question) => {
    let sum = 0;
    let count = 0;
    const optionCounts = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 };

    responses.forEach((response) => {
      const value = response.respostas?.[question.id];
      if (typeof value === "number") {
        sum += value;
        count += 1;
        optionCounts[value] += 1;
      }
    });

    const average = count > 0 ? sum / count : 0;
    const category = CATS.find((cat) => cat.id === question.category);
    const risk = getRiskLabel(average, category?.inv ?? false);

    return {
      ...question,
      average,
      count,
      risk,
      categoryLabel: category?.label || "",
      optionCounts,
    };
  });

  const catScores = CATS.map((cat) => {
    let sum = 0;
    let count = 0;

    responses.forEach((response) => {
      cat.qs.forEach((questionId) => {
        const answer = response.respostas?.[questionId];
        if (typeof answer === "number") {
          sum += answer;
          count += 1;
        }
      });
    });

    return {
      ...cat,
      average: count > 0 ? sum / count : 0,
      totalRisk: sum,
      count,
    };
  });

  useEffect(() => {
    if (!pieRef.current) return;
    if (pieChartRef.current) pieChartRef.current.destroy();

    pieChartRef.current = new Chart(pieRef.current, {
      type: "pie",
      data: {
        labels: catScores.map((cat) => cat.label),
        datasets: [
          {
            data: catScores.map((cat) => cat.totalRisk),
            backgroundColor: catScores.map((cat) => cat.color),
            borderColor: "#fff",
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "bottom",
            labels: { boxWidth: 12, usePointStyle: true },
          },
        },
      },
    });

    return () => {
      if (pieChartRef.current) pieChartRef.current.destroy();
    };
  }, [catScores]);

  const totalResponses = responses.length;
  const latestResponse = responses
    .map((item) => item.createdAt || item.ts)
    .filter(Boolean)
    .sort()
    .reverse()[0];

  const formatDate = (value) => {
    if (!value) return "—";
    const date = new Date(value);
    return isNaN(date.getTime()) ? "—" : date.toLocaleDateString("pt-BR");
  };

  const countByField = (field) => {
    return responses.reduce((acc, item) => {
      const value = item.perfil?.[field] || item.perfil?.[`f-${field}`] || item[field] || "Não informado";
      acc[value] = (acc[value] || 0) + 1;
      return acc;
    }, {});
  };

  const perfilFields = [
    { key: "sexo", label: "Sexo" },
    { key: "idade", label: "Faixa etária" },
    { key: "grupo", label: "Grupo de trabalho" },
    { key: "turno", label: "Turno" },
  ];

  return (
    <div>
      <div id="dash-content">
        <div className="metrics">
          <div className="metric">
            <div className="mlabel">Respostas</div>
            <div className="mval">{loading ? "..." : totalResponses}</div>
            <div className="msub">colaboradores</div>
          </div>
          <div className="metric">
            <div className="mlabel">Última resposta</div>
            <div className="mval" style={{ fontSize: "14px" }}>
              {loading ? "..." : formatDate(latestResponse)}
            </div>
          </div>
          <div className="metric">
            <div className="mlabel">Respostas totais</div>
            <div className="mval">
              {loading ? "..." : responses.reduce((sum, item) => sum + Object.keys(item.respostas || {}).length, 0)}
            </div>
            <div className="msub">itens de pergunta</div>
          </div>
          <div className="metric">
            <div className="mlabel">Fonte de dados</div>
            <div className="mval">JSON Server</div>
            <div className="msub">{API_URL}</div>
          </div>
        </div>

        {error && (
          <div className="card" style={{ borderColor: "#f87171", color: "#b91c1c" }}>
            Erro ao carregar o dashboard: {error}
          </div>
        )}

        <div className="chart-card">
          <div className="chart-title">Distribuição de risco por categoria</div>
          <div style={{ position: "relative", width: "100%", height: "320px" }}>
            <canvas ref={pieRef} role="img" aria-label="Distribuição de risco por categoria"></canvas>
          </div>
        </div>

        <div className="chart-card">
          <div className="chart-title">Análise por enunciado de questão</div>
          <div style={{ display: "grid", gap: "10px" }}>
            {loading ? (
              <div>Carregando dados das questões...</div>
            ) : questionStats.length === 0 ? (
              <div className="no-data">Nenhuma questão encontrada.</div>
            ) : (
              questionStats.map((question) => {
                const isOpen = expandedQuestions.includes(question.id);
                return (
                  <div key={question.id} className="card" style={{ padding: "14px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                      <div>
                        <strong style={{ fontSize: "13px" }}>{question.number}. {question.text}</strong>
                        <div style={{ fontSize: "11px", color: "var(--color-text-secondary)" }}>Categoria: {question.categoryLabel}</div>
                      </div>
                      <span className={`risk-badge ${question.risk.cls}`} style={{ marginLeft: "auto" }}>{question.risk.label}</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "10px", gap: "12px", fontSize: "12px", color: "var(--color-text-secondary)" }}>
                      <span>Média: {question.average.toFixed(2)}</span>
                      <span>{question.count} resposta{question.count === 1 ? "" : "s"}</span>
                      <button
                        type="button"
                        onClick={() => toggleQuestionDetails(question.id)}
                        style={{
                          border: "1px solid var(--color-border-secondary)",
                          borderRadius: "999px",
                          padding: "4px 10px",
                          background: isOpen ? "var(--color-background-secondary)" : "transparent",
                          cursor: "pointer",
                          fontSize: "12px",
                          color: "var(--color-text)"
                        }}
                      >
                        {isOpen ? "Ocultar detalhes" : "Ver opções"}
                      </button>
                    </div>
                    {isOpen && (
                      <div style={{ marginTop: "12px", padding: "12px", borderRadius: "12px", background: "rgba(15, 23, 42, 0.05)", border: "1px solid var(--color-border-secondary)" }}>
                        <div style={{ fontSize: "12px", fontWeight: 600, marginBottom: "8px" }}>Contagem por opção</div>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "8px" }}>
                          {Object.entries(question.optionCounts).map(([value, count]) => (
                            <div key={value} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px", borderRadius: "10px", background: "white", border: "1px solid rgba(148, 163, 184, 0.3)" }}>
                              <span style={{ fontSize: "12px" }}>{OPTION_LABELS[value]}</span>
                              <strong style={{ fontSize: "12px" }}>{count}</strong>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>

        <div className="chart-card">
          <div className="chart-title">Principais informações do perfil</div>
          <div style={{ display: "grid", gap: "14px" }}>
            {perfilFields.map(({ key, label }) => {
              const counts = countByField(key);
              return (
                <div key={key} className="card" style={{ padding: "14px" }}>
                  <div style={{ fontSize: "13px", fontWeight: 500, marginBottom: "10px" }}>{label}</div>
                  <div style={{ display: "grid", gap: "6px" }}>
                    {Object.entries(counts).map(([value, count]) => (
                      <div key={value} style={{ display: "flex", justifyContent: "space-between", fontSize: "12px" }}>
                        <span>{value}</span>
                        <strong>{count}</strong>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="chart-card">
          <div className="chart-title">Últimas respostas</div>
          <div style={{ display: "grid", gap: "12px" }}>
            {loading ? (
              <div>Carregando...</div>
            ) : totalResponses === 0 ? (
              <div className="no-data">Nenhuma resposta encontrada no banco de dados.</div>
            ) : (
              responses
                .slice(-5)
                .reverse()
                .map((item) => (
                  <div key={item.id || item.ts || Math.random()} style={{ border: "1px solid var(--color-border-secondary)", borderRadius: "12px", padding: "12px", background: "var(--color-background-secondary)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", fontSize: "12px", color: "var(--color-text-secondary)" }}>
                      <span>{formatDate(item.createdAt || item.ts)}</span>
                      <span>{Object.keys(item.respostas || {}).length} respostas</span>
                    </div>
                    <div style={{ fontSize: "13px" }}>
                      {item.perfil?.["f-sexo"] ? `Sexo: ${item.perfil["f-sexo"]}` : "Sexo: não informado"}
                      <br />
                      {item.perfil?.["f-grupo"] ? `Grupo: ${item.perfil["f-grupo"]}` : "Grupo: não informado"}
                    </div>
                  </div>
                ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;