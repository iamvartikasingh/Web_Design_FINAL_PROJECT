import React, { useState } from "react";

const ChatWithTherapist = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (message) {
      setMessages([...messages, message]);
      setMessage("");
    }
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">Chat with Therapist</h5>
        <ul className="list-group mb-3">
          {messages.map((msg, index) => (
            <li className="list-group-item" key={index}>
              {msg}
            </li>
          ))}
        </ul>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Type your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWithTherapist;
