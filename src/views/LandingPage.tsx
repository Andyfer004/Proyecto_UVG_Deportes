function LandingPage() {
    return (
      <div
        style={{
          fontFamily: 'Arial, sans-serif',
          backgroundColor: '#f9f9f9',
          color: '#333',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
        }}
      >
        <header
          style={{
            textAlign: 'center',
            marginBottom: '2rem',
          }}
        >
          <h1
            style={{
              fontSize: '2.5rem',
              margin: 0,
            }}
          >
            Welcome to Our Platform
          </h1>
          <p
            style={{
              margin: '0.5rem 0',
              fontSize: '1.2rem',
              color: '#555',
            }}
          >
            We provide top-notch solutions to boost your productivity.
          </p>
        </header>
  
        <main
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <button
            style={{
              backgroundColor: '#007BFF',
              color: '#fff',
              border: 'none',
              padding: '0.8rem 2rem',
              borderRadius: '8px',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0056b3')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#007BFF')}
          >
            Get Started
          </button>
          <button
            style={{
              backgroundColor: 'transparent',
              color: '#007BFF',
              border: '2px solid #007BFF',
              padding: '0.8rem 2rem',
              borderRadius: '8px',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'color 0.3s ease, border-color 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#0056b3';
              e.currentTarget.style.borderColor = '#0056b3';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#007BFF';
              e.currentTarget.style.borderColor = '#007BFF';
            }}
          >
            Learn More
          </button>
        </main>
  
        <footer
          style={{
            marginTop: '3rem',
            fontSize: '0.9rem',
            color: '#777',
          }}
        >
          <p>© 2024 Our Platform. All rights reserved.</p>
        </footer>
      </div>
    );
  }
  
  export default LandingPage;
  