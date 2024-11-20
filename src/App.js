import React, { useEffect, useState } from "react";
import { FaTelegram, FaTwitter, FaGlobe } from "react-icons/fa";

function App() {
  const [text, setText] = useState("");
  const fullText = "$COSMOS On NEAR";
  const [typingIndex, setTypingIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);  // State to handle popup visibility

  // Typing effect logic
  useEffect(() => {
    if (typingIndex < fullText.length) {
      const timer = setTimeout(() => {
        setText((prev) => prev + fullText[typingIndex]);
        setTypingIndex((prev) => prev + 1);
      }, 100); // Typing speed
      return () => clearTimeout(timer);
    }
  }, [typingIndex]);

  // Function to handle button click
  const handleGameClick = () => {
    setShowPopup(true); // Show popup
  };

  // Function to handle closing the popup
  const closePopup = () => {
    setShowPopup(false); // Hide popup
  };

  return (
    <>
      <style>{`
        /* Global styles */
        body {
          margin: 0;
          padding: 0;
          font-family: "Arial", sans-serif;
          background-color: #181818; /* Dark background */
          color: #ffffff; /* White text */
        }

        .app {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100vh;
          position: relative;
        }

        /* Navbar */
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          background-color: #222222; /* Darker background for navbar */
          box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5);
        }

        .brand {
          font-size: 1.8rem;
          font-weight: bold;
          color: #00ff6e; /* Neon green */
        }

        .nav-links {
          list-style: none;
          display: flex;
          gap: 1.5rem;
        }

        .nav-links li a {
          text-decoration: none;
          color: #ffffff;
          font-size: 1rem;
          transition: color 0.3s ease;
        }

        .nav-links li a:hover {
          color: #00ff6e;
        }

        /* Hero Section */
        .hero {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 2rem;
        }

        .hero-text {
          max-width: 50%;
        }

        .typing-effect {
          font-size: 4rem;
          font-weight: bold;
          color: #00ff6e; /* Neon green */
          animation: fadeIn 1s ease-in-out;
        }

        .subtitle {
          margin-top: 1rem;
          font-size: 1.2rem;
          color: #aaaaaa; /* Subdued gray for subtitle */
        }

        .buttons {
          margin-top: 1.5rem;
          display: flex;
          gap: 1rem;
        }

        .action-btn {
          padding: 1rem 2rem;
          font-size: 1.2rem;
          border-radius: 5px;
          cursor: pointer;
          border: 2px solid #00ff6e;
          background-color: transparent;
          color: #00ff6e;
          transition: transform 0.3s ease, background-color 0.3s ease;
        }

        .action-btn:hover {
          background-color: #00ff6e;
          color: #181818;
          transform: scale(1.05);
        }

        .hero-image {
          width: 20%; /* Smaller image size */
          margin-left: -10%; /* Move image further left */
          margin-right: 10%; /* Leave space on the right */
          animation: float 3s ease-in-out infinite;
        }

        /* Animations */
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }

        /* Footer */
        .footer {
          padding: 1rem;
          text-align: center;
          background-color: #222222;
          color: #ffffff;
        }

        .social-links {
          margin-top: 1rem;
          display: flex;
          justify-content: center;
          gap: 1rem;
        }

        .social-links a {
          font-size: 1.5rem;
          color: #00ff6e;
          transition: transform 0.3s ease, color 0.3s ease;
        }

        .social-links a:hover {
          color: #ffffff;
          transform: scale(1.2);
        }

        /* Popup styles */
        .popup {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: rgba(0, 0, 0, 0.8);
          color: #00ff6e;
          padding: 2rem;
          border-radius: 10px;
          font-size: 1.5rem;
          font-family: "Courier New", Courier, monospace;
          text-align: center;
          width: 50%;
          box-shadow: 0px 0px 10px rgba(0, 255, 110, 0.7);
          animation: popupAnimation 0.5s ease-in-out;
        }

        .popup h2 {
          font-size: 2rem;
          font-weight: bold;
        }

        .close-btn {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background-color: transparent;
          border: none;
          color: #00ff6e;
          font-size: 1.5rem;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .close-btn:hover {
          color: #ffffff;
        }

        @keyframes popupAnimation {
          0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.8);
          }
          100% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }
      `}</style>

      <div className="app">
        {/* Navbar */}
        <nav className="navbar">
          <h1 className="brand">$COSMOS</h1>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#roadmap">Roadmap</a></li>
            <li><a href="#about">About Us</a></li>
          </ul>
        </nav>

        {/* Hero Section */}
        <header className="hero">
          <div className="hero-text">
            <h1 className="typing-effect">{text}</h1>
            <p className="subtitle">
              The next-gen $NEAR AI Narrative token expanding the horizons of NEAR Blockchain.
            </p>
            <div className="buttons">
              <a href="#" className="action-btn">Buy Now</a>
              <a href="#" onClick={handleGameClick} className="action-btn">Cosmos Game</a>
            </div>
          </div>
          <img
            src="https://pbs.twimg.com/profile_images/1859074824573718528/DvQYCaBY_400x400.jpg"
            alt="Cosmos Mascot"
            className="hero-image"
          />
        </header>

        {/* Popup Message */}
        {showPopup && (
          <div className="popup">
            <button className="close-btn" onClick={closePopup}>X</button>
            <h2>You dared to click on the game, your fingerprints are registered, stay tuned for the game</h2>
          </div>
        )}

        {/* Footer */}
        <footer className="footer">
          <p>Connect With Us</p>
          <div className="social-links">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaTelegram />
            </a>
            <a href="https://x.com/cosmosonnear" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
