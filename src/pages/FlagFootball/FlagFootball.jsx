import './FlagFootball.css';

function FlagFootball() {
  const leagues = [
    {
      name: 'Adult Co-ed League',
      description: 'Mixed teams welcome! Perfect for recreational players looking for fun and friendly competition.',
      badge: 'Most Popular',
      featured: true,
      details: { schedule: 'Sundays', duration: '10 weeks', teamSize: '7v7' },
    },
    {
      name: 'Youth Development',
      description: 'Ages 8-14. Focus on fundamentals, teamwork, and building a love for the sport.',
      badge: 'Youth',
      featured: false,
      details: { schedule: 'Saturdays', duration: '8 weeks', teamSize: '5v5' },
    },
    {
      name: 'Competitive Adult',
      description: 'For experienced players seeking high-level competition. Tournament-style play.',
      badge: 'Advanced',
      featured: false,
      details: { schedule: 'Weeknights', duration: '12 weeks', teamSize: '7v7' },
    },
    {
      name: 'Corporate League',
      description: 'Team building through sports! Perfect for company teams and office groups.',
      badge: 'Corporate',
      featured: false,
      details: { schedule: 'Fridays', duration: '8 weeks', teamSize: '6v6' },
    },
  ];

  const rules = [
    {
      icon: '',
      title: 'Sem Contato',
      description: 'Apenas puxar a bandeira. É proibido derrubar, bloquear ou ter contato físico com os adversários.',
    },
    {
      icon: '',
      title: 'Quatro Descidas',
      description: 'As equipes têm quatro tentativas para marcar pontos ou chegar ao meio-campo ao passar o meio campo as descidas são renovadas e a equipe tem mais 4 tentativas para tentar marcar pontos.',
    },
    {
      icon: '',
      title: 'Flag',
      description: 'Cada jogador usa um cinto com bandeiras removíveis. Puxe a bandeira para parar o jogo.',
    },
    {
      icon: '',
      title: 'Zona proibida para corrida',
      description: 'Próximo às zonas finais, são necessárias jogadas de passe para marcar pontos.',
    },
    {
      icon: '',
      title: 'Regras do Quarterback',
      description: 'Os quarterbacks não podem correr a menos que a bola seja entregue a outra pessoa primeiro ou que seja usada uma jogada de passe com finta.',
    },
    {
      icon: '',
      title: 'Tempo Extra',
      description: 'Em caso de empate, o jogo vai para a prorrogação, com posses de bola alternadas a partir da linha de 5 jardas.',
    },
  ];

  return (
    <div className="flag-football-page">
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1>Flag Football</h1>
          <p>
            Futebol americano dinâmico e sem contato para todos os níveis de habilidade. Toda a emoção, sem nenhum tackle!
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="flag-intro">
        <div className="container">
          <div className="flag-intro-grid">
            <div className="flag-intro-content">
              <h2>O que é o Flag Football?</h2>
              <p>
                O Flag Football oferece toda a profundidade estratégica e o desafio atlético do futebol americano tradicional, sem o contato físico. É a maneira perfeita de aproveitar o esporte favorito dos americanos em um ambiente seguro e inclusivo.
              </p>
              <p>
                Seja você um atleta experiente ou esteja pegando uma bola de futebol americano pela primeira vez, nossos times de Flag Football masculino e feminino oferecem um ambiente acolhedor para jogar, competir e fazer amizades duradouras.
              </p>
              <ul className="benefits-list">
                <b><li>Seguro para todas as idades e níveis de condicionamento físico.</li></b>
                <b><li>Foque em velocidade, agilidade e estratégia.</li></b>
                <b><li>Ótimo para iniciantes e jogadores experientes.</li></b>
                <b><li>Desenvolver habilidades de trabalho em equipe e comunicação</li></b>
              </ul>
            </div>
            <div className="flag-intro-image">
              <span></span>
            </div>
          </div>
        </div>
      </section>

      {/* Leagues Section 
      <section className="leagues-section">
        <div className="container">
          <h2 className="section-title">Our Leagues</h2>
          <div className="leagues-grid">
            {leagues.map((league, index) => (
              <div key={index} className={`league-card ${league.featured ? 'featured' : ''}`}>
                <span className="league-badge">{league.badge}</span>
                <h3>{league.name}</h3>
                <p>{league.description}</p>
                <div className="league-details">
                  <div className="league-detail">
                    <strong>Schedule:</strong> {league.details.schedule}
                  </div>
                  <div className="league-detail">
                    <strong>Duration:</strong> {league.details.duration}
                  </div>
                  <div className="league-detail">
                    <strong>Format:</strong> {league.details.teamSize}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* Rules Section */}
      <section className="rules-section">
        <div className="container">
          <h2 className="section-title">Regras Básicas</h2>
          <div className="rules-grid">
            {rules.map((rule, index) => (
              <div key={index} className="rule-card">
                <div className="rule-icon">{rule.icon}</div>
                <h4>{rule.title}</h4>
                <p>{rule.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Section 
      <section className="registration-section">
        <div className="container">
          <div className="registration-content">
            <div className="registration-card">
              <h3>Ready to Play?</h3>
              <p>
                Registration is open for our upcoming season. Join as an individual
                or register your whole team. New players are always welcome!
              </p>
              <div className="registration-features">
                <div className="registration-feature">
                  <span>✓</span> All equipment provided
                </div>
                <div className="registration-feature">
                  <span>✓</span> Referee-officiated games
                </div>
                <div className="registration-feature">
                  <span>✓</span> End-of-season tournament
                </div>
              </div>
              <button className="btn btn-secondary">Register Now</button>
            </div>
          </div>
        </div>
      </section>*/}
    </div>
  );
}

export default FlagFootball;
