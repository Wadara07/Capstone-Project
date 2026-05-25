import React from "react";

export default function VideoSection() {
  return (
    <section className="info-section">
      <div className="info-container">
        
        {/* Left Side: Video/Image Thumbnail Container */}
        <div className="video-wrapper">
          <img 
            src="/video.png" 
            alt="Planetary data interface" 
            className="thumbnail-img"
          />
          {/* Play Button Overlay */}
          <button className="play-btn" aria-label="Play Video">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </button>
        </div>

        {/* Right Side: Text Content */}
        <div className="info-text">
          <h2>How Planetary Data Helps Us<br />Understand Space</h2>
          <p>
            Planetary science goes beyond images. Comparing{" "}
            <span className="highlight">mass</span>,{" "}
            <span className="highlight">diameter</span>,{" "}
            <span className="highlight">gravity</span>, and{" "}
            <span className="highlight">density</span>, we gain insight into how
            planets form, behave, and interact within the solar system.
          </p>
        </div>

      </div>
    </section>
  );
}