import Header from './components/Header.jsx';
import FeaturedDishes from './components/featuredDishes/featuredDishes.jsx';

import './assets/styles/global.scss';

function App() {
  return (
    <main className='main'>
      <Header></Header>
      <FeaturedDishes></FeaturedDishes>
    </main>
  );
}

export default App;
