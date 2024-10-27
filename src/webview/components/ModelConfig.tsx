import React from 'react';

export const ModelConfig: React.FC = () => {
  return (
    <div className="model-config">
      <h2>LLM Configuration</h2>
      <div className="model-selection">
        <h3>Available Models</h3>
        <select>
          <option value="gpt4">GPT-4</option>
          <option value="gpt35">GPT-3.5 Turbo</option>
          <option value="codex">Codex</option>
        </select>
      </div>
      <div className="parameters">
        <h3>Model Parameters</h3>
        {/* TODO: Implement parameter configuration UI */}
        <div>Parameter controls will be displayed here</div>
      </div>
    </div>
  );
};