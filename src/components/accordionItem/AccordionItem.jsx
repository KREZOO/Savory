import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Styles from './Styles.module.scss';

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${Styles.accordionItem} ${isOpen ? Styles.open : ''}`}>
      <button className={Styles.header} onClick={() => setIsOpen(!isOpen)}>
        <span>{question}</span>
        <motion.img
          className={Styles.icon}
          src='/icons/arrow-down.svg'
          alt='arrow'
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key='content'
            className={Styles.content + ' desc'}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <p>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AccordionItem;
