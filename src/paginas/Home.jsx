import Evento from "../componentes/Evento";

import "../Css/Home.css";
function Home() {
  return (
    
      <div className = "Home">
      <h1>Bem vindo ao Gerenciador de Eventos</h1>
      <p> Aqui você fica por dentro dos eventos.</p>

      {/*Exibindo os eventos*/}
      <Evento nome="Mundo Senai" data="05/11/2025" local="Auditório" />

      <Evento nome="EX" data="45145865" local="NAO SEI" />
     

      <Evento nome="Jogo da Chape" data="26/11/2025" local="Arena Condá" />
      <Evento nome="Enem" data="16/11/2025" local="Unoesc" />
      </div>

    
  );
}
export default Home;
