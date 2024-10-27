import React, { useState } from 'react';

export const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant', content: string }>>([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [
      ...messages,
      { role: 'user' as const, content: input }
    ];
    setMessages(newMessages);
    setInput('');

    // TODO: Implement actual AI chat integration
    const response = { role: 'assistant' as const, content: 'This is a placeholder response.' };
    setMessages([...newMessages, response]);
  };

  return (
    <div className="chat">
      <div className="messages">
        {messages.map((msg, i) => (
          <div key={i} className={`message ${msg.role}`}>
            {msg.content}
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Ask me anything..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};