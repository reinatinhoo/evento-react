import Evento from "../componentes/Evento";

import "../Css/Home.css";
function Home() {
  return (
    
      <div className = "Home">
      <h1>Agenda de Eventos SENAI</h1>
      <p>Todos | Palestras | Workshops | Cursos</p>
    

      {/*Exibindo os eventos*/}
      <Evento nome="Mundo Senai" data="05/11/2025" local="Auditório" />

      <Evento nome="Oficina" data="05/12/2025" local="SISU" />
     

      <Evento nome="Palestra" data="26/11/2025" local="SENAI CHAPECÓ" />
      <Evento nome="Palestra" data="16/11/2025" local="SENAI CHAPECÓ" />
      </div>

    
  );
}
export default Home;
