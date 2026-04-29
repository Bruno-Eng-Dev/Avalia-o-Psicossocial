import React from "react";
import LikertQuestion from "./LikertQuestion";
import "./Questoes.css"

const QuestoesHSEIT = ({ formData, setFormData }) => {
  return (
    <div>

            {/* ================= DEMANDAS ================= */}
      <section className="cat-section cat-demanda">
        <h3>⚡ Demandas</h3>

        <LikertQuestion
          id="demanda_conflito_grupos"
          number={1}
          text="No trabalho, diferentes grupos exigem de mim coisas difíceis de conciliar."
          formData={formData}
          setFormData={setFormData}
        />

        <LikertQuestion
          id="demanda_prazos_impossiveis"
          number={2}
          text="Tenho prazos impossíveis de serem cumpridos."
          formData={formData}
          setFormData={setFormData}
        />

        <LikertQuestion
          id="demanda_intensidade_trabalho"
          number={3}
          text="Tenho que trabalhar muito intensamente."
          formData={formData}
          setFormData={setFormData}
        />

        <LikertQuestion
          id="demanda_sobrecarga_tarefas"
          number={4}
          text="Preciso deixar de lado algumas tarefas porque tenho coisas demais para fazer."
          formData={formData}
          setFormData={setFormData}
        />

        <LikertQuestion
          id="demanda_falta_pausas"
          number={5}
          text="Não consigo fazer pausas suficientes."
          formData={formData}
          setFormData={setFormData}
        />

        <LikertQuestion
          id="demanda_pressao_longos_periodos"
          number={6}
          text="Sou pressionado para trabalhar por longos períodos."
          formData={formData}
          setFormData={setFormData}
        />

        <LikertQuestion
          id="demanda_trabalho_rapido"
          number={7}
          text="Tenho que trabalhar muito rápido."
          formData={formData}
          setFormData={setFormData}
        />

        <LikertQuestion
          id="demanda_pressao_tempo"
          number={8}
          text="Sofro pressões de tempo absurdas."
          formData={formData}
          setFormData={setFormData}
        />
      </section>

      {/* ================= CONTROLE ================= */}
      <section className="cat-section cat-controle">
        <h3>🎛️ Controle</h3>

        <LikertQuestion
          id="controle_pausa_decisao"
          number={9}
          text="Posso decidir quando fazer uma pausa."
          formData={formData}
          setFormData={setFormData}
        />

        <LikertQuestion
          id="controle_ritmo_trabalho"
          number={10}
          text="Posso decidir sobre meu ritmo de trabalho."
          formData={formData}
          setFormData={setFormData}
        />

        <LikertQuestion
          id="controle_metodo_trabalho"
          number={11}
          text="Posso escolher como fazer meu trabalho."
          formData={formData}
          setFormData={setFormData}
        />

        <LikertQuestion
          id="controle_tarefas_decisao"
          number={12}
          text="Posso escolher o que fazer no trabalho."
          formData={formData}
          setFormData={setFormData}
        />

        <LikertQuestion
          id="controle_autonomia_execucao"
          number={13}
          text="Tenho poder de decisão sobre minha maneira de trabalhar."
          formData={formData}
          setFormData={setFormData}
        />

        <LikertQuestion
          id="controle_flexibilidade_horario"
          number={14}
          text="Meu horário de trabalho pode ser flexível."
          formData={formData}
          setFormData={setFormData}
        />
      </section>

      {/* ================= CHEFIA ================= */}
      <section className="cat-section cat-chefia">
        <h3>👔 Apoio da Chefia</h3>

        <LikertQuestion
          id="chefia_feedback_retorno"
          number={15}
          text="Recebo retorno sobre os trabalhos que realizo."
          formData={formData}
          setFormData={setFormData}
        />

        <LikertQuestion
          id="chefia_apoio_problemas"
          number={16}
          text="Posso contar com ajuda do meu chefe imediato."
          formData={formData}
          setFormData={setFormData}
        />

        <LikertQuestion
          id="chefia_comunicacao_problemas"
          number={17}
          text="Posso falar com meu chefe sobre algo que me incomodou."
          formData={formData}
          setFormData={setFormData}
        />

        <LikertQuestion
          id="chefia_apoio_emocional"
          number={18}
          text="Recebo apoio em situações emocionalmente desgastantes."
          formData={formData}
          setFormData={setFormData}
        />

        <LikertQuestion
          id="chefia_motivacao"
          number={19}
          text="Meu chefe imediato me motiva no trabalho."
          formData={formData}
          setFormData={setFormData}
        />
      </section>

      {/* ================= COLEGAS ================= */}
      <section className="cat-section cat-colegas">
        <h3>🤝 Apoio dos Colegas</h3>

        <LikertQuestion
          id="colegas_ajuda_dificuldade"
          number={20}
          text="Meus colegas me ajudam quando o trabalho fica difícil."
          formData={formData}
          setFormData={setFormData}
        />

        <LikertQuestion
          id="colegas_apoio"
          number={21}
          text="Recebo ajuda e apoio dos meus colegas."
          formData={formData}
          setFormData={setFormData}
        />

        <LikertQuestion
          id="colegas_respeito"
          number={22}
          text="Sou respeitado pelos meus colegas."
          formData={formData}
          setFormData={setFormData}
        />

        <LikertQuestion
          id="colegas_escuta_problemas"
          number={23}
          text="Meus colegas ouvem meus problemas de trabalho."
          formData={formData}
          setFormData={setFormData}
        />
      </section>

      {/* ================= RELACIONAMENTO ================= */}
      <section className="cat-section cat-relac">
        <h3>⚠️ Relacionamento</h3>

        <LikertQuestion
          id="relacao_assedio_verbal"
          number={24}
          text="Estou sujeito a assédio verbal ou comportamental."
          formData={formData}
          setFormData={setFormData}
        />

        <LikertQuestion
          id="relacao_atrito"
          number={25}
          text="Existe atrito entre colegas de trabalho."
          formData={formData}
          setFormData={setFormData}
        />

        <LikertQuestion
          id="relacao_constrangimento"
          number={26}
          text="Estou sujeito a constrangimentos no trabalho."
          formData={formData}
          setFormData={setFormData}
        />

        <LikertQuestion
          id="relacao_tensao"
          number={27}
          text="Os relacionamentos no trabalho são tensos."
          formData={formData}
          setFormData={setFormData}
        />
      </section>

      {/* ================= CARGO ================= */}
      <section className="cat-section cat-cargo">
        <h3>📋 Cargo</h3>

        <LikertQuestion
          id="cargo_clareza_expectativas"
          number={28}
          text="Sei claramente o que é esperado de mim."
          formData={formData}
          setFormData={setFormData}
        />

        <LikertQuestion
          id="cargo_execucao"
          number={29}
          text="Sei como executar meu trabalho."
          formData={formData}
          setFormData={setFormData}
        />

        <LikertQuestion
          id="cargo_responsabilidades"
          number={30}
          text="Sei minhas responsabilidades."
          formData={formData}
          setFormData={setFormData}
        />

        <LikertQuestion
          id="cargo_metas_setor"
          number={31}
          text="Conheço as metas do meu setor."
          formData={formData}
          setFormData={setFormData}
        />

        <LikertQuestion
          id="cargo_integracao"
          number={32}
          text="Entendo como meu trabalho se integra à organização."
          formData={formData}
          setFormData={setFormData}
        />
      </section>

      {/* ================= MUDANÇA ================= */}
      <section className="cat-section cat-mudanca">
        <h3>🔄 Mudança</h3>

        <LikertQuestion
          id="mudanca_questionamento"
          number={33}
          text="Posso questionar mudanças no trabalho."
          formData={formData}
          setFormData={setFormData}
        />

        <LikertQuestion
          id="mudanca_consulta"
          number={34}
          text="A equipe é consultada sobre mudanças."
          formData={formData}
          setFormData={setFormData}
        />

        <LikertQuestion
          id="mudanca_esclarecimento"
          number={35}
          text="Sou esclarecido sobre mudanças na prática."
          formData={formData}
          setFormData={setFormData}
        />

        
      </section>

  {/* =====================================================
         QUESTÕES ABERTAS (AGORA NO MESMO FLUXO)
      ===================================================== */}

      <section className="open-section">

        <div className="open-header">
          💬 Percepções Complementares
          <span className="optional">(opcional)</span>
        </div>

        {/* Q36 */}
        <div className="open-q">
          <p>
            <span className="q-num">36</span>
            Descreva aspectos do seu trabalho que contribuem para o <strong>bem-estar</strong>:
          </p>

          <textarea
            placeholder="Escreva aqui…"
            value={formData?.abertas?.bem_estar || ""}
            onChange={(e) => handleOpenChange("bem_estar", e.target.value)}
          />
        </div>

        {/* Q37 */}
        <div className="open-q">
          <p>
            <span className="q-num">37</span>
            O que mais gera <strong>estresse ou desconforto</strong> no trabalho?
          </p>

          <textarea
            placeholder="Escreva aqui…"
            value={formData?.abertas?.estresse || ""}
            onChange={(e) => handleOpenChange("estresse", e.target.value)}
          />
        </div>

        {/* Q38 */}
        <div className="open-q">
          <p>
            <span className="q-num">38</span>
            Que melhorias poderiam ser feitas para a <strong>saúde mental</strong>?
          </p>

          <textarea
            placeholder="Escreva aqui…"
            value={formData?.abertas?.melhorias || ""}
            onChange={(e) => handleOpenChange("melhorias", e.target.value)}
          />
        </div>

      </section>

    </div>
  );
};

export default QuestoesHSEIT;