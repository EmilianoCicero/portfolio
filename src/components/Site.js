import logo from '../logo.svg';
import './Site.css';
import '../global.css';
import NavBar from './NavBar';
import Hero from './Hero';
import PortfolioGrid from './PortfolioGrid';

function Site() {
  return (
    <>
    <div class="Container">
      <NavBar />
      <Hero />      
      <PortfolioGrid />
    </div>

    </>
  );
}

export default Site;
