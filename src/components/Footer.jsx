import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Sobre o Brasilia Wizards</h4>
            <p>
              Uma organização multiesportiva de excelência dedicada ao futebol americano, flag fooball e e-sports. Junte-se à nossa comunidade e faça parte da nossa História.
            </p>
            <div className="footer-social">
              
              <a href="https://www.instagram.com/brasiliawizards/" className="social-link" aria-label="Instagram"></a>
              
            </div>
          </div>

          <div className="footer-section">
            <h4>Links rápidos</h4>
            <ul className="footer-links">
              <li><Link to="/">Início</Link></li>
              <li><Link to="/history">Nossa História</Link></li>
              <li><Link to="/american-football">Futebol Americano</Link></li>
              <li><Link to="/flag-football">Flag Football</Link></li>
              <li><Link to="/esports">E-sports</Link></li>
              <li><Link to="/sponsors">Patrocinadores</Link></li>
              <li><Link to="/Announcements">Seletiva</Link></li>
              
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contatos</h4>
            
            <p><b>Instagram: </b> @brasiliawizards</p>
            <p><b>Email: </b>brasilia.wizards@gmail.com</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {currentYear} <span>Brasília Wizards</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
