import React, { useState } from 'react';

import { useAuth } from '../context/AuthContext';

import {
  Compass,
  UserCheck,
  Loader2
} from 'lucide-react';

export default function Login() {
  const { login, loading } = useAuth();

  const [username, setUsername] = useState('testeng');
  const [password, setPassword] = useState('Drilling123');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const res = await login(username, password);

    if (!res.success) {
      setError(res.error);
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#F5F7F8',
        padding: '24px',
        fontFamily: "'Montserrat', sans-serif"
      }}
    >

      {/* ============================================================
          LOGIN CARD
          ============================================================ */}

      <div
        className="glass-panel"
        style={{
          width: '100%',
          maxWidth: '440px',
          padding: '32px',
          display: 'flex',
          flexDirection: 'column',
          gap: '22px',
          background: '#FFFFFF',
          border: '1px solid #D4DDE2',
          borderRadius: '8px',
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)'
        }}
      >

        {/* ==========================================================
            BRAND HEADER
            ========================================================== */}

        <div
          style={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px'
          }}
        >

          {/* Logo */}

          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '8px',
              background: '#5C7E8F',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid #000000'
            }}
          >
            <Compass
              size={30}
              color="#FFFFFF"
              strokeWidth={1.8}
            />
          </div>


          {/* Brand */}

          <div>

            <h1
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '1.4rem',
                fontWeight: 700,
                color: '#000000',
                letterSpacing: '-0.02em',
                margin: 0
              }}
            >
              eRTMAC-NWIS
            </h1>

            <p
              style={{
                fontSize: '0.75rem',
                fontWeight: 500,
                color: '#5C7E8F',
                marginTop: '5px',
                lineHeight: 1.5
              }}
            >
              Oil India Limited • Institutional Memory & Offset Intelligence
            </p>

          </div>

        </div>


        {/* ==========================================================
            PROTOTYPE NOTICE
            ========================================================== */}

        <div
          style={{
            background: '#F5F7F8',
            border: '1px solid #D4DDE2',
            borderLeft: '3px solid #5C7E8F',
            borderRadius: '6px',
            padding: '11px 13px',
            fontSize: '0.73rem',
            color: '#5C7E8F',
            lineHeight: 1.5
          }}
        >
          <strong
            style={{
              color: '#000000',
              fontWeight: 700
            }}
          >
            Prototype Notice:
          </strong>{' '}
          Standalone decision-support system alongside eRTMAC using
          public international analogues (Equinor Volve dataset).
        </div>


        {/* ==========================================================
            ERROR MESSAGE
            ========================================================== */}

        {error && (
          <div
            style={{
              padding: '11px 12px',
              background: '#FFFFFF',
              border: '1px solid #000000',
              borderLeft: '3px solid #000000',
              borderRadius: '6px',
              color: '#000000',
              fontSize: '0.78rem',
              lineHeight: 1.4
            }}
          >
            {error}
          </div>
        )}


        {/* ==========================================================
            LOGIN FORM
            ========================================================== */}

        <form
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '17px'
          }}
        >

          {/* Username */}

          <div>

            <label
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '0.76rem',
                color: '#000000',
                fontWeight: 600,
                display: 'block',
                marginBottom: '7px'
              }}
            >
              Username
            </label>

            <input
              type="text"
              className="input-text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              autoComplete="username"
              placeholder="Enter username"
            />

          </div>


          {/* Password */}

          <div>

            <label
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '0.76rem',
                color: '#000000',
                fontWeight: 600,
                display: 'block',
                marginBottom: '7px'
              }}
            >
              Password
            </label>

            <input
              type="password"
              className="input-text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
              placeholder="Enter password"
            />

          </div>


          {/* Submit */}

          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary"
            style={{
              width: '100%',
              padding: '12px',
              minHeight: '44px',
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '0.82rem',
              fontWeight: 600,
              marginTop: '4px'
            }}
          >

            {loading ? (
              <Loader2
                size={17}
                className="animate-spin"
              />
            ) : (
              <UserCheck
                size={17}
              />
            )}

            <span>
              {loading
                ? 'Authenticating...'
                : 'Sign In to Operations Console'}
            </span>

          </button>

        </form>


        {/* ==========================================================
            DEMO CREDENTIALS
            ========================================================== */}

        <div
          style={{
            borderTop: '1px solid #D4DDE2',
            paddingTop: '14px',
            textAlign: 'center'
          }}
        >

          <button
            type="button"
            onClick={() => {
              setUsername('testeng');
              setPassword('Drilling123');
            }}
            style={{
              background: 'transparent',
              border: 'none',
              padding: '4px',
              color: '#5C7E8F',
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '0.7rem',
              fontWeight: 500,
              cursor: 'pointer',
              textDecoration: 'underline',
              textUnderlineOffset: '3px'
            }}
          >
            Fill Default Demo Credentials
            <br />
            <span
              style={{
                color: '#A2A2A2',
                fontSize: '0.66rem'
              }}
            >
              testeng / Drilling123
            </span>
          </button>

        </div>

      </div>

    </div>
  );
}

