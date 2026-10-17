import { useState } from "react";
import "./App.css";

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(null);

  const topics = [
    {
      title: "Mathematics",
      icon: "📐",
      description: "Learn mathematics with simple examples.",
    },
    {
      title: "Science",
      icon: "🔬",
      description: "Understand science concepts easily.",
    },
    {
      title: "Computer Science",
      icon: "💻",
      description: "Explore coding and computer basics.",
    },
  ];

  const quizOptions = [
    "Quality Education",
    "Clean Water",
    "Climate Action",
    "Zero Hunger",
  ];

  function askQuestion() {
    if (!question.trim()) {
      setAnswer("Please enter a question first.");
      return;
    }

    const q = question.toLowerCase();

    if (q.includes("photosynthesis")) {
      setAnswer(
        "Photosynthesis is the process by which green plants use sunlight, water, and carbon dioxide to make their food. Oxygen is released during this process."
      );
    } else if (q.includes("computer")) {
      setAnswer(
        "A computer is an electronic device that accepts data, processes it, stores information, and produces output."
      );
    } else if (q.includes("math") || q.includes("addition")) {
      setAnswer(
        "Mathematics helps us solve numerical problems. For example, 5 + 3 = 8. Try solving small problems step by step."
      );
    } else {
      setAnswer(
        "This is a demo learning assistant. Try asking about photosynthesis, computers, or mathematics. Actual AI integration can be added later."
      );
    }
  }

  function submitQuiz() {
    if (selected === null) {
      alert("Please select an answer first!");
      return;
    }

    setScore(selected === 0 ? 1 : 0);
  }

  return (
    <div className="app">
      <header className="navbar">
        <a href="#home" className="logo">
          EduBridge<span>AI</span>
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#learn">Learn</a>
          <a href="#assistant">AI Assistant</a>
          <a href="#quiz">Quiz</a>
        </nav>

        <a href="#learn" className="nav-button">
          Start Learning
        </a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="tag">🎓 SDG 4 · QUALITY EDUCATION</p>

            <h1>
              Education for Everyone.
              <span> Learning Without Limits.</span>
            </h1>

            <p className="hero-description">
              Learn at your own pace with simple explanations, interactive
              quizzes, and a student-friendly learning experience.
            </p>

            <div className="hero-buttons">
              <a href="#learn" className="primary-button">
                Explore Learning →
              </a>

              <a href="#assistant" className="secondary-button">
                Try Learning Assistant
              </a>
            </div>

            <div className="hero-note">
              🌍 Making quality learning more accessible to everyone.
            </div>
          </div>

          <div className="hero-card">
            <div className="book-icon">📚</div>
            <h2>Your Learning Journey</h2>
            <p>Small steps today. A brighter future tomorrow.</p>

            <div className="progress-label">
              <span>Learning progress</span>
              <span>75%</span>
            </div>

            <div className="progress-bar">
              <div></div>
            </div>

            <div className="mini-cards">
              <div>
                <span>🧠</span>
                <p>Learn</p>
              </div>
              <div>
                <span>✍️</span>
                <p>Practice</p>
              </div>
              <div>
                <span>🏆</span>
                <p>Improve</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="learn">
          <div className="section-heading">
            <p className="tag">LEARN SOMETHING NEW</p>
            <h2>Explore Learning Topics</h2>
            <p>Choose a subject and start building your knowledge.</p>
          </div>

          <div className="topic-grid">
            {topics.map((topic) => (
              <article className="topic-card" key={topic.title}>
                <div className="topic-icon">{topic.icon}</div>
                <h3>{topic.title}</h3>
                <p>{topic.description}</p>
                <a href="#assistant">Start learning →</a>
              </article>
            ))}
          </div>
        </section>

        <section className="assistant-section" id="assistant">
          <div className="assistant-info">
            <p className="tag">YOUR LEARNING COMPANION</p>
            <h2>Meet Your Learning Assistant 🤖</h2>
            <p>
              Ask a question and get a simple explanation. This prototype
              currently uses prepared demo answers.
            </p>

            <ul>
              <li>✓ Easy-to-understand explanations</li>
              <li>✓ Student-friendly learning</li>
              <li>✓ Learn at your own pace</li>
            </ul>
          </div>

          <div className="assistant-box">
            <h3>💬 Ask a Question</h3>

            <label htmlFor="question">What do you want to learn today?</label>

            <textarea
              id="question"
              placeholder="Example: What is photosynthesis?"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />

            <button className="primary-button full-button" onClick={askQuestion}>
              Get Explanation
            </button>

            {answer && (
              <div className="answer-box">
                <strong>📖 Explanation</strong>
                <p>{answer}</p>
              </div>
            )}

            <p className="demo-note">
              Demo version · Actual AI is not connected yet.
            </p>
          </div>
        </section>

        <section className="section quiz-section" id="quiz">
          <div className="section-heading">
            <p className="tag">TEST YOUR KNOWLEDGE</p>
            <h2>Quick Learning Quiz 📝</h2>
            <p>Let's check your understanding of SDG 4.</p>
          </div>

          <div className="quiz-card">
            <h3>What is the main goal of SDG 4?</h3>

            <div className="options">
              {quizOptions.map((option, index) => (
                <button
                  key={option}
                  className={`option ${
                    selected === index ? "selected" : ""
                  }`}
                  onClick={() => {
                    setSelected(index);
                    setScore(null);
                  }}
                >
                  <span>{String.fromCharCode(65 + index)}</span>
                  {option}
                </button>
              ))}
            </div>

            <button
              className="primary-button"
              onClick={submitQuiz}
            >
              Submit Answer
            </button>

            {score !== null && (
              <div className="quiz-result">
                {score === 1
                  ? "🎉 Correct! SDG 4 promotes Quality Education."
                  : "❌ Not quite! The correct answer is Quality Education."}
              </div>
            )}
          </div>
        </section>

        <section className="impact-section">
          <p className="tag">OUR PURPOSE</p>
          <h2>Education Can Change the World.</h2>
          <p>
            EduBridgeAI aims to support SDG 4 by making learning simpler,
            more inclusive, and accessible to students.
          </p>
          <a href="#learn" className="primary-button">
            Start Your Journey →
          </a>
        </section>
      </main>

      <footer>
        <a href="#home" className="logo">
          EduBridge<span>AI</span>
        </a>
        <p>Supporting SDG 4: Quality Education 🌍</p>
        <p>© 2026 EduBridgeAI · Student Project Prototype</p>
      </footer>
    </div>
  );
}

export default App;