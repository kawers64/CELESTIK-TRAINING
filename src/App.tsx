import { useState } from 'react'
import './App.css'
import { getISS } from './iss'

function App() {
  // React  must memorized an object containing : latitude, longitude et altitude.
  const [position, setPosition] = useState<{
      latitude: number;
      longitude: number;
      altitude: number;
    } | null>(null)

  // Function link React inerface to orbital calculus
  async function calculerPosition() {
  try {
    const resultat = await getISS(
      "https://celestrak.org/NORAD/elements/gp.php?CATNR=25544&FORMAT=TLE"
    )

    setPosition(resultat)
  } catch (error) {
    console.error("Erreur :", error)
  }
  }

  return (
        <main className="tracker">
    <header className="tracker-header">
      <h1>🛰️ ISS Tracker</h1>
      <p>Suivi de la Station spatiale internationale</p>
    </header>

    <section className="position-card">
      <div className="card-header">
        <h2>POSITION ORBITALE</h2>
        <span className="iss-badge">ISS</span>
      </div>

      {position ? (
        <div className="coordinates">
          <div className="coordinate">
            <span>Latitude</span>
            <strong>{position.latitude.toFixed(4)}°</strong>
          </div>

          <div className="coordinate">
            <span>Longitude</span>
            <strong>{position.longitude.toFixed(4)}°</strong>
          </div>

          <div className="coordinate">
            <span>Altitude</span>
            <strong>{position.altitude.toFixed(2)} km</strong>
          </div>
        </div>
      ) : (
        <p className="empty-state">Clique pour obtenir la position de l'ISS.</p>
      )}
    </section>

    <button className="calculate-button" onClick={calculerPosition}>
      ↻ Calculer la position
    </button>
  </main>
)
}

export default App
