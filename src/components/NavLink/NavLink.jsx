import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import styles from './NavLink.module.scss';

const NavLink = ({ children, href, isActive = false, onClick }) => {
  const location = useLocation();
  const isCurrentActive = location.pathname === href || isActive;

  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <Link
        to={href}
        className={`${styles.navLink} ${isCurrentActive ? styles.active : ''}`}
        onClick={onClick}
      >
        {children}
      </Link>
    </motion.div>
  );
};

export default NavLink;