import React, { useState } from 'react';
import { ProjectExplorer } from './ProjectExplorer';
import { Chat } from './Chat';
import { TestPanel } from './TestPanel';
import { ModelConfig } from './ModelConfig';

export const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('explorer');

  return (
    <div className="dashboard">
      <nav className="tabs">
        <button onClick={() => setActiveTab('explorer')}>Project Explorer</button>
        <button onClick={() => setActiveTab('chat')}>AI Chat</button>
        <button onClick={() => setActiveTab('tests')}>Tests</button>
        <button onClick={() => setActiveTab('config')}>LLM Config</button>
      </nav>

      <main className="content">
        {activeTab === 'explorer' && <ProjectExplorer />}
        {activeTab === 'chat' && <Chat />}
        {activeTab === 'tests' && <TestPanel />}
        {activeTab === 'config' && <ModelConfig />}
      </main>
    </div>
  );
};