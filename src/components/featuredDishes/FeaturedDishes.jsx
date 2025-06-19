import Styles from './Styles.module.scss';

const FeaturedDishes = () => {
  return (
    <section className={Styles.featuredDishes + ' container'}>
      <header className={Styles.header}>
        <h2 className='h2'>Deliciously Crafted for Food Lovers</h2>
        <p className={Styles.desc + ' desc'}>
          Welcome to a haven for those who live to eat and love to cook. At
          Savory, every recipe is a masterpiece, thoughtfully designed.
        </p>
      </header>

      <main className={Styles.main}>
        <div className={Styles.service}>
          <div className={Styles.badge}>
            <h4 className={Styles.badgeTitle}>Interactive Recipe Builder</h4>

            <img
              className={Styles.badgeIcon}
              src='/icons/editor-choice.svg'
              alt='editor'
            />

            <div className={Styles.badgeDesc + ' desc'}>
              Create your own recipes by mixing and matching.
            </div>
          </div>
          <div className={Styles.badgeImg}></div>
        </div>

        <div className={Styles.recomm}>
          <h3 className={Styles.recommTitle}>
            Nutrition and Wellness Guidance
          </h3>

          <div className={Styles.recommDesc + ' desc'}>
            <img
              src='/icons/arrow-right-02.svg'
              className={Styles.icon}
              alt='arrow-right'
            />

            <p>
              Collaborate with nutritionists to provide healthy recipes and
              dietary advice.
            </p>
          </div>

          <div className={Styles.avatarsSection}>
            <div className={Styles.avatars}>
              <img src='/images/ava-01.png' alt='User 1' />
              <img src='/images/ava-02.png' alt='User 2' />
              <img src='/images/ava-03.png' alt='User 3' />
              <img src='/images/ava-01.png' alt='User 4' />
              <img src='/images/ava-02.png' alt='User 5' />
            </div>

            <div className={Styles.stats}>
              <p className={Styles.statsNumber}>75+</p>
              <span className='desc'>Trusted Clients</span>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default FeaturedDishes;
