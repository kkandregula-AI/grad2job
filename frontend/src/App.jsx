
import React, { useState } from 'react'

export default function App() {
  const [query, setQuery] = useState('')
  const [result, setResult] = useState('')

  const aiEngine = {
    ai: 'Learn Python, ML, Deep Learning, LLMs, and MLOps.',
    cloud: 'Learn AWS, Docker, Kubernetes, and DevOps.',
    data: 'Focus on SQL, Power BI, Python, and Analytics.',
    cybersecurity: 'Learn Networking, Linux, and Ethical Hacking.'
  }

  const optimizeTokens = (text) => {
    return text.toLowerCase().trim().slice(0, 40)
  }

  const analyzeCareer = () => {
    const optimized = optimizeTokens(query)
    setResult(aiEngine[optimized] || 'Explore AI, Cloud, Data, and Full Stack domains.')
  }

  return (
    <div style={{padding:'30px',fontFamily:'Arial'}}>
      <h1>AI CareerOS India</h1>
      <p>Startup-grade AI-powered employability platform.</p>

      <h2>Core Features</h2>
      <ul>
        <li>AI Career Recommendation Engine</li>
        <li>Resume Analyzer</li>
        <li>Interview Chatbot</li>
        <li>College-to-Job Roadmaps</li>
        <li>Internship Matching</li>
        <li>Skill Gap Analysis</li>
        <li>Regional Language Support</li>
        <li>Recruiter Dashboard</li>
        <li>Gamified Learning</li>
        <li>Industry Demand Analytics</li>
      </ul>

      <input
        type="text"
        placeholder="Enter skill or career interest"
        value={query}
        onChange={(e)=>setQuery(e.target.value)}
        style={{padding:'12px',width:'320px'}}
      />

      <button
        onClick={analyzeCareer}
        style={{padding:'12px',marginLeft:'10px'}}
      >
        Analyze
      </button>

      <p style={{marginTop:'20px',fontWeight:'bold'}}>{result}</p>

      <h3>Token Optimization</h3>
      <p>
        Query compression and prompt minimization are included to reduce AI API costs.
      </p>
    </div>
  )
}
