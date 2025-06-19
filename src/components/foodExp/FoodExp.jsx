import cn from 'classnames';
import Styles from './Styles.module.scss';

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
          <div className={Styles.tipsItem}>
            <span>02</span>
            <p className='desc'>
              Create your own recipes by mixing and matching ingredients with
              real-time suggestions.
            </p>
          </div>

          <div className={cn(Styles.tipsItem, Styles.tipsItem2)}>
            <span>01</span>
            <p className='desc'>
              Explore articles on kitchen hacks, food trends, and tips to
              enhance your cooking.
            </p>
          </div>

          <div className={Styles.tipsTegs}>
            <span>Food</span>
            <span>Crafted</span>
            <span>Catering</span>
          </div>

          <div className={Styles.tipsIcon}>
            <img src='/icons/shopping-bag.svg' alt='shopping-bag' />
          </div>
        </div>

        <div className={Styles.illustration}></div>
      </main>
    </section>
  );
};

export default FoodExp;
