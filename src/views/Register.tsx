import { useState } from 'react';

function Register() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    console.log('Registration Data:', formData);
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
          maxWidth: '450px',
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
          Create an Account
        </h1>
        <form
          onSubmit={handleRegister}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          <div>
            <label
              htmlFor="fullName"
              style={{
                fontSize: '0.85rem',
                color: '#666',
                marginBottom: '.5rem',
                display: 'block',
              }}
            >
              Full Name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '0.75rem',
                fontSize: '1rem',
                borderRadius: '8px',
                border: '1px solid #ccc',
                outline: 'none',
                transition: 'border-color 0.3s ease',
              }}
              placeholder="Enter your full name"
              required
            />
          </div>
          <div>
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
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
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
          <div>
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
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '0.75rem',
                fontSize: '1rem',
                borderRadius: '8px',
                border: '1px solid #ccc',
                outline: 'none',
                transition: 'border-color 0.3s ease',
              }}
              placeholder="Create a password"
              required
            />
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              style={{
                fontSize: '0.85rem',
                color: '#666',
                marginBottom: '.5rem',
                display: 'block',
              }}
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '0.75rem',
                fontSize: '1rem',
                borderRadius: '8px',
                border: '1px solid #ccc',
                outline: 'none',
                transition: 'border-color 0.3s ease',
              }}
              placeholder="Confirm your password"
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
            Register
          </button>
        </form>
        <div
          style={{
            marginTop: '1rem',
            textAlign: 'center',
            fontSize: '0.9rem',
          }}
        >
          Already have an account?{' '}
          <a
            href="/login"
            style={{
              color: '#007BFF',
              textDecoration: 'none',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#0056b3')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#007BFF')}
          >
            Log in here
          </a>
        </div>
      </div>
    </div>
  );
}

export default Register;
