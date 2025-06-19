import AccordionItem from '../accordionItem/AccordionItem';
import Styles from './Styles.module.scss';

const FoodDiscovery = () => {
  const questions = [
    {
      question: 'How do you make meals special?',
      answer:
        'I use fresh ingredients, bold flavors, and a touch of creativity to elevate every dish.',
    },
    {
      question: 'What’s your dream dish to cook?',
      answer:
        'My dream dish to cook is a perfectly tender Beef Wellington. It’s a combination of skill, precision, and elegance.',
    },
    {
      question: 'What’s your go-to ingredient?',
      answer: 'Garlic — it adds depth and aroma to almost any savory dish.',
    },
    {
      question: 'Which cuisine inspires you?',
      answer: 'Mediterranean cuisine — fresh, vibrant, and healthy.',
    },
  ];

  return (
    <section className={Styles.foodDiscovery + ' container'}>
      <header className={Styles.header}>
        <h2 className='h2'>Your Journey to Gastronomic Bliss</h2>
        <div className={Styles.desc + ' desc'}>
          <p>
            Step into a world of culinary innovation where every bite tells a
            story. At Savory, we redefine the art of cooking and dining.
          </p>

          <a href='#'>Learn More</a>
        </div>
      </header>

      <main className={Styles.main}>
        <div className={Styles.illustration}></div>

        <div className={Styles.questions}>
          {questions.map((item, index) => (
            <AccordionItem key={index} {...item} />
          ))}
        </div>
      </main>
    </section>
  );
};

export default FoodDiscovery;
