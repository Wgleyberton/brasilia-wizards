import './Esports.css';
import esports1Img from '../../images/esports1.jpg';
import esports2Img from '../../images/esports2.jpg';
import esports3Img from '../../images/esports3.jpg';
import esports4Img from '../../images/esports4.jpg';

function Esports() {
  const games = [
    { name: 'League of Legends', genre: 'MOBA', description: 'Torneio dos Lobos Liga GG Março de 2022', image: esports3Img },
    { name: 'League of Legends', genre: 'MOBA', description: 'Série C Liga GG Agosto de 2022', image: esports1Img },
    { name: 'Pokemon Unite', genre: 'MOBA', description: 'Ceará Revelation Cup Agosto de 2022', image: esports2Img },
    { name: 'League of Legends', genre: 'MOBA', description: 'Vice Campeão Empoliga Major A Novembro 2022', image: esports4Img },
  ];

  const roster = [
    { name: 'Alex Storm', tag: 'ThunderStrike', role: 'Team Captain / ADC', initials: 'AS' },
    { name: 'Maria Chen', tag: 'ShadowBlade', role: 'Mid Laner', initials: 'MC' },
    { name: 'Jake Wilson', tag: 'IronWall', role: 'Support', initials: 'JW' },
    { name: 'Sam Rivera', tag: 'FlashPoint', role: 'Jungler', initials: 'SR' },
    { name: 'Chris Lee', tag: 'PhantomX', role: 'Top Laner', initials: 'CL' },
  ];

  const tournaments = [
    {
      name: 'Regional Championship',
      date: 'March 15-17, 2025',
      description: 'Annual regional tournament featuring top teams from the area.',
      prize: '$5,000 Prize Pool',
    },
    {
      name: 'Spring Invitational',
      date: 'April 20, 2025',
      description: 'Invitation-only tournament for qualifying teams.',
      prize: '$2,500 Prize Pool',
    },
    {
      name: 'Community Cup',
      date: 'May 10-11, 2025',
      description: 'Open tournament for community members of all skill levels.',
      prize: '$1,000 Prize Pool',
    },
  ];

  return (
    <div className="esports-page">
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1>Brasília Wizards E-sports</h1>
          <p>
            Compita no cenário digital com nosso programa de eSports em expansão. Jogos profissionais, torneios e eventos da comunidade.
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="esports-intro">
        <div className="container">
          <div className="esports-intro-grid">
            <div className="esports-intro-content">
              <h2>Bem vindo ao Brasília Wizards E-sports</h2>
              <p>
                Durante a pandemia de covid-19 impossibilitados de praticar o futebol americano que deu origem ao time, O Brasília Wizards decidiu dar inicio na sua caminhada nos E-sports, com lineups de League of Legends, Pokémon United e Counter Strike competimos em alto nível, com resultados relevantes mesmo sem patrocínios e competindo com times já consagrados no cenário.
              </p>
              <p>
                O projeto se encontra em reformulação e em busca de apoio financeiro para que um dia o mago possa retornar e realizar novos grandes feitos.
              </p>
            </div>
            <div className="esports-intro-image">
              <span></span>
            </div>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section className="games-section">

        <div className="container">
          <h2 className="section-title">Títulos do Brasília Wizards E-sports</h2>
          <div className="games-grid">
            {games.map((game, index) => (
              <div key={index} className="game-card">
                <div
                  className="game-image"
                  style={{ backgroundImage: `url(${game.image})` }}
                ></div>
                <div className="game-content">
                  <span className="game-genre">{game.genre}</span>
                  <h4>{game.name}</h4>
                  <p>{game.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roster Section 
      <section className="roster-section">
        <div className="container">
          <h2 className="section-title">Featured Roster</h2>
          <div className="roster-grid">
            {roster.map((player, index) => (
              <div key={index} className="player-card">
                <div className="player-avatar">{player.initials}</div>
                <h4>{player.name}</h4>
                <p className="player-tag">@{player.tag}</p>
                <p className="player-role">{player.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      Tournaments Section 
      <section className="tournaments-section">
        <div className="container">
          <h2 className="section-title">Upcoming Tournaments</h2>
          <div className="tournaments-grid">
            {tournaments.map((tournament, index) => (
              <div key={index} className="tournament-card">
                <span className="tournament-date">{tournament.date}</span>
                <h4>{tournament.name}</h4>
                <p>{tournament.description}</p>
                <div className="tournament-prize">
                  <span>Prize:</span> {tournament.prize}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      Streaming Section 
      <section className="streaming-section">
        <div className="container">
          <div className="streaming-content">
            <h2>Watch Us <span>Live</span></h2>
            <p>
              Catch all our matches and tournaments live on your favorite streaming platforms.
              Follow us for schedules and updates!
            </p>
            <div className="streaming-platforms">
              <a href="#" className="platform-link">Twitch</a>
              <a href="#" className="platform-link">YouTube Gaming</a>
              <a href="#" className="platform-link">Discord</a>
            </div>
          </div>
        </div>
      </section>
      */}

    </div>
  );
}

export default Esports;
