// client/src/AboutUsPage.jsx
import React from 'react';

const teamMembers = [
    { name: "Peter Gratale", role: "10+ Years in Product & Marketing for SaaS. Co-founded several startups" },
    { name: "Tilal Husain", role: "CTO with 10+ years experience building successful startups & applications" },
    { name: "Sepehr Shapoori", role: "Software Engineer" },
    { name: "Besufekad Tamiru", role: "Software Engineer" },
    { name: "Volodymyr Boiarinov", role: "Product designer" },
    { name: "Saad Nassiri", role: "Account executive" },
    { name: "Ana Buadze", role: "Growth Marketing Manager" },
    { name: "Mark Harbottle", role: "Co-founder of Flippa, 99 designs, Sitepoint, and more." },
    { name: "Matt Mickiewicz", role: "Co-founder of Flippa, 99 Designs, Sitepoint, and more" },
];

const AboutUsPage = () => {
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
            <h1 style={{textAlign: 'center'}}>We're on a mission to help engineering teams</h1>
            <p style={{ fontSize: '18px', maxWidth: '700px', margin: '20px auto 50px', textAlign: 'center' }}>
                **Codemetrics** was founded by the team behind 99designs, Flippa, SitePoint and Hired.com. Our mission is to build software that makes it easier to manage engineering teams and, ultimately, maximize efficiency.
            </p>

            <h2 style={{ marginBottom: '30px', textAlign: 'center' }}>Our Team</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '80px' }}>
                {teamMembers.map((member, index) => (
                    <div key={index} className="feature-card" style={{ textAlign: 'left', borderTop: '3px solid var(--color-primary)' }}>
                        <h3 style={{ marginBottom: '5px' }}>{member.name}</h3>
                        <p style={{ fontSize: '14px', color: 'var(--color-secondary)' }}>{member.role}</p>
                    </div>
                ))}
            </div>

            <h2 style={{ marginBottom: '30px', textAlign: 'center' }}>Teams that run on Codemetrics:</h2>
            <div style={{ minHeight: '100px', border: '1px dashed var(--color-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '80px', borderRadius: '8px' }}>
                [Placeholder for Client Logos / Trust Signals]
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
        </div>
    );
};

export default AboutUsPage;