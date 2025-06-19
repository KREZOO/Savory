import Header from './components/header/Header.jsx';
import Hero from './components/hero/hero.jsx';
import FeaturedDishes from './components/featuredDishes/featuredDishes.jsx';

import './assets/styles/global.scss';

function App() {
  return (
    <main className='main'>
      <Header></Header>
      <Hero></Hero>
      <FeaturedDishes></FeaturedDishes>
    </main>
  );
}

export default App;
