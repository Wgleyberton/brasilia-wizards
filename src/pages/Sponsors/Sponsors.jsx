import './Sponsors.css';
import kickball from '../../images/kickball.png';
import admguara from '../../images/admguara.png';
import escape from '../../images/escape.png';

function Sponsors() {
  const platinumSponsors = [
    {
      name: 'TechCorp Industries',
      description: 'Leading technology solutions provider supporting sports innovation and athlete development.',
      logo: 'TechCorp Logo',
    },
  ];

  const goldSponsors = [
    {
      name: 'City Bank Financial',
      description: 'Community-focused banking supporting local sports programs.',
      logo: 'City Bank Logo',
    },
  ];

  const silverSponsors = [
    { name: '60 minutos Escape', logo: '', image: escape},
    { name: 'Administração Guará', logo: '', image: admguara },
    { name: 'Kickball', logo: '', image: kickball },
  ];

  const benefits = [
    'Logo placement on team uniforms and equipment',
    'Recognition at all home games and events',
    'Social media promotion and mentions',
  ];

  return (
    <div className="sponsors-page">
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1>Patrocinadores</h1>
          <p>
            Apoie o nosso time, seja um dos nossos patrocinadores e ajude o Brasília Wizards a crescer, faça parte da nossa história.
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="sponsors-intro">
        <div className="container">
          <div className="sponsors-intro-content">
            <h2>Patrocínios e Colaboradores</h2>
            <p>
              Nossos patrocinadores são mais do que simples apoiadores – são parceiros em nossa missão de desenvolver atletas e construir uma comunidade. Suas contribuições nos permitem oferecer treinamento, equipamentos e oportunidades de alto nível para atletas de todos os níveis.
            </p>
            <p>
              Temos orgulho de sermos parceiros de empresas que compartilham nossos valores de excelência, integridade e engajamento comunitário.
              <br />
              <h1>Seja um dos nossos parceiros!</h1>
            </p>
          </div>
        </div>
      </section>

      {/* Platinum Sponsors 
      <section className="platinum-sponsors">
        <div className="container">
          <div className="sponsor-tier-label">
            <span className="tier-badge platinum">Platinum Partners</span>
          </div>
          <div className="platinum-grid">
            {platinumSponsors.map((sponsor, index) => (
              <div key={index} className="sponsor-card platinum">
                <div className="sponsor-logo">
                  <span>{sponsor.logo}</span>
                </div>
                <div className="sponsor-content">
                  <h4>{sponsor.name}</h4>
                  <p>{sponsor.description}</p>
                  <a href="#" className="sponsor-link">Visit Website →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>*/}

      {/* Silver Sponsors*/}
      <section className="silver-sponsors">
        <div className="container">
          <div className="sponsor-tier-label">
            <span className="tier-badge silver">Apoiadores</span>
          </div>
          <div className="silver-grid">
            {silverSponsors.map((sponsor, index) => (
              <div key={index} className="silver-card">
                <div className="silver-logo" 
                  style={{
                    backgroundImage: `url(${sponsor.image})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                  }}
                >
                 
                </div>
                <h5>{sponsor.name}</h5>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gold Sponsors 
      <section className="gold-sponsors">
        <div className="container">
          <div className="sponsor-tier-label">
            <span className="tier-badge gold">Patrocinadores</span>
          </div>
          <div className="gold-grid">
            {goldSponsors.map((sponsor, index) => (
              <div key={index} className="sponsor-card gold">
                <div className="sponsor-logo">
                  <span>{sponsor.logo}</span>
                </div>
                <div className="sponsor-content">
                  <h4>{sponsor.name}</h4>
                  <p>{sponsor.description}</p>
                  <a href="#" className="sponsor-link">Visit Website →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>*/}



      {/* Become a Sponsor 
      <section className="become-sponsor">
        <div className="container">
          <div className="become-sponsor-content">
            <div className="become-sponsor-grid">
              <div className="become-sponsor-text">
                <h2>Become a <span>Sponsor</span></h2>
                <p>
                  Join our family of sponsors and make a meaningful impact in
                  the lives of young athletes. Your support helps us provide
                  quality programs, equipment, and opportunities for our community.
                </p>
                <p>
                  We offer various sponsorship packages to fit your budget and
                  marketing goals. Let's work together to build something amazing!
                </p>
              </div>
              <div className="sponsor-benefits">
                <h3>Sponsor Benefits</h3>
                <ul className="benefits-list">
                  {benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>*/}

      {/* Contact Section */}
      <section className="contact-sponsors">
        <div className="container">
          <div className="contact-content">
            <h2>Entre em Contato</h2>
            <p>
              Tem interesse em se tornar um patrocinador? Entre em contato com nossa equipe de parcerias para saber mais sobre as oportunidades disponíveis.
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <strong>Email:</strong> brasilia.wizards@gmail.com
              </div>
              <div className="contact-item">
                <strong>Contato:</strong> (61) 98301-7356
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sponsors;
