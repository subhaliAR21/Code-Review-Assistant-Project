// client/src/BlogPage.jsx
import React from 'react';

const blogPosts = [
    { title: "AI-Powered Engineering Insights: Transforming Data into Actionable Intelligence", key: "Key Takeaways AI-powered engineering insights transform raw operational data into actionable intelligence, enabling faster decision-making..." },
    { title: "Predictive Developer Analytics: Transforming Software Development Through Data-Driven Insights", key: "Key Takeaways Predictive developer analytics uses machine learning and historical development data to forecast project outcomes, delivery timelines, and code quality issues..." },
    { title: "Mastering Predictive Productivity: Boost Efficiency with Data-Driven Insights", key: "Predictive productivity uses data analysis to forecast employee performance, allowing businesses to predict issues and improve efficiency..." },
    { title: "Engineering Resource Forecasting: Complete Guide to Strategic Team Planning", key: "Key Takeaways Engineering resource forecasting predicts future talent needs based on project demands, skill requirements, and capacity constraints to optimize team productivity..." },
    { title: "Top 12 Developer Productivity Metrics to Boost Your Software Team's Efficiency", key: "Struggling with your software team’s productivity? Developer productivity metrics are your solution. They reveal performance gaps and guide improvements..." },
    { title: "Essential Guide to Achieving High Code Quality and Developer Productivity", key: "Introduction: Why High Code Quality and Developer Productivity Matter in today’s fast-paced world of software engineering..." },
    { title: "AI to Coding: The Best Tools in 2025 to Boost Productivity and Code Quality", key: "Introduction Artificial intelligence has transformed nearly every industry, and software development is no exception. AI coding tools are no longer a novelty..." },
    { title: "Top Git Analytics Tools for Effective Project Management", key: "Git analytics tools offer valuable insights into your development team’s performance and project health. Discover how these tools can help you track productivity..." },
];

const BlogPage = () => {
    return (
        <div className="page-content">
            <h1 style={{textAlign: 'center'}}>Explore the Code Chronicles: Insights, Trends, and Expertise</h1>
            <p style={{ fontSize: '18px', maxWidth: '700px', margin: '20px auto 50px', color: 'var(--color-secondary)', textAlign: 'center' }}>
                Simple, digestible insights from your Git data
            </p>

            <div style={{ marginBottom: '60px' }}>
                {blogPosts.map((post, index) => (
                    <div key={index} style={{ padding: '20px 0', borderBottom: '1px solid var(--color-secondary)', cursor: 'pointer' }}
                        onClick={() => alert(`Opening blog post: ${post.title}`)}>
                        <h3 style={{ color: 'var(--color-primary)', marginBottom: '5px' }}>{post.title}</h3>
                        <p style={{ fontSize: '14px', color: 'var(--color-secondary)' }}>{post.key}</p>
                    </div>
                ))}
                <div style={{textAlign: 'center'}}>
                    <button className="btn-secondary" style={{ marginTop: '20px' }}>
                        Load more posts
                    </button>
                </div>
            </div>

            <section style={{ padding: '40px', background: 'var(--color-cardBackground)', borderRadius: '8px', boxShadow: 'var(--color-shadow)', margin: '40px 0', textAlign: 'center' }}>
                <h2 style={{ marginBottom: '10px' }}>Start shipping faster</h2>
                <p style={{ color: 'var(--color-secondary)', marginBottom: '20px' }}>Build a better team one commit at a time</p>
                <button className="btn-primary" onClick={() => alert('Continuing with Github integration...')}>
                    Continue with Github
                </button>
                <p style={{ fontSize: '12px', marginTop: '10px', color: 'var(--color-secondary)' }}>Powered by AI</p>
            </section>
        </div>
    );
};

export default BlogPage;