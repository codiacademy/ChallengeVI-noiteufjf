import { Link } from 'react-router-dom';
import { Home, Instagram, Phone, Youtube, MailIcon } from 'lucide-react';
import './footer.css';
export default function Footer() {
  return (
    <footer>
      <section id="footer-menu">
        <h2>Menu</h2>
        <div>
          <Link to="/" className="links">
            Home
          </Link>
        </div>
        <div>
          <Link to="/projects" className="links">
            Projetos
          </Link>
        </div>
        <div>
          <Link to="/team" className="links">
            Equipe
          </Link>
        </div>
      </section>

      <section id="footer-social-media">
        <h2>Redes</h2>
        <div>
          <Instagram />
          <Link
            to="https://www.instagram.com/codi.academy/"
            target="_blank"
            className="links"
          >
            Instagram
          </Link>
        </div>
        <div>
          <Youtube />
          <Link
            to="https://www.youtube.com/@CodiAcademytv"
            target="_blank"
            className="links"
          >
            Youtube
          </Link>
        </div>
      </section>

      <section id="footer-fale-conosco">
        <h2>Fale Conosco</h2>
        <div>
          <p>
            <Home /> CRITT - Centro Regional de Inovação e Transferência de
            Tecnologia. Campus Universitário, s/n - martelos. Juiz de Fora. MG.
          </p>
          <p>
            <Phone /> (32) 98496-5803 <br />
          </p>
          <p>
            <MailIcon />
            suporte@estudiomagic.com
          </p>
        </div>
      </section>
    </footer>
  );
}
