import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Header from './componentes/Header.jsx';
import Sidebar from './componentes/Sidebar.jsx';

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <Sidebar />
        <main className="dashboard">
          {/* Aquí irá el contenedor principal con las tarjetas más adelante */}
          <p>Contenedor de juegos (Dashboard)</p>
        </main>
      </div>
    </div>
  );
}

export default App;
