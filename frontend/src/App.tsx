import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar';
import Footer from './components/footer';
import Home from '../src/pages/Home'; // Asegúrate de que la ruta sea correcta
import Contacto from '../src/pages/Contacto'; // Asegúrate de que la ruta sea correcta
import Agendamiento from '../src/pages/Agendamiento'; // Asegúrate de que la ruta y el componente existen

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/contact" element={<Contacto />} />
        <Route path="/reservation" element={<Agendamiento />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
