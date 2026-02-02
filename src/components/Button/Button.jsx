import { motion } from 'framer-motion';
import styles from './Button.module.scss';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  onClick,
  className = '',
  ...props 
}) => {
  return (
    <motion.button
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;