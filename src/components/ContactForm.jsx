import React from "react";

export default function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="form-section">
      <div className="form-container">
        <div className="form-header">
          <h2>Have Questions About Planetary Science?</h2>
          <p>
            Interested in learning more about space, astronomy, or how planetary data is collected and analyzed? 
            Reach out and we'll get back to you.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="input-group">
            <label>Full Name<span className="required">*</span></label>
            <input type="text" placeholder="Full name" required />
          </div>

          <div className="input-group">
            <label>Email<span className="required">*</span></label>
            <input type="email" placeholder="example@example.com" required />
          </div>

          <div className="input-group">
            <label>Phone Number<span className="required">*</span></label>
            <input type="tel" placeholder="Please enter a valid phone number." required />
          </div>

          <div className="input-group">
            <label>Message<span className="required">*</span></label>
            <textarea placeholder="Enter your message" required></textarea>
            <span className="char-count">100 characters</span>
          </div>

          <div className="form-submit-container">
            <button type="submit" className="submit-btn">
              Submit 
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}