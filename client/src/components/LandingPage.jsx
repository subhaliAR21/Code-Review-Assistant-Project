// client/src/LandingPage.jsx
import React from 'react';

const features = [
    { title: "The Code Velocity Predictor", description: "Uses historical commit data and code complexity metrics (analyzed by AI) to forecast the estimated time to completion for open Pull Requests (PRs) and feature branches. Get an early warning if a feature is slowing down, allowing you to adjust deadlines and improve project predictability.", icon: '⏱️' },
    { title: "Cognitive Load Heatmap", description: "Analyzes the concentration of bug reports and frequent refactoring activity across the codebase, generating a visual 'heat map' that highlights areas of high cognitive load (i.e., parts of the code that are disproportionately hard to understand or maintain). Helps prioritize technical debt reduction efforts and identify modules that need better documentation or decomposition.", icon: '🧠' },
    { title: "AI Mentor for PR Feedback", description: "Instead of just flagging errors, the AI delivers feedback in a customizable 'mentor persona' (e.g., 'Skeptical Architect,' 'Encouraging Senior Dev,' 'Abrasive Tech Lead'). It not only explains what is wrong but provides multiple idiomatic code examples and links to relevant best-practice documentation (e.g., 'See PEP 8 guidelines for Python on this topic'). Provides educational, structured, and consistent feedback, accelerating your learning.", icon: '👨‍🏫' },
    { title: "Code Climate Fingerprinting (Style Drift Detection)", description: "Continuously monitors the entire repository to detect 'style drift'—instances where code formatting, variable naming conventions, or structural patterns deviate from the established norm or the initial project standard. Enforces codebase consistency, preventing the project from becoming a chaotic 'Franken-codebase' as it grows.", icon: '🔍' },
    { title: "AI Burnout Shield (Commit Pattern Analysis)", description: "The AI monitors your commit timestamps and activity spikes. If you show prolonged patterns of late-night, weekend, or excessive continuous commit activity, the 'Burnout Shield' alerts you privately. Proactively helps maintain your health and prevents burnout by identifying unsustainable work patterns.", icon: '🛡️' },
    { title: "AI-Powered Code Refactoring Assistant", description: "Scans the codebase to identify code smells, duplicated code, and areas ripe for refactoring. Provides automated suggestions for improvements, such as extracting methods, simplifying complex functions, or applying design patterns. Includes before/after code examples and impact analysis on maintainability and performance.", icon: '🔧' },
];


function LandingPage({ setCurrentPage }) {
  return (
    <>
      {/* Hero Section: Full background coverage */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>
            AI Powered Code Review. <br />
            <span>Instant Feedback</span>
          </h1>
          <p>
            Elevate code quality, automate analysis and review process, and streamline debugging using the power of Gemini AI.
          </p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => setCurrentPage('review')}>
              Start Code Review
            </button>
            <button className="btn-secondary">
              Explore Features
            </button>
          </div>
        </div>
      </section>

      {/* Features Section: Full background with centered content */}
      <section id="features" className="features-grid">
        <div className="content-wrapper">
          <h2>Features Designed for Modern Engineering Teams</h2>
          <div className="grid-container">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <span style={{ fontSize: '30px' }}>{feature.icon}</span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default LandingPage;