import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import styles from './ProjectsSection.module.scss';

const ProjectsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const projects = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    image: `https://via.placeholder.com/400x300?text=Project+${i + 1}`,
    title: `Proje ${i + 1}`,
  }));

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="projects" className={styles.projectsSection} ref={ref}>
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Projelerimiz
        </motion.h2>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className={styles.projectCard}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.imageWrapper}>
                <img src={project.image} alt={project.title} />
                <div className={styles.overlay}>
                  <span className={styles.projectTitle}>{project.title}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;