import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import Button from '../Button/Button';
import { ctaBg } from '../../staticAssets';
import styles from './CallToAction.module.scss';

const CallToAction = () => {
  const navigate = useNavigate();
  const { strings } = useLanguage();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section className={styles.callToAction} ref={ref}>
      <div className={styles.backgroundImage} style={{ backgroundImage: `url(${ctaBg})` }}></div>
      <div className={styles.overlay}></div>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {strings.cta.title.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              {index < strings.cta.title.split("\n").length - 1 && <br />}
            </span>
          ))}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Button variant="primary" size="large" onClick={() => navigate('/contact')}>
            {strings.cta.button}
            <span className={styles.arrow}>▸</span>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CallToAction;