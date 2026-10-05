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
    imagen: "https://images.squarespace-cdn.com/content/v1/606d159a953867291018f801/7dc1dbea-b5fc-4c8f-8768-1a5c3ede53e3/HK_header.jpg",
    accion: "Jugar"
  },
  {
    id: 2,
    titulo: "Celeste",
    estudio: "Extremely OK Games",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Celeste_box_art_full.png",
    accion: "Ver Detalles"
  },
  {
    id: 3,
    titulo: "Stardew Valley",
    estudio: "ConcernedApe",
    imagen: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/header.jpg",
    accion: "Jugar"
  },
  {
    id: 4,
    titulo: "Hades",
    estudio: "Supergiant Games",
    imagen: "https://images.igdb.com/igdb/image/upload/t_original/cob9kr.webp",
    accion: "Ver Detalles"
  },
  {
    id: 5,
    titulo: "Undertale",
    estudio: "tobyfox",
    imagen: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/391540/header.jpg",
    accion: "Jugar"
  },
  {
    id: 6,
    titulo: "Dead Cells",
    estudio: "Motion Twin",
    imagen: "https://api.playdigious.com/storage/dedup/58df341631f8501d16622eca8322aedaf5243ff13f5c17c49897a10a4c8f582f.webp",
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
