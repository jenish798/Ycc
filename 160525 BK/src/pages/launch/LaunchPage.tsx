import React, { useState, useEffect } from "react";
import "./LaunchPage.css"; // Custom CSS

const LaunchPage = () => {
  const [countdown, setCountdown] = useState(60); // countdown in seconds
  const [showStart, setShowStart] = useState(false);
  const [codeEntered, setCodeEntered] = useState("");
  const [launching, setLaunching] = useState(false);
  const [error, setError] = useState("");

  const CORRECT_CODE = "1234"; // Set your launch code here

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setShowStart(true);
    }
  }, [countdown]);

  const handleLaunch = () => {
    if (codeEntered === CORRECT_CODE) {
      setLaunching(true);
      setTimeout(() => {
        window.location.href = "/home"; // Change to your main site's path
      }, 1000);
    } else {
      setError("Incorrect code. Please try again.");
    }
  };

  return (
    <div className="launch-page">
      <div className="content">
        <h1 className="title">🍛 Welcome to Yatra's Cooking Cave 🍛</h1>
        {!showStart ? (
          <h2 className="counter">Launching in {countdown} seconds...</h2>
        ) : (
          <>
            <button className="start-btn" onClick={() => setLaunching(true)}>
              START
            </button>
            {launching && (
              <div className="code-box">
                <input
                  type="password"
                  placeholder="Enter launch code"
                  value={codeEntered}
                  onChange={(e) => setCodeEntered(e.target.value)}
                />
                <button onClick={handleLaunch}>Launch</button>
                {error && <p className="error">{error}</p>}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default LaunchPage;
