import cn from 'classnames';
import Styles from './Styles.module.scss';
import TipsItem from './TipsItem';

const FoodExp = () => {
  return (
    <section className={Styles.foodExp + ' container'}>
      <header className={Styles.header}>
        <h2 className='h2'>Experience Food Like Never Before</h2>
        <p className={Styles.desc + ' desc'}>
          Step into a world of culinary innovation where every bite tells a
          story. At Savory, we redefine the art of cooking and dining.
        </p>
      </header>

      <main className={Styles.main}>
        <div className={Styles.tips}>
          <TipsItem
            num='02'
            desc='Create your own recipes by mixing and matching ingredients with
              real-time suggestions.'
            className={Styles.tipsItem}
          />

          <TipsItem
            num='01'
            desc='Explore articles on kitchen hacks, food trends, and tips to
              enhance your cooking.'
            className={cn(Styles.tipsItem, Styles.tipsItem2)}
          />

          <div className={Styles.tipsTegs}>
            <span>Food</span>
            <span>Crafted</span>
            <span>Catering</span>
          </div>

          <button className={Styles.tipsIcon}>
            <img src='/icons/shopping-bag.svg' alt='shopping-bag' />
          </button>
        </div>

        <div className={Styles.illustration}></div>
      </main>
    </section>
  );
};

export default FoodExp;
