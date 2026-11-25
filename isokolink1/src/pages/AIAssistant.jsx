import { useState } from "react";
import { Bot, Send } from "lucide-react";

function AIAssistant() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hello! Welcome to IsokoLink Agri Assistant. Ask me about crops, farming or agricultural markets."
    }
  ]);

  function sendMessage(e) {
    e.preventDefault();

    if (!question.trim()) return;

    const userQuestion = question.toLowerCase();
    let response;

    if (userQuestion.includes("tomato")) {
      response = "Tomatoes need suitable soil, sunlight and regular watering. Monitor plants for common pests and diseases.";
    } else if (userQuestion.includes("bean")) {
      response = "Beans need suitable soil and good drainage. Choose healthy seeds and follow local planting guidance.";
    } else if (userQuestion.includes("potato")) {
      response = "Potatoes grow best in suitable, well-drained soil. Use healthy planting material.";
    } else if (
      userQuestion.includes("price") ||
      userQuestion.includes("market")
    ) {
      response = "Compare current prices from different buyers and local markets before selling your products.";
    } else {
      response = "Thank you for your question! I can provide basic information about vegetables, fruits, beans, potatoes and agricultural markets.";
    }

    setMessages((previous) => [
      ...previous,
      { type: "user", text: question },
      { type: "bot", text: response }
    ]);

    setQuestion("");
  }

  return (
    <section className="ai-section">
      <div className="ai-header">
        <Bot size={45} />
        <h1>IsokoLink Agri Assistant</h1>
        <p>Your agricultural information assistant.</p>
      </div>

      <div className="chat-container">
        <div className="chat-messages">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`chat-message ${message.type}`}
            >
              {message.text}
            </div>
          ))}
        </div>

        <form className="chat-form" onSubmit={sendMessage}>
          <input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask about farming..."
          />

          <button type="submit" aria-label="Send message">
            <Send />
          </button>
        </form>

        <p className="demo-note">
          This is a demonstration assistant using predefined answers.
        </p>
      </div>
    </section>
  );
}

export default AIAssistant;