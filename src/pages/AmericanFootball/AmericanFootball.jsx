import './AmericanFootball.css';

function AmericanFootball() {
  const teams = [
    {
      name: 'Eagles Varsity',
      level: 'Senior',
      description: 'Our flagship team competing at the highest regional level with experienced players.',
      image: 'Varsity Team Photo',
    },
    {
      name: 'Eagles Junior',
      level: 'U-18',
      description: 'Developing the next generation of talent with focused training and competitive play.',
      image: 'Junior Team Photo',
    },
    {
      name: 'Eagles Youth',
      level: 'U-14',
      description: 'Foundation program teaching fundamentals and building love for the sport.',
      image: 'Youth Team Photo',
    },
  ];

  const schedule = [
    { date: 'Não definido, 2026', opponent: 'Não definido', location: 'Não definido', time: 'Não definido', status: 'Aguardando' },
    
  ];

  const coaches = [
    { name: 'Coach Mike Johnson', role: 'Head Coach', bio: '15 years of coaching experience, former professional player.' },
    { name: 'Coach Sarah Williams', role: 'Offensive Coordinator', bio: 'Specializes in strategic offense and player development.' },
    { name: 'Coach David Lee', role: 'Defensive Coordinator', bio: 'Expert in defensive schemes and physical conditioning.' },
    { name: 'Coach Emma Brown', role: 'Youth Coach', bio: 'Passionate about developing young athletes and fundamentals.' },
  ];

  return (
    <div className="american-football-page">
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1>Futebol Americano</h1>
          <p>
            Vivencie a intensidade e a estratégia do futebol americano de contato total com nosso programa competitivo de futebol americano.
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="sport-intro">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-image">
              <span></span>
            </div>
            <div className="intro-content">
              <h2>O Brasília Wizards</h2>
              <p>
                Nosso programa de futebol americano é construído sobre os pilares da disciplina, trabalho em equipe e excelência atlética. Competimos em diversos níveis, desde o desenvolvimento até a competição nacional, oferecendo oportunidades para atletas de todas as idades e níveis de habilidade.
              </p>
              <p>
               
              </p>
              <div className="intro-stats">
                <div className="stat-item">
                  <div className="stat-number">Modalidades</div>
                  <div className="stat-label">Flag Football e Full Pads</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">Atletas</div>
                  <div className="stat-label">Ativos</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">10</div>
                  <div className="stat-label">Anos de Atividade</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teams Section 
      <section className="teams-section">
        <div className="container">
          <h2 className="section-title">Our Teams</h2>
          <div className="teams-grid">
            {teams.map((team, index) => (
              <div key={index} className="team-card">
                <div className="team-image">
                  <span>{team.image}</span>
                </div>
                <div className="team-content">
                  <span className="team-level">{team.level}</span>
                  <h4>{team.name}</h4>
                  <p>{team.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>*/}

      {/* Schedule Section */}
      <section className="schedule-section">
        <div className="container">
          <h2 className="section-title">Calendário de Jogos</h2>
          <table className="schedule-table">
            <thead>
              <tr>
                <th>Data</th>
                <th>Oponente</th>
                <th>Local</th>
                <th>Horário</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((game, index) => (
                <tr key={index}>
                  <td>{game.date}</td>
                  <td>{game.opponent}</td>
                  <td>{game.location}</td>
                  <td>{game.time}</td>
                  <td>
                    <span className={`match-status ${game.status}`}>
                      {game.status === 'upcoming' ? 'Upcoming' : 'Aguardando'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Coaching Staff Section 
      <section className="coaching-section">
        <div className="container">
          <h2 className="section-title">Comissão Técnica</h2>
          <div className="coaching-grid">
            {coaches.map((coach, index) => (
              <div key={index} className="coach-card">
                <div className="coach-avatar">Photo</div>
                <h4>{coach.name}</h4>
                <p className="coach-role">{coach.role}</p>
                <p>{coach.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}
    </div>
  );
}

export default AmericanFootball;
