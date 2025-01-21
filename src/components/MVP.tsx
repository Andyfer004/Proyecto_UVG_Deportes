import './MVP.css'

function MVP() {
  return (
    <div className='mvp-container'> 
      <div className='card-section'>
        <h2 className='card-title'>Goleador</h2>
        <div className="profile-card">
        <img
          src="./logo-jack.png" 
          alt="User"
          className="profile-card-image"
        />
        <div className="profile-card-content">
          <div className="profile-card-info">
            <h2>Alex Morrison</h2>
            <p>Equipo: Los Tigres</p>
          </div>
          <div className="profile-card-stats">
            <div className="stat">
              <span className="stat-label">Goles</span>
              <span className="stat-value">12</span>
            </div>
            <div className='stat'>
              <span className="stat-label">Numero</span>
              <span className="stat-value">10</span>
            </div>
          </div>
        </div>
      </div>
      </div>

    <div className='card-section'>
      <h2 className='card-title'>Mejor Equipo</h2>
      <div className="profile-card">
        <img
          src="./logo-jack.png" 
          alt="User"
          className="profile-card-image"
        />
        <div className="profile-card-content">
          <div className="profile-card-info">
            <h2>Alex Morrison</h2>
            <p>Equipo: Los Tigres</p>
          </div>
          <div className="profile-card-stats">
            <div className="stat">
              <span className="stat-label">Goles</span>
              <span className="stat-value">12</span>
            </div>
            <div className='stat'>
              <span className="stat-label">Numero</span>
              <span className="stat-value">10</span>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default MVP;