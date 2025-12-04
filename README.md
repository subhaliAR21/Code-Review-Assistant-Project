# Code Review Assistant - AI-Powered Code Review Tool

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4.4.5-646CFF.svg)](https://vitejs.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A modern, professional AI-powered code review platform that elevates code quality through automated analysis, instant feedback, and intelligent insights for individual developers.

## ✨ Features

### ⏱️ The Code Velocity Predictor
- Uses historical commit data and code complexity metrics (analyzed by AI) to forecast the estimated time to completion for open Pull Requests (PRs) and feature branches
- Get an early warning if a feature is slowing down, allowing you to adjust deadlines and improve project predictability

### 🧠 Cognitive Load Heatmap
- Analyzes the concentration of bug reports and frequent refactoring activity across the codebase, generating a visual 'heat map' that highlights areas of high cognitive load
- Helps prioritize technical debt reduction efforts and identify modules that need better documentation or decomposition

### 👨‍🏫 AI Mentor for PR Feedback
- Instead of just flagging errors, the AI delivers feedback in a customizable 'mentor persona' (e.g., 'Skeptical Architect,' 'Encouraging Senior Dev,' 'Abrasive Tech Lead')
- Provides educational, structured, and consistent feedback, accelerating your learning

### 🔍 Code Climate Fingerprinting (Style Drift Detection)
- Continuously monitors the entire repository to detect 'style drift'—instances where code formatting, variable naming conventions, or structural patterns deviate from the established norm
- Enforces codebase consistency, preventing the project from becoming a chaotic 'Franken-codebase' as it grows

### 🛡️ AI Burnout Shield (Commit Pattern Analysis)
- The AI monitors your commit timestamps and activity spikes. If you show prolonged patterns of late-night, weekend, or excessive continuous commit activity, the 'Burnout Shield' alerts you privately
- Proactively helps maintain your health and prevents burnout by identifying unsustainable work patterns

### 🔧 AI-Powered Code Refactoring Assistant
- Scans the codebase to identify code smells, duplicated code, and areas ripe for refactoring
- Provides automated suggestions for improvements, such as extracting methods, simplifying complex functions, or applying design patterns

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/subhaliAR21/Code-Review-Assistant-Project.git
   cd Code-Review-Assistant-Project
   ```

2. **Install client dependencies**
   ```bash
   cd client
   npm install
   ```

3. **Install server dependencies**
   ```bash
   cd ../server
   npm install
   ```

4. **Start the development servers**

   **Client (Frontend):**
   ```bash
   cd client
   npm run dev
   ```

   **Server (Backend):**
   ```bash
   cd server
   npm start
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` to view the application.

## 🎨 UI/UX Features

- **Modern Design**: Professional interface with clean typography and intuitive navigation
- **Dark/Light Theme**: Seamless theme switching with persistent preferences
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Enhanced user experience with subtle transitions and hover effects
- **Accessibility**: WCAG-compliant design with proper contrast and keyboard navigation

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern JavaScript library for building user interfaces
- **Vite** - Fast build tool and development server
- **CSS3** - Custom styling with CSS variables and modern features
- **Google Fonts (Inter)** - Professional typography

### Backend
- **Node.js** - JavaScript runtime for server-side development
- **Express.js** - Web application framework

## 📁 Project Structure

```
Code-Review-Assistant-Project/
├── client/                 # React frontend
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── components/    # Reusable React components
│   │   ├── ThemeContext.jsx # Theme management
│   │   ├── App.jsx        # Main application component
│   │   ├── App.css        # Main application styles
│   │   ├── index.css      # Global styles
│   │   ├── main.jsx       # Application entry point
│   │   └── assets/        # Static assets
│   ├── package.json
│   ├── vite.config.js
│   ├── index.html
│   └── eslint.config.js
├── server/                # Node.js backend
│   ├── index.js          # Server entry point
│   └── package.json
├── README.md
├── TODO.md
└── .gitignore
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Built with ❤️ for developers, by developers**
