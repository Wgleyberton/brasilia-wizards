import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="home-hero">
        <div className="hero-content">
          <h1>
            Bem vindo ao <span>Brasília Wizards</span>
          </h1>
          <p>
            Respeito, União e Irmandade
          </p>
          <div className="hero-buttons">
            <Link to="/history" className="btn btn-primary">Nossa história</Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="home-features">
        <div className="container">
          <h2 className="section-title">Nossas Modalidades</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon1"></div>
              <h3>Futebol Americano</h3>
              <p>
                Vivencie a emoção do futebol americano com nosso programa Full Pads. Treinamento, evoçução e competitividade.
              </p>
              <Link to="/american-football" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                Saiba mais
              </Link>
            </div>

            <div className="feature-card">
              <div className="feature-icon2"></div>
              <h3>Flag Football</h3>
              <p>
                Futebol americano rápido e sem contato, para todos os níveis de habilidade, masculino e feminino. Perfeito para você que deseja iniciar no esporte.
              </p>
              <Link to="/flag-football" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                Saiba mais
              </Link>
            </div>

            <div className="feature-card">
              <div className="feature-icon3"></div>
              <h3>E-sports</h3>
              <p>
                Projeto em reformulação
                <br/>
                <br/>
                <br/>
                <br/>
              </p>
              <Link to="/esports" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                Saiba mais
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="home-about">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <span></span>
            </div>
            <div className="about-content">
              <h2>Sobre o Brasília</h2>
              <p>
                O Brasília Wizards é uma equipe de futebol americano sediada em Brasília, Distrito Federal. Fundado oficialmente em 13 de novembro de 2016, o time nasceu da iniciativa de cinco jovens atletas com experiência prévia na modalidade: Marcus Vinícius Alves Ramos (Mavir), Athos Gabriel Costa e Silva, Matheus Teixeira, Lucas Henriques Rebouças e Vinicius Orengo.
              </p>
              <p>
                A ideia surgiu durante um encontro entre os amigos na casa do Mavir. Entre conversas e trocas de ideias, surgiu o nome e as cores do time. As cores roxo e amarelo, que se tornaram a identidade visual oficial da equipe, foram escolhidas por Lucas Rebouças — torcedor do Los Angeles Lakers — que quis homenagear seu time de basquete favorito. O nome “Wizards” refletia a proposta de um time jovem, ousado e criativo, com personalidade única dentro da cena esportiva local.

              </p>
              <Link to="/history" className="btn btn-primary">Leia a história completa...</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="home-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Participe da nossa <span>Seletiva</span></h2>
            <p>
              Venha treinar com a gente, buscamos atletas com e sem experiência no esporte, basta ter vontade de aprender e querer ser competitivo.
            </p>
            <Link to="/announcements" className="btn btn-secondary">Saiba mais</Link>
          </div>
        </div>
      </section>
      
      {/* News Section */}
      <section className="home-news">
        <div className="container">
          <h2 className="section-title">Informações Gerais</h2>
          <div className="news-grid">
            <div className="news-card">
              <div className="news-image1">
                <span></span>
              </div>
              <div className="news-content">
                <span className="news-date"></span>
                <h4>Treinos de Full Pads</h4>
                <p>
                  <b>Masculino: </b>
                   <br/>
                  Terça-feira ás 19h30.
                  <br/>
                  Sábado ás 09h00.
                   <br/>
                  <br/>

                  <b>Local:</b> Campo de futebol americano do Guará II, atrás da UBS.
                </p>
              </div>
            </div>

            <div className="news-card">
              <div className="news-image2">
                <span></span>
              </div>
              <div className="news-content">
                <span className="news-date"></span>
                <h4>Treinos de Flag Football Masculino</h4>
                <p>
                  <b>Masculino: </b>
                  <br/>
                  Quinta-feira ás 19h30.
                  <br/>
                  <b>Local:</b> Campo de futebol americano do Guará II, atrás da UBS.
                  <br/>
                  <br/>


                  
                </p>
              </div>
            </div>

            <div className="news-card">
              <div className="news-image3">
                <span></span>
              </div>
              <div className="news-content">
                <span className="news-date"></span>
                <h4>Treinos de Flag Football Feminino</h4>
                <p>
                                  
                  <b>Feminino: </b>
                  <br/>
                   Sábado ás 14h00.
                   <br/>
                   <b>Local:</b> Campo de futebol americano do Guará II, atrás da UBS.
                   <br/>
                   <br/>
                   Segunda e Quarta ás 19h30.
                   <br/>
                   <b>Local:</b> Gramado da 313/314 Norte.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}

export default Home;
