import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
// src/App.jsx
import Header from './componentes/Header';
import Sidebar from './componentes/Sidebar';
import GameCard from './componentes/GameCard';

const juegosIndie = [
  {
    id: 1,
    titulo: "Hollow Knight",
    estudio: "Team Cherry",
    imagen: "https://placehold.co/300x200/121212/38BDF8?text=Hollow+Knight",
    accion: "Jugar"
  },
  {
    id: 2,
    titulo: "Celeste",
    estudio: "Extremely OK Games",
    imagen: "https://placehold.co/300x200/121212/8A2BE2?text=Celeste",
    accion: "Ver Detalles"
  },
  {
    id: 3,
    titulo: "Stardew Valley",
    estudio: "ConcernedApe",
    imagen: "https://placehold.co/300x200/1E1E1E/38BDF8?text=Stardew+Valley",
    accion: "Jugar"
  },
  {
    id: 4,
    titulo: "Hades",
    estudio: "Supergiant Games",
    imagen: "https://placehold.co/300x200/1E1E1E/8A2BE2?text=Hades",
    accion: "Ver Detalles"
  },
  {
    id: 5,
    titulo: "Undertale",
    estudio: "tobyfox",
    imagen: "https://placehold.co/300x200/121212/38BDF8?text=Undertale",
    accion: "Jugar"
  },
  {
    id: 6,
    titulo: "Dead Cells",
    estudio: "Motion Twin",
    imagen: "https://placehold.co/300x200/121212/8A2BE2?text=Dead+Cells",
    accion: "Ver Detalles"
  }
];

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <Sidebar />

        <main className="dashboard">
          <h2 className="dashboard-title">Juegos Destacados</h2>
          
          <div className="games-grid">
            {juegosIndie.map((juego) => (
              <GameCard 
                key={juego.id} 
                titulo={juego.titulo}
                estudio={juego.estudio}
                imagen={juego.imagen}
                accion={juego.accion}
              />
            ))}
          </div>
        </main>

      </div>
    </div>
  );
}

export default App;
