// client/src/PricingPage.jsx
import React from 'react';

const PricingPage = () => {
    const faqs = [
        "How does Codemetrics analyze developer performance?",
        "Does Codemetrics integrate with our existing tools?",
        "What are DORA metrics, and why are they important?",
        "How does the AI-powered engineering manager feature work?",
        "Can developers see their own rankings and badges?",
        "Will this add more work for my developers?",
        "What makes Codemetrics different from other productivity tools?",
        "How does the AI-powered code feedback work?",
        "How secure is our data with Codemetrics?",
    ];

    return (
        <div className="page-content">
            <h1 style={{textAlign: 'center'}}>Simple pricing to meet all your needs</h1>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', margin: '40px 0' }}>
                
                {/* Base Plan Card */}
                <div className="feature-card" style={{ width: '300px', padding: '30px', border: 'none', borderTop: '4px solid var(--color-primary)' }}>
                    <h2 style={{textAlign: 'center'}}>Base Plan</h2>
                    <p style={{ margin: '15px 0', minHeight: '40px', textAlign: 'center' }}>Unlimited access to Codemetrics. Best for smaller teams and startups.</p>
                    <div style={{ margin: '20px 0', textAlign: 'center' }}>
                        <span style={{ fontSize: '36px', fontWeight: 'bold' }}>$10</span>
                        <span style={{ fontSize: '18px', color: 'var(--color-secondary)' }}>/dev/month</span>
                        <p style={{ color: 'var(--color-secondary)' }}>($20 standard price)</p>
                    </div>
                    <button className="btn-primary" style={{ width: '100%', marginBottom: '20px' }} onClick={() => {
                        alert('🎉 Welcome! Your 7-day free trial has started. You can now access all features.');
                        // Here you could add logic to redirect or update user state
                    }}>
                        🚀 Start 7-day Free Trial
                    </button>
                    <ul style={{ textAlign: 'left', listStyle: 'none', padding: 0 }}>
                        <li>✅ Lifetime updates</li>
                        <li>✅ Scale as you go</li>
                        <li>✅ All features</li>
                        <li>✅ Unlimited AI access</li>
                    </ul>
                </div>

                {/* Enterprise Plan Card */}
                <div className="feature-card" style={{ width: '300px', padding: '30px', border: 'none', borderTop: '4px solid var(--color-secondary)' }}>
                    <h2 style={{textAlign: 'center'}}>Enterprise</h2>
                    <p style={{ margin: '15px 0', minHeight: '40px', textAlign: 'center' }}>Having a huge team and need custom features? Contact us!</p>
                    <div style={{ margin: '20px 0', textAlign: 'center' }}>
                        <span style={{ fontSize: '36px', fontWeight: 'bold' }}>Custom</span>
                        <p style={{ color: 'var(--color-secondary)' }}>Contact us for an amazing offer</p>
                    </div>
                    <button className="btn-secondary" style={{ width: '100%', marginBottom: '20px' }} onClick={() => alert('Opening Contact Form...')}>
                        Contact us
                    </button>
                    <ul style={{ textAlign: 'left', listStyle: 'none', padding: 0 }}>
                        <li>✅ Lifetime updates</li>
                        <li>✅ Priority support</li>
                        <li>✅ All features</li>
                        <li>✅ Unlimited AI access</li>
                    </ul>
                </div>
            </div>

            <section style={{ margin: '80px 0' }}>
                <h2 style={{textAlign: 'center'}}>Frequently asked questions</h2>
                <div style={{ marginTop: '30px' }}>
                    {faqs.map((q, index) => (
                        <div key={index} className='faq-item' onClick={() => alert(`Answer for: ${q}`)}>
                            <p>{q}</p>
                        </div>
                    ))}
                </div>
            </section>
            
            <div style={{textAlign: 'center'}}>
                <button className="btn-primary" style={{ width: '200px', margin: '40px 0 80px' }} onClick={() => {
                    alert('🚀 Ready to transform your team? Let\'s get started!');
                    // Here you could add logic to scroll to top or redirect to signup
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }}>
                    🚀 Build a Better Team
                </button>
            </div>
        </div>
    );
};

export default PricingPage;