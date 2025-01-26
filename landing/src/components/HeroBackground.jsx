import PropTypes from 'prop-types';
import '@/styles/HeroBackground.css';

function HeroBackground({ children }) {
  return (
    <div className="hero-background">
      <div className='image-container'>
          <img src="/imgs/home-background.jpeg" alt="Personas interactuando con el mismo computador portatil" />
      </div>
        {children}
    </div>
  );
}

HeroBackground.propTypes = {
    children: PropTypes.node
}


export default HeroBackground;