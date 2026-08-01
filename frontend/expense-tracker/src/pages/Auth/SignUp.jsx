import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { validateEmail } from '../../utils/helper'
import ProflePhotoSelector from '../../components/Inputs/ProflePhotoSelector'
import { FaGithub } from "react-icons/fa";

const TESTIMONIALS = [
  {
    quote:
      "SpendWise completely changed how I manage money. I cut unnecessary subscriptions by 40% in the first month.",
    name: "Priya Sharma",
    role: "Product Designer, Notion",
    tags: ["Personal Finance", "Budgeting"],
  },
  {
    quote:
      "The analytics dashboard gives me a real-time pulse on our startup's burn rate. Indispensable for founders.",
    name: "Marcus Cole",
    role: "Co-founder, Raycast",
    tags: ["Startup Finance", "Cash Flow"],
  },
]

const STATS = [
  { label: "Total Balance", value: "$48,291", delta: "+12.4%", positive: true },
  { label: "Monthly Spend", value: "$3,842", delta: "-8.1%", positive: true },
  { label: "Investments", value: "$21,600", delta: "+5.7%", positive: true },
]

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615Z" fill="#4285F4"/>
      <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18Z" fill="#34A853"/>
      <path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332Z" fill="#FBBC05"/>
      <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58Z" fill="#EA4335"/>
    </svg>
  )
}

// function GitHubIcon() {
//   return (
//     <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//       <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 008 10.94c.58.1.79-.25.79-.56v-2.17c-3.25.71-3.94-1.39-3.94-1.39-.53-1.35-1.3-1.71-1.3-1.71-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.39.97.11-.75.41-1.27.74-1.56-2.6-.3-5.34-1.3-5.34-5.78 0-1.28.46-2.33 1.2-3.15-.12-.3-.52-1.49.12-3.1 0 0 .98-.31 3.2 1.2a11.1 11.1 0 015.82 0c2.22-1.51 3.2-1.2 3.2-1.2.64 1.61.24 2.8.12 3.1.75.82 1.2 1.87 1.2 3.15 0 4.49-2.75 5.47-5.36 5.77.42.36.8 1.07.8 2.15v3.19c0 .31.21.67.8.56A11.5 11.5 0 0023.5 12C23.5 5.65 18.35.5 12 .5z"/>
//     </svg>
//   )
// }

function MiniChart() {
  const points = [40, 65, 50, 80, 60, 90, 75, 95]
  const max = Math.max(...points)
  const min = Math.min(...points)
  const h = 48
  const w = 160
  const pad = 4
  const coords = points.map((p, i) => {
    const x = pad + (i / (points.length - 1)) * (w - 2 * pad)
    const y = pad + ((max - p) / (max - min)) * (h - 2 * pad)
    return `${x},${y}`
  })
  const path = `M ${coords.join(' L ')}`
  const area = `${path} L ${w - pad},${h - pad} L ${pad},${h - pad} Z`
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} fill="none">
      <defs>
        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4ade80" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#4ade80" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#chartGrad)" />
      <path d={path} stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={coords[coords.length - 1].split(',')[0]} cy={coords[coords.length - 1].split(',')[1]} r="4" fill="#4ade80" />
    </svg>
  )
}

export const SignUp = () => {
  const [profilePic, setProfilePic] = useState(null)
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [tIdx, setTIdx] = useState(0)
  const testimonial = TESTIMONIALS[tIdx]

  const handleSignUp = (e) => {
    e.preventDefault()

    if (!fullName) {
      setError("Please enter your name")
      return
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.")
      return
    }

    if (!password) {
      setError("Please enter the password.")
      return
    }

    setError("")

    // SignUp API Call (Pure Frontend Only for now)
  }

  return (
    <div className="min-h-screen flex" style={{ background: '#09090f', fontFamily: "'DM Sans', sans-serif" }}>
      {/* LEFT PANEL */}
      <div className="flex flex-col justify-center w-full lg:w-1/2 px-8 sm:px-16 py-12 relative">
        {/* Logo */}
        <div className="mb-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #7c6af7, #4ade80)' }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="white">
                <path d="M8 2L14 5.5V10.5L8 14L2 10.5V5.5L8 2Z" fillOpacity="0.9"/>
                <path d="M8 6L11 7.5V10.5L8 12L5 10.5V7.5L8 6Z" fill="white"/>
              </svg>
            </div>
            <span className="text-white font-semibold text-lg tracking-tight">SpendWise</span>
          </div>
        </div>

        {/* Heading */}
        <div className="mb-6">
          <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(2rem, 4vw, 2.75rem)', lineHeight: 1.15, color: '#f0f0fa', marginBottom: '0.5rem' }}>
            Start tracking your money.
          </h1>
          <p style={{ color: '#7070a0', fontSize: '0.9375rem', lineHeight: 1.6 }}>
            Join thousands managing expenses with clarity and confidence.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSignUp}
          className="flex flex-col gap-4"
        >
          {/* Profile Photo Selector */}
          <ProflePhotoSelector image={profilePic} setImage={setProfilePic} />

          <div>
            <label style={{ display: 'block', fontSize: '0.8125rem', color: '#9090b8', marginBottom: '6px', fontWeight: 500 }}>
              Full name
            </label>
            <input
              type="text"
              placeholder="Jane Doe"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              style={{
                width: '100%',
                background: '#13131f',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '10px',
                padding: '11px 14px',
                color: '#e8e8f0',
                fontSize: '0.9375rem',
                outline: 'none',
                transition: 'border-color 0.2s',
              }}
              onFocus={(e) => (e.target.style.borderColor = 'rgba(124,106,247,0.6)')}
              onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.8125rem', color: '#9090b8', marginBottom: '6px', fontWeight: 500 }}>
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: '100%',
                background: '#13131f',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '10px',
                padding: '11px 14px',
                color: '#e8e8f0',
                fontSize: '0.9375rem',
                outline: 'none',
                transition: 'border-color 0.2s',
              }}
              onFocus={(e) => (e.target.style.borderColor = 'rgba(124,106,247,0.6)')}
              onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.8125rem', color: '#9090b8', marginBottom: '6px', fontWeight: 500 }}>
              Password
            </label>
            <input
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: '100%',
                background: '#13131f',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '10px',
                padding: '11px 14px',
                color: '#e8e8f0',
                fontSize: '0.9375rem',
                outline: 'none',
                transition: 'border-color 0.2s',
              }}
              onFocus={(e) => (e.target.style.borderColor = 'rgba(124,106,247,0.6)')}
              onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
            />
          </div>

          {error && <p className="text-red-500 text-xs pb-1" style={{ margin: 0 }}>{error}</p>}

          <button
            type="submit"
            style={{
              marginTop: '4px',
              width: '100%',
              padding: '12px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #7c6af7 0%, #5b4de0 100%)',
              color: '#fff',
              fontWeight: 600,
              fontSize: '0.9375rem',
              border: 'none',
              cursor: 'pointer',
              transition: 'opacity 0.2s, transform 0.15s',
              letterSpacing: '0.01em',
            }}
            onMouseEnter={(e) => { e.target.style.opacity = '0.88'; e.target.style.transform = 'translateY(-1px)' }}
            onMouseLeave={(e) => { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)' }}
          >
            Create account
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.08)' }} />
          <span style={{ fontSize: '0.8125rem', color: '#5a5a80' }}>or continue with</span>
          <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.08)' }} />
        </div>

        {/* OAuth */}
        <div className="flex gap-3">
          {[
            { icon: <GoogleIcon />, label: 'Google' },
            //{ icon: <GitHubIcon />, label: 'GitHub' },
            // { icon: <FaGoogle size={18} />, label: "Google" },
            { icon: <FaGithub size={18} />, label: "GitHub" },
          ].map(({ icon, label }) => (
            <button
              key={label}
              type="button"
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '10px',
                background: '#13131f',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '10px',
                color: '#c0c0e0',
                fontSize: '0.875rem',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'background 0.2s, border-color 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#1a1a2c'; e.currentTarget.style.borderColor = 'rgba(124,106,247,0.3)' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#13131f'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)' }}
            >
              {icon}
              {label}
            </button>
          ))}
        </div>

        {/* Toggle */}
        <p style={{ marginTop: '28px', textAlign: 'center', fontSize: '0.875rem', color: '#5a5a80' }}>
          Already have an account?{" "}
          <Link
            to="/login"
            style={{ color: '#7c6af7', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', padding: 0, textDecoration: 'none' }}
          >
            Sign in
          </Link>
        </p>
      </div>

      {/* RIGHT PANEL */}
      <div
        className="hidden lg:flex lg:w-1/2 flex-col justify-between p-10 relative overflow-hidden"
        style={{
          background: 'linear-gradient(145deg, #0e0e20 0%, #16103a 40%, #0f1f18 100%)',
          borderLeft: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        {/* Gradient blobs */}
        <div style={{ position: 'absolute', top: '-80px', right: '-60px', width: '360px', height: '360px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,106,247,0.22) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '80px', left: '-40px', width: '280px', height: '280px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(74,222,128,0.14) 0%, transparent 70%)', pointerEvents: 'none' }} />

        {/* Dashboard preview */}
        <div style={{ position: 'relative', zIndex: 1, flex: 1, display: 'flex', flexDirection: 'column', gap: '16px', paddingTop: '32px' }}>
          {/* Stats row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
            {STATS.map((s) => (
              <div
                key={s.label}
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '12px',
                  padding: '14px',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <p style={{ fontSize: '0.7rem', color: '#6060a0', marginBottom: '6px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{s.label}</p>
                <p style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f0f0fa', marginBottom: '4px' }}>{s.value}</p>
                <span style={{ fontSize: '0.75rem', color: '#4ade80', fontWeight: 600 }}>{s.delta}</span>
              </div>
            ))}
          </div>

          {/* Chart card */}
          <div
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '14px',
              padding: '18px',
              backdropFilter: 'blur(12px)',
            }}
          >
            <div className="flex justify-between items-start" style={{ marginBottom: '12px' }}>
              <div>
                <p style={{ fontSize: '0.8125rem', color: '#9090c0', fontWeight: 500 }}>Spending trend</p>
                <p style={{ fontSize: '1.5rem', fontWeight: 700, color: '#f0f0fa' }}>$3,842 <span style={{ fontSize: '0.875rem', color: '#4ade80', fontWeight: 600 }}>↓ 8.1%</span></p>
              </div>
              <div style={{ display: 'flex', gap: '6px' }}>
                {['1W', '1M', '3M'].map((t, i) => (
                  <button
                    key={t}
                    style={{
                      padding: '4px 9px',
                      borderRadius: '6px',
                      fontSize: '0.75rem',
                      fontWeight: 500,
                      background: i === 1 ? 'rgba(124,106,247,0.25)' : 'transparent',
                      color: i === 1 ? '#a090ff' : '#5050a0',
                      border: i === 1 ? '1px solid rgba(124,106,247,0.4)' : '1px solid transparent',
                      cursor: 'pointer',
                    }}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
            <MiniChart />
            {/* Category pills */}
            <div style={{ display: 'flex', gap: '8px', marginTop: '14px', flexWrap: 'wrap' }}>
              {[
                { label: 'Food & Drink', pct: '32%', color: '#7c6af7' },
                { label: 'Transport', pct: '18%', color: '#4ade80' },
                { label: 'Subscriptions', pct: '14%', color: '#f472b6' },
                { label: 'Housing', pct: '28%', color: '#fb923c' },
              ].map((c) => (
                <div key={c.label} style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '4px 9px', background: 'rgba(255,255,255,0.05)', borderRadius: '20px' }}>
                  <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: c.color }} />
                  <span style={{ fontSize: '0.75rem', color: '#8080c0' }}>{c.label}</span>
                  <span style={{ fontSize: '0.75rem', color: '#b0b0e0', fontWeight: 600 }}>{c.pct}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent transactions */}
          <div
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '14px',
              padding: '16px 18px',
              backdropFilter: 'blur(12px)',
            }}
          >
            <p style={{ fontSize: '0.8125rem', color: '#9090c0', fontWeight: 500, marginBottom: '12px' }}>Recent transactions</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { name: 'Spotify Premium', cat: 'Subscription', amt: '-$9.99', color: '#f472b6' },
                { name: 'Whole Foods Market', cat: 'Groceries', amt: '-$67.40', color: '#7c6af7' },
                { name: 'Salary deposit', cat: 'Income', amt: '+$4,200', color: '#4ade80', positive: true },
              ].map((tx) => (
                <div key={tx.name} style={{ display: 'flex', alignItems: 'center', justify: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: `${tx.color}22`, display: 'flex', alignItems: 'center', justify: 'center' }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: tx.color }} />
                    </div>
                    <div>
                      <p style={{ fontSize: '0.8125rem', color: '#d0d0f0', fontWeight: 500, lineHeight: 1.2 }}>{tx.name}</p>
                      <p style={{ fontSize: '0.7rem', color: '#5050a0' }}>{tx.cat}</p>
                    </div>
                  </div>
                  <span style={{ fontSize: '0.875rem', fontWeight: 600, color: tx.positive ? '#4ade80' : '#c0c0e0' }}>{tx.amt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial card */}
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '16px',
            padding: '20px 22px',
            backdropFilter: 'blur(16px)',
            marginTop: '16px',
          }}
        >
          <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
            {testimonial.tags.map((t) => (
              <span
                key={t}
                style={{
                  padding: '3px 10px',
                  background: 'rgba(124,106,247,0.15)',
                  border: '1px solid rgba(124,106,247,0.25)',
                  borderRadius: '20px',
                  fontSize: '0.7rem',
                  color: '#a090ff',
                  fontWeight: 500,
                }}
              >
                {t}
              </span>
            ))}
          </div>
          <p style={{ fontSize: '0.9rem', color: '#c0c0e8', lineHeight: 1.65, marginBottom: '14px' }}>
            "{testimonial.quote}"
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justify: 'space-between' }}>
            <div>
              <p style={{ fontSize: '0.875rem', color: '#e8e8f8', fontWeight: 600 }}>{testimonial.name}</p>
              <p style={{ fontSize: '0.75rem', color: '#5a5a90' }}>{testimonial.role}</p>
            </div>
            <div style={{ display: 'flex', gap: '6px' }}>
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTIdx(i)}
                  style={{
                    width: i === tIdx ? '20px' : '7px',
                    height: '7px',
                    borderRadius: '4px',
                    background: i === tIdx ? '#7c6af7' : 'rgba(255,255,255,0.2)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    padding: 0,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
