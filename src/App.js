import logo from './logo.svg';
import './App.css';
import { Header } from './components/layouts/header';
import Footer from './components/layouts/footer';
import { Slider } from './components/pages/slider';
import { Trending } from './components/pages/trending';
import { MostViewed } from './components/pages/mostViewed';

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Trending />

      <MostViewed />
      <Footer />
    </div>
  );
}

export default App;
