import Evento from "../componentes/Evento";

function Home() {
  return (
    <main>
      <h1>Bem vindo ao Gerenciador de Eventos</h1>
      <p> Aqui você fica por dentro dos eventos.</p>

      {/*Exibindo os eventos*/}
      <Evento nome="Mundo Senai" data="05/11/2025" local="Auditório" />
      <Evento nome="Jogo da Chape" data="11/10/2025" local="Arena Condá" />
      <Evento nome="Enem" data="09/11/2025" local="Unoesc" />
    </main>
  );
}
export default Home;
