import Card from './components/card/Card';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import UnderCard from './components/under_card/UnderCard';
import Image from './components/_shared/Image';
import './scss/styles.css';

function App() {
  return (
    <div className='bkgrnd'>
      <Image path={"/assets/bg-pattern-1.svg"} alt={" "} cln={"illustration1-nav"} />

      <div className='wrapper'>

        <div className='section1'>
          <Nav />
          <Header />
        </div>

        <div className='section2'>
          <UnderCard />
          <Card />
        </div>

        <Footer />
        
      </div>
    </div>

  );
}

export default App;
