import Evento from "../componentes/Evento";
<<<<<<< HEAD
import "../Css/Home.css";
=======
import "../styles/home.css";

>>>>>>> b9b036949baedaacbae60168707ff6f44ac44517
function Home() {
  return (
    <main>
      <div className = "Home">
      <h1>Bem vindo ao Gerenciador de Eventos</h1>
      <p> Aqui você fica por dentro dos eventos.</p>

      {/*Exibindo os eventos*/}
      <Evento nome="Mundo Senai" data="05/11/2025" local="Auditório" />
<<<<<<< HEAD
      <Evento nome="EX" data="45145865" local="NAO SEI" />
     
=======
      <Evento nome="Jogo da Chape" data="26/11/2025" local="Arena Condá" />
      <Evento nome="Enem" data="16/11/2025" local="Unoesc" />
      </div>
>>>>>>> b9b036949baedaacbae60168707ff6f44ac44517
    </main>
  );
}
export default Home;
