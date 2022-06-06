import logo from '../logo.svg';
import './Site.css';
import '../global.css';
import NavBar from './NavBar';
import Hero from './Hero';
import PortfolioGrid from './PortfolioGrid';
import About from './About';

function Site() {
  return (
    <>
    <div class="Container">
      <NavBar />
      <Hero />      
      <PortfolioGrid />
      <About />
    </div>

    </>
  );
}

export default Site;
