import './History.css';

function History() {
  const timelineData = [
    {
      year: '2016',
      title: 'Fundação e Primeiros Passos',
      description: 'O Brasília Wizards é uma equipe de futebol americano sediada em Brasília, fundada oficialmente em 13 de novembro de 2016 por cinco atletas que já atuavam no Brasília Alligators. Buscando uma forma mais leve e descontraída de praticar o esporte, os fundadores decidiram criar um novo projeto inicialmente voltado ao flag football, modalidade sem contato em crescimento no Brasil.A ideia surgiu de maneira espontânea durante um encontro entre os amigos, quando foram definidos o nome e a identidade visual do time. As cores roxo e amarelo foram escolhidas em homenagem ao Los Angeles Lakers, enquanto o nome “Wizards” representava a proposta de uma equipe jovem, criativa e com personalidade própria. O entusiasmo e a rápida organização da equipe chamaram atenção de estudantes da Universidade de Brasília, resultando na realização de um torneio interno de flag football. O evento ampliou o interesse de novos atletas e fortaleceu o crescimento do elenco. O que começou como uma iniciativa informal entre amigos evoluiu para uma associação esportiva reconhecida, com identidade consolidada e atuação relevante na promoção do futebol americano no Distrito Federal.',
    },
    {
      year: '2017',
      title: 'Primeiro campeonato do Time Feminino e Masculino de Flag Football',
      description: 'Em 2017, o Brasília Wizards participou de sua primeira competição oficial de flag football. Com recursos financeiros limitados, os uniformes foram improvisados manualmente na véspera do torneio. O time feminino, presente desde o início do projeto, também confeccionou seus próprios uniformes, adaptando camisas pretas por falta de peças roxas suficientes.',
    },
    {
      year: '2018',
      title: 'Reconhecimento institucional e vínculo com a UnB',
      description: 'Desde os primeiros meses, o Brasília Wizards estabeleceu forte vínculo com a Universidade de Brasília (UnB), que teve papel fundamental em seu crescimento. A equipe ganhou visibilidade no campus ao organizar torneios de flag football e oferecer treinos abertos a estudantes, atraindo novos atletas e consolidando sua presença universitária. Em 2018, o Wizards foi oficialmente reconhecido como o clube de futebol americano da UnB, com estatuto registrado como associação dentro da universidade. Esse marco institucional fortaleceu a estrutura da equipe e ampliou sua base de apoio. No mesmo ano, o time inscreveu duas equipes no Campeonato Brasileiro de Flag Football 5x5: o Brasília Wizards, como equipe principal, e o UnB Wizards, formado por atletas universitários, reforçando o compromisso com a formação esportiva e a representatividade acadêmica. A formalização do vínculo garantiu acesso a espaços para treinos e eventos, facilitou a captação de atletas e possibilitou parcerias com projetos estudantis. A presença ativa no ambiente universitário também ampliou a visibilidade do time em redes sociais e eventos culturais. Com o passar dos anos, o Brasília Wizards manteve sua integração com a UnB, reunindo atletas de diferentes cursos e promovendo o esporte como ferramenta de inclusão e desenvolvimento pessoal. Esse vínculo tornou-se parte central da identidade da equipe e contribuiu para seu reconhecimento regional como um projeto esportivo formador e inovador.',
    },
    {
      year: '2019',
      title: 'A Jornada em Campo',
      description: 'Em 2019 a equipe estreou na modalidade full pads na divisão acesso da liga BFA  .',
    },
    {
      year: '2020',
      title: 'Pausa das atividades e reestruturação',
      description: 'Devido a covid-19 as atividades do time foram pausadas, nesse meio tempo houve uma total reestruturação do time na estrutura administrativa e comissão técnica.',
    },
    {
      year: '2023',
      title: 'Retomada do Projeto',
      description: 'Em 2023  Wizards retoma as atividades do time com foco em disputar o campeonato do ano seguinte.',
    },
    {
      year: '2024',
      title: 'Primeira Vitória em campeonato oficial',
      description: 'Em 2024 vem então a primeira grande conquista do time, a primeira vitória em campo contra o Brasília Templários por 16 a 14.',
    },
  ];

  const values = [
    { icon: '1', title: 'Respeito', description: 'Respeitar é reconhecer o valor do outro, tratando-o com consideração e dignidade.' },
    { icon: '2', title: 'União', description: 'União é a força que nasce quando pessoas se juntam com um propósito comum, apoiando-se mutuamente' },
    { icon: '3', title: 'Irmandade', description: 'Irmandade é o vínculo de lealdade e companheirismo que une pessoas como se fossem irmãos, mesmo sem laços de sangue.' },
  ];

  const milestones = [
    { title: '5 Championships', description: 'Across all sports divisions since our founding.', image: 'Trophy Image' },
    { title: '500+ Members', description: 'Active athletes and supporters in our community.', image: 'Team Image' },
    { title: '15 Years', description: 'Of dedication to sports and community building.', image: 'Anniversary Image' },
  ];

  return (
    <div className="history-page">
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1>Nossa história</h1>
          <p>
            Grandes histórias nascem de pequenos passos.
          </p>
        </div>
      </div>

      {/* Timeline Section */}
      <section className="history-timeline">
        <div className="container">
          <h2 className="section-title">Nossa Jornada</h2>
          <div className="timeline">
            {timelineData.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-content">
                  <span className="timeline-year">{item.year}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <div className="timeline-dot"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="history-values">
        <div className="container">
          <h2 className="section-title">Nosso Lema</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h4>{value.title}</h4>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section }
      <section className="history-milestones">
        <div className="container">
          <h2 className="section-title">Nossos marcos em imagens</h2>
          <div className="milestones-grid">
            {milestones.map((milestone, index) => (
              <div key={index} className="milestone-card">
                <div className="milestone-image">
                  <span>{milestone.image}</span>
                </div>
                <div className="milestone-content">
                  <h4>{milestone.title}</h4>
                  <p>{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}
    </div>
  );
}

export default History;
