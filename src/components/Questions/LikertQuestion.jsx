import React from "react";

const options = [
  { value: 0, label: "Nunca" },
  { value: 1, label: "Raramente" },
  { value: 2, label: "Às vezes" },
  { value: 3, label: "Frequentemente" },
  { value: 4, label: "Sempre" },
];

const LikertQuestion = ({ id, text, formData, setFormData }) => {
  const currentAnswer = formData.respostas?.[id];
  const isAnswered = currentAnswer !== undefined && currentAnswer !== null;

  const handleChange = (value) => {
    if (isAnswered) return;

    setFormData((prev) => ({
      ...prev,
      respostas: {
        ...prev.respostas,
        [id]: Number(value),
      },
    }));
  };

  const normalizedAnswer = currentAnswer === undefined ? null : String(currentAnswer);

  return (
    <div className="open-q">
      <p className="q-text">
        {text}
      </p>

      <div className="likert">
        {options.map((opt) => (
          <label key={opt.value}>
            <input
              type="radio"
              name={id}
              value={opt.value}
              checked={normalizedAnswer === String(opt.value)}
              disabled={isAnswered}
              onChange={() => handleChange(opt.value)}
            />

            <div className="likert-opt">
              <span className="opt-num">{opt.value}</span>
              <span className="opt-label">{opt.label}</span>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

export default LikertQuestion;