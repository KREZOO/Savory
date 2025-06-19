import Styles from './Styles.module.scss';

const Hero = () => {
    return (
        <section className={Styles.hero + ' container'}>
            <div className={Styles.leftColumn}>
                <span className={Styles.span01}>Culinary</span>
                <h2 className='h2'>Elevate Your Culinary Experience</h2>
                <div className={Styles.description}>
                    <img src='/icons/arrow-right-03.svg' className={Styles.icon01} alt='arrow-right'></img>
                    <p className='desc'>Unleash your inner chef and dive into a world of exceptional flavors. Discover the perfect blend of modern culinary techniques.</p>
                </div>
                <img src='/icons/shopping-bag.svg' className={Styles.icon02} alt='shopping-bag'></img>
                <div className={Styles.getStarted}>
                    <span className={Styles.span02}>Get Started</span>
                    <div className={Styles.watch}>
                        <img src='/icons/hero/motion-play.svg' className={Styles.play} alt='play'></img>
                        <p>Watch a Video</p>
                    </div>
                </div>
                <div className={Styles.foodPhotoServices}>
                    <div className={Styles.smallPreviewImg}></div>
                    <div className={Styles.foodPhotoServicesDesc}>
                        <h3 className={Styles.h3}>Food Photography <br></br> Services</h3>
                        <div className={Styles.more}>
                            <p>Learn More</p>
                            <img src='/icons/arrow-right.svg' className={Styles.icon03} alt='arrow-right'></img>
                        </div>
                    </div>
                </div>
                <div className={Styles.scroll}>
                    <div className={Styles.scrollDesc}>
                        <p>Scroll</p>
                        <p>Down</p>
                    </div>
                    
                    <img src='/icons/hero/double-arrow-down.svg' className={Styles.icon04} alt='double-arrow-down'></img>
                </div>
                
            </div>
            <div className={Styles.rightColumn}>
                <div className={Styles.previewImg}>
                    <div className={Styles.previewBanner01}>
                        <div className={Styles.imgInner01}>
                            <img src='/icons/hero/fork-spoon.svg' className={Styles.imgBanner01} alt='fork-spoon'></img>
                        </div>
                        <div className={Styles.bannerDesc01}>
                            <p>Meal Planning</p>
                            <p>Assistance</p>
                        </div>
                    </div>
                    <div className={Styles.previewBanner02}>
                        <div className={Styles.imgInner02}>
                            <img src='/icons/hero/package.svg' className={Styles.imgBanner02} alt='package'></img>
                        </div>
                        <div className={Styles.bannerDesc02}>
                            <p>Ingredient</p>
                            <p>Delivery</p>
                        </div>
                    </div>
                </div>
                <div className={Styles.previewImgDesc}>
                    <p>Cooking</p>
                    <p>Recipe</p>
                    <p>Catering</p>
                </div>
            </div>
        </section>
    )
}

export default Hero;