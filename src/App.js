import Home from './pages/Home';
import './App.css';
import './BurgerMenuStyles.css'
import DropBox from './pages/DropBox';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <div id="outer-container">
      <Home />
      <main id="page-wrap" className="App">
        <DropBox />
        <AboutUs />
      </main> 
    </div>
  );
}

export default App;
