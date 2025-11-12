import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import Home from "./paginas/Home";
import Sobre from "./paginas/Sobre";
<<<<<<< HEAD
import "./Css/Style.css";
=======
import "./styles/styles.css";
>>>>>>> b9b036949baedaacbae60168707ff6f44ac44517


function App() {
  return (
    <Router>
      <div className="app">
        <Header /> 


        {/* Menu de navegação */}
        <nav>
          
        </nav>


        {/* Definição das rotas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>


        <Footer />
      </div>
    </Router>
  );
}

export default App;
