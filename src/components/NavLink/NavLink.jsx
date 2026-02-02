import { motion } from 'framer-motion';
import styles from './NavLink.module.scss';

const NavLink = ({ children, href, isActive = false, onClick }) => {
  return (
    <motion.a
      href={href}
      className={`${styles.navLink} ${isActive ? styles.active : ''}`}
      onClick={onClick}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.a>
  );
};

export default NavLink;