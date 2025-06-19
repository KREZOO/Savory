import Header from './components/header/Header.jsx';
import FeaturedDishes from './components/featuredDishes/featuredDishes.jsx';
import FoodExp from './components/foodExp/FoodExp.jsx';

import './assets/styles/global.scss';

function App() {
  return (
    <main className='main'>
      <Header></Header>
      <FeaturedDishes></FeaturedDishes>
      <FoodExp></FoodExp>
    </main>
  );
}

export default App;
