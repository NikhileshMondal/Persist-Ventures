import React from "react";
import "./styles.css";
// import buddhaImage from "./buddha.jpg";

function App() {
  return (
    <div>
      <nav>
        <ul className="navbar">
          <li>Home</li>
          <li>About</li>
          <li>Teachings</li>
          <li>Practices</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="image-container">
        <img
          src="https://images.unsplash.com/photo-1640762173501-b3bf25be849c?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=4800"
          alt="Buddha"
        />
      </div>
      <section>
        <h2>Thesis</h2>
        <p>
          Effective Buddhism is a practical approach to living a happy,
          fulfilling life based on the teachings of the Buddha. It emphasizes
          the importance of understanding the nature of the mind and the nature
          of reality, and using this understanding to develop wisdom and
          compassion.
        </p>
      </section>
      <section>
        <h2>Evidence</h2>
        <p>
          Numerous studies have shown that the practice of mindfulness
          meditation, a key aspect of Effective Buddhism, can lead to
          significant improvements in mental and physical health. Studies have
          also shown that the practice of loving-kindness meditation, another
          key aspect of Effective Buddhism, can increase feelings of compassion
          and connection to others.
        </p>
      </section>
      <section>
        <h2>Reiterating the Message</h2>
        <p>
          The core message of Effective Buddhism is that true happiness and
          fulfillment come from within. By developing wisdom and compassion
          through the practice of mindfulness and loving-kindness meditation, we
          can overcome negative emotions and cultivate a sense of inner peace
          and well-being.
        </p>
      </section>
      <section>
        <h2>Source Links</h2>
        <ul className="source-links">
          <li>
            <a href="https://www.buddhanet.net/">Buddhanet</a>
          </li>
          <li>
            <a href="https://www.accesstoinsight.org/">Access to Insight</a>
          </li>
          <li>
            <a href="https://tricycle.org/">Tricycle</a>
          </li>
          <li>
            <a href="https://www.lionsroar.com/">Lion's Roar</a>
          </li>
          <li>
            <a href="https://www.dharma.org/">Insight Meditation Society</a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default App;
