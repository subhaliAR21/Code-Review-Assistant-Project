// client/src/Header.jsx
import React, { useState } from 'react';
import { useTheme } from './ThemeContext';

function Header({ setCurrentPage }) {
  const { toggleTheme, theme } = useTheme();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signupData, setSignupData] = useState({ email: '', password: '', company: '' });
  const [loginError, setLoginError] = useState('');
  const [signupError, setSignupError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Mock user database (in a real app, this would be handled by a backend)
  const [users, setUsers] = useState([
    { id: 1, email: 'demo@codemate.ai', password: 'demo123', company: 'Demo Company' }
  ]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setLoginError('');

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const user = users.find(u => u.email === loginData.email && u.password === loginData.password);

    if (user) {
      setIsLoggedIn(true);
      setUser(user);
      setShowLoginModal(false);
      setLoginData({ email: '', password: '' });
      alert(`Welcome back, ${user.email}!`);
    } else {
      setLoginError('Invalid email or password. Try demo@codemate.ai / demo123');
    }

    setIsLoading(false);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSignupError('');

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Check if user already exists
    const existingUser = users.find(u => u.email === signupData.email);

    if (existingUser) {
      setSignupError('An account with this email already exists.');
      setIsLoading(false);
      return;
    }

    // Create new user
    const newUser = {
      id: users.length + 1,
      email: signupData.email,
      password: signupData.password,
      company: signupData.company || 'Personal'
    };

    setUsers([...users, newUser]);
    setIsLoggedIn(true);
    setUser(newUser);
    setShowSignupModal(false);
    setSignupData({ email: '', password: '', company: '' });
    alert(`Welcome to Codemate.AI, ${newUser.email}! Your free trial has started.`);

    setIsLoading(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    alert('You have been logged out successfully.');
  };

  const handleLoginInputChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSignupInputChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  return (
    <header className="header">
      <div className="logo" onClick={() => setCurrentPage('home')}>
        Codemate.AI
      </div>
      
      <nav className="nav-links">
        <a href="#" onClick={() => setCurrentPage('home')}>Home</a>
        <a href="#features" onClick={() => setCurrentPage('home')}>Features</a> 
        <a href="#" onClick={() => setCurrentPage('pricing')}>Pricing</a>
        <a href="#" onClick={() => setCurrentPage('blog')}>Blog</a>
        <a href="#" onClick={(e) => { e.preventDefault(); alert('The Personality Assessment feature is under development!'); }}>Personality</a>
      </nav>

      <div className="auth-buttons">
        <button
          className="nav-links"
          onClick={toggleTheme}
        >
          {theme === 'dark' ? '🌞 Light Mode' : '🌙 Dark Mode'}
        </button>

        {isLoggedIn ? (
          <div className="user-menu">
            <span className="user-greeting">Welcome, {user?.email.split('@')[0]}</span>
            <button
              className="btn-secondary"
              onClick={handleLogout}
            >
              Log Out
            </button>
          </div>
        ) : (
          <>
            <button
                className="btn-secondary"
                onClick={() => setShowLoginModal(true)}
            >
              Log In
            </button>
            <button
                className="btn-primary"
                onClick={() => setShowSignupModal(true)}
            >
              Start Free Trial
            </button>
          </>
        )}
      </div>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="modal-overlay" onClick={() => setShowLoginModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Log In to Codemate.AI</h2>
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label htmlFor="login-email">Email</label>
                <input
                  type="email"
                  id="login-email"
                  name="email"
                  value={loginData.email}
                  onChange={handleLoginInputChange}
                  required
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="login-password">Password</label>
                <input
                  type="password"
                  id="login-password"
                  name="password"
                  value={loginData.password}
                  onChange={handleLoginInputChange}
                  required
                  placeholder="Enter your password"
                />
              </div>
              {loginError && <div className="error-message">{loginError}</div>}
              <button
                type="submit"
                className="btn-primary"
                style={{ width: '100%', marginTop: '20px' }}
                disabled={isLoading}
              >
                {isLoading ? 'Logging In...' : 'Log In'}
              </button>
            </form>
            <div className="modal-footer">
              <p><button
                type="button"
                className="link-button"
                onClick={() => alert('Password reset functionality would be implemented here.')}
              >
                Forgot your password?
              </button></p>
              <p>Don't have an account? <button
                type="button"
                className="link-button"
                onClick={() => {
                  setShowLoginModal(false);
                  setShowSignupModal(true);
                }}
              >
                Sign up here
              </button></p>
            </div>
            <button
              className="modal-close"
              onClick={() => setShowLoginModal(false)}
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Signup Modal */}
      {showSignupModal && (
        <div className="modal-overlay" onClick={() => setShowSignupModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Start Your Free Trial</h2>
            <form onSubmit={handleSignup}>
              <div className="form-group">
                <label htmlFor="signup-email">Email</label>
                <input
                  type="email"
                  id="signup-email"
                  name="email"
                  value={signupData.email}
                  onChange={handleSignupInputChange}
                  required
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="signup-password">Password</label>
                <input
                  type="password"
                  id="signup-password"
                  name="password"
                  value={signupData.password}
                  onChange={handleSignupInputChange}
                  required
                  placeholder="Create a password (min 6 characters)"
                  minLength="6"
                />
              </div>
              <div className="form-group">
                <label htmlFor="signup-company">Company (Optional)</label>
                <input
                  type="text"
                  id="signup-company"
                  name="company"
                  value={signupData.company}
                  onChange={handleSignupInputChange}
                  placeholder="Your company name"
                />
              </div>
              {signupError && <div className="error-message">{signupError}</div>}
              <button
                type="submit"
                className="btn-primary"
                style={{ width: '100%', marginTop: '20px' }}
                disabled={isLoading}
              >
                {isLoading ? 'Creating Account...' : 'Start Free Trial'}
              </button>
            </form>
            <div className="modal-footer">
              <p>Already have an account? <button
                type="button"
                className="link-button"
                onClick={() => {
                  setShowSignupModal(false);
                  setShowLoginModal(true);
                }}
              >
                Log in here
              </button></p>
            </div>
            <button
              className="modal-close"
              onClick={() => setShowSignupModal(false)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;