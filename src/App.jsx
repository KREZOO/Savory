import Header from './components/header/Header.jsx';
import Hero from './components/hero/hero.jsx';
import FeaturedDishes from './components/featuredDishes/featuredDishes.jsx';
import FoodExp from './components/foodExp/FoodExp.jsx';
import FoodDiscovery from './components/foodDiscovery/FoodDiscovery.jsx';
import Footer from './components/footer/footer.jsx';

import './assets/styles/global.scss';

function App() {
  return (
    <main className='main'>
      <Header></Header>
      <Hero></Hero>
      <FeaturedDishes></FeaturedDishes>
      <FoodExp></FoodExp>
      <FoodDiscovery></FoodDiscovery>
      <Footer></Footer>
    </main>
  );
}

export default App;
