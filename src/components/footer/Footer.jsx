import Styles from "./Styles.module.scss";
import cn from "classnames";

const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.footerUpper + " container"}>
        <div className={Styles.footerDesc}>
          <h3>Savory</h3>
          <p className={Styles.subDesc}>
            Welcome to Savory, where food meets creativity and passion.
          </p>
          <p>Modern Culinary Website</p>
        </div>
        <div className={Styles.flex}>
          <h3>Join a Newsletter</h3>
          <p>Your Email</p>
          <div className={Styles.subsription}>
            <input
              placeholder="Enter Your Email"
              className={Styles.input}
            ></input>
            <button className={Styles.subscribe}>Subscribe</button>
          </div>
          <div className={Styles.socials}>
            <a href="#" className={Styles.socialIcon}>
              <img src="/icons/footer/Dribble.svg"></img>
            </a>
            <a href="#" className={Styles.socialIcon}>
              <img src="/icons/footer/Behance.svg"></img>
            </a>
            <a href="#" className={Styles.socialIcon}>
              <img src="/icons/footer/Instagram.svg"></img>
            </a>
            <a href="#" className={Styles.socialIcon}>
              <img src="/icons/footer/Twitter.svg"></img>
            </a>
          </div>
        </div>
        <div className={Styles.flex}>
          <h3>Explore</h3>
          <ul>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Recipes</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Classes</a>
            </li>
            <li>
              <a href="#">Meal plans</a>
            </li>
            <li>
              <a href="#">Specials</a>
            </li>
          </ul>
        </div>
        <div className={Styles.flex}>
          <h3>Links</h3>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Partner</a>
            </li>
            <li>
              <a href="#">Accessibility</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={Styles.footerLower + " container"}>
        <span>Modern Culinary Website</span>
        <div className={Styles.info}>
          <div className={Styles.infoWrap}>
            <img src="icons/footer/location.svg" alt="location"></img>
            <span>
              123 Culinary Avenue <br></br> Flavor Town, FT 56789
            </span>
          </div>
          <div className={Styles.infoWrap}>
            <img src="icons/footer/email.svg" alt="email"></img>
            <span>contact@savory.com</span>
          </div>
          <div className={Styles.infoWrap}>
            <img src="icons/footer/call.svg" alt="call"></img>
            <span>+1 (555) 123-4567</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
