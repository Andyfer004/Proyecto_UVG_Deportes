import { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f0f4f8',
        padding: '1rem',
      }}
    >
      <div
        style={{
          backgroundColor: '#ffffff',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
          width: '100%',
          maxWidth: '400px',
        }}
      >
        <h1
          style={{
            fontSize: '1.8rem',
            marginBottom: '1rem',
            textAlign: 'center',
            color: '#333',
          }}
        >
          Welcome Back
        </h1>
        <p
          style={{
            textAlign: 'center',
            marginBottom: '1.5rem',
            color: '#666',
            fontSize: '0.9rem',
          }}
        >
          Please log in to your account
        </p>
        <form
          onSubmit={handleLogin}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          <div style={{ position: 'relative' }}>
            <label
              htmlFor="email"
              style={{
                fontSize: '0.85rem',
                color: '#666',
                marginBottom: '.5rem',
                display: 'block',
              }}
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem',
                fontSize: '1rem',
                borderRadius: '8px',
                border: '1px solid #ccc',
                outline: 'none',
                transition: 'border-color 0.3s ease',
              }}
              placeholder="Enter your email"
              required
            />
          </div>
          <div style={{ position: 'relative' }}>
            <label
              htmlFor="password"
              style={{
                fontSize: '0.85rem',
                color: '#666',
                marginBottom: '.5rem',
                display: 'block',
              }}
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem',
                fontSize: '1rem',
                borderRadius: '8px',
                border: '1px solid #ccc',
                outline: 'none',
                transition: 'border-color 0.3s ease',
              }}
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            style={{
              backgroundColor: '#007BFF',
              color: '#ffffff',
              padding: '0.8rem',
              fontSize: '1rem',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0056b3')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#007BFF')}
          >
            Login
          </button>
        </form>
        <div
          style={{
            marginTop: '1rem',
            textAlign: 'center',
            fontSize: '0.9rem',
          }}
        >
          <a
            href="#"
            style={{
              color: '#007BFF',
              textDecoration: 'none',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#0056b3')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#007BFF')}
          >
            Forgot your password?
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
