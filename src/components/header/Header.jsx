import Styles from './Styles.module.scss';

const Header = () => {
  return (
    <div className='container'>
      <header className={Styles.header}>
        <div className={Styles.logo}>
          <img src="/icons/header/logo.svg" alt="logo"></img>
          <span>Savory</span>
        </div>
        <nav className={Styles.nav}>
          <ul className={Styles.menu}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Foods</a>
            </li>
          </ul>
        </nav>
        <div className={Styles.search}>
          <input placeholder='Searching for......' className={Styles.input}></input>
          <img src="/icons/header/search.svg" alt="search"></img>
        </div>
        <div className={Styles.buttons}>
          <button><img src="/icons/header/shopping-cart.svg" alt="shopping-cart"></img></button>
          <button><img src="/icons/header/sell.svg" alt="sell"></img></button>
          <button><img src="/icons/header/account.svg" alt="account"></img></button>
        </div>
      </header>
    </div>
  );
};

export default Header;
