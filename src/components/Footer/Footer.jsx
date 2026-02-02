import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import SocialIcons from '../SocialIcons/SocialIcons';
import styles from './Footer.module.scss';

const Footer = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const contactInfo = [
    {
      icon: '📍',
      text: '975. YIL OSB MAH. 20 CAD. NO: 8 ODUNPAZARI/ ESKİŞEHİR',
    },
    {
      icon: '📞',
      text: '+90 222 711 2611',
    },
    {
      icon: '✉️',
      text: 'metapanduvarpanelleri@gmail.com',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <footer className={styles.footer} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.footerContent}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div className={styles.footerLeft} variants={itemVariants}>
            <div className={styles.logo}>
              <span className={styles.logoIcon}>T</span>
              <span className={styles.logoText}>Tedd</span>
            </div>
            <p className={styles.description}>
              Vehicula at eget a arcu neque, ultricies liquet tempus.
            </p>
          </motion.div>

          <motion.div className={styles.footerRight} variants={itemVariants}>
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className={styles.contactItem}
                variants={itemVariants}
              >
                <span className={styles.icon}>{info.icon}</span>
                <span className={styles.text}>{info.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.footerBottom}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <p className={styles.copyright}>
            © 2026 tedd.com.tr Tüm hakları saklıdır.
          </p>
          <SocialIcons className={styles.socialIcons} />
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;