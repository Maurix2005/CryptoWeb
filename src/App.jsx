import Formulario from './components/Formulario'
import './css/App.css'

function App() {
  return (
    <div className="contenedor-principal">
      <header className="app-header">
        <h1 className="header-title">Cotizador de Criptomonedas</h1>
      </header>

      <main className="contenido-grid">
        <section className="columna-formulario tarjeta-formulario">
          <Formulario />
        </section>
      </main>
    </div>
  )
}

export default App
