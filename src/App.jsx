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
    imagen: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/367520/header.jpg",
    accion: "Jugar"
  },
  {
    id: 2,
    titulo: "Celeste",
    estudio: "Extremely OK Games",
    imagen: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/504230/header.jpg",
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
    titulo: "Undertale",
    estudio: "tobyfox",
    imagen: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/391540/header.jpg",
    accion: "Ver Detalles"
  },
  {
    id: 5,
    titulo: "Dead Cells",
    estudio: "Motion Twin",
    imagen: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/588650/header.jpg",
    accion: "Jugar"
  },
  {
    id: 6,
    titulo: "Terraria",
    estudio: "Re-Logic",
    imagen: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/105600/header.jpg",
    accion: "Ver Detalles"
  },
  {
    id: 7,
    titulo: "Cuphead",
    estudio: "Studio MDHR",
    imagen: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/268910/header.jpg",
    accion: "Jugar"
  },
  {
    id: 8,
    titulo: "The Binding of Isaac: Rebirth",
    estudio: "Nicalis, Inc.",
    imagen: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/250900/header.jpg",
    accion: "Ver Detalles"
  },
  {
    id: 9,
    titulo: "Shovel Knight",
    estudio: "Yacht Club Games",
    imagen: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/250760/header.jpg",
    accion: "Jugar"
  },
  {
    id: 10,
    titulo: "Blasphemous",
    estudio: "The Game Kitchen",
    imagen: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/774361/header.jpg",
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
