import Card from './components/card/Card';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import UnderCard from './components/under_card/UnderCard';
import './scss/styles.css';

function App() {
  return (
    <div className='bkgrnd'>
      <div className='wrapper'>
        <div className='section1'>
          <Nav />
          <Header />
        </div>
        <UnderCard />
        <Card />
        <Footer />
      </div>
    </div>

  );
}

export default App;
