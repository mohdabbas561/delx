import React, { useState, useEffect } from "react";
import "./styles.css";

function App() {
  const [totalScore, setTotalScore] = useState(0);
  const [tapEffectVisible, setTapEffectVisible] = useState(false);

  useEffect(() => {
    const storedScore = localStorage.getItem("totalScore");
    if (storedScore) {
      setTotalScore(Number(storedScore));
    }
  }, []);

  useEffect(() => {
    if (totalScore !== 0) {
      localStorage.setItem("totalScore", totalScore);
    }
  }, [totalScore]);

  const handleTap = () => {
    setTotalScore(prevScore => prevScore + 5);
    setTapEffectVisible(true);
    setTimeout(() => setTapEffectVisible(false), 500);
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="logo">$DELTAx</div>
        <nav className="navbar">
          <button className="connect-wallet-button">
            Connect Wallet
          </button>
        </nav>
      </header>

      {/* Total Score */}
      <div className="total-score">Total Score: {totalScore}</div>

      {/* Main Section */}
      <main className="main">
        <div className="left-section">
          <div className="coming-soon">
            <span className="typing">COMING SOON ON $NEAR</span>
          </div>
        </div>

        <div className="right-section">
          <div className="center">
            <button
              className="circle-button"
              onClick={handleTap}
              onMouseDown={(e) => e.target.classList.add("active")}
              onMouseUp={(e) => e.target.classList.remove("active")}
            >
              TAP ME
              {tapEffectVisible && (
                <div id="tapEffect" className="tap-effect">
                  +5
                </div>
              )}
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <a href="https://x.com/deltaxonnear" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        <a href="https://t.me/deltaxonnear" target="_blank" rel="noopener noreferrer">
          Telegram
        </a>
      </footer>
    </div>
  );
}

export default App;
