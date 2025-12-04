// client/src/CodeReviewTool.jsx (The core functional component)
import React, { useState } from 'react';

function CodeReviewTool() {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('JavaScript');
  const [review, setReview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setIsLoading(true); 
    setReview(null);    
    setError(null);     

    try {
        const response = await fetch('/api/review', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ code, language }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Failed to fetch review from server.');
        }

        const data = await response.json();
        
        setReview(data.review.replace(/\n/g, '<br>')); 

    } catch (err) {
        console.error('Frontend Fetch Error:', err);
        setError(err.message);
        
    } finally {
        setIsLoading(false); 
    }
  };

  return (
    <div className="code-review-page">
      <h1 style={{textAlign: 'center', marginBottom: '30px'}}>AI Code Review Tool 🤖</h1>
      <form onSubmit={handleSubmit} className="code-review-form">
        
        <div className="language-selector">
            <label htmlFor="language" style={{ marginRight: '10px', fontWeight: 'bold' }}>Code Language:</label>
            <select
                id="language"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                disabled={isLoading}
            >
                <option value="JavaScript">JavaScript</option>
                <option value="Python">Python</option>
                <option value="Java">Java</option>
                <option value="React">React/JSX</option>
                <option value="Other">Other</option>
            </select>
        </div>
        
        <textarea
          placeholder="Paste your code here..."
          value={code}
          onChange={(e) => setCode(e.target.value)}
          rows="15"
          disabled={isLoading}
        />

        <button 
          type="submit" 
          className="btn-primary" 
          disabled={isLoading || code.trim() === ''}
          style={{ alignSelf: 'center', width: '300px' }}
        >
          {isLoading ? 'Analyzing Code...' : 'Get AI Review'}
        </button>
      </form>

      {error && <p className="error" style={{ color: 'red', textAlign: 'center' }}>Error: {error}</p>}
      
      {review && (
        <div className="review-output">
          <h2>Code Review Results</h2>
          <div dangerouslySetInnerHTML={{ __html: review }} />
        </div>
      )}
    </div>
  );
}

export default CodeReviewTool;