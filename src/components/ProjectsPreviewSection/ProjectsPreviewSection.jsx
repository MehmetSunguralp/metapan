import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { project1, project2, project3 } from "../../staticAssets";
import styles from "./ProjectsPreviewSection.module.scss";

const ProjectsPreviewSection = () => {
	const [ref, inView] = useInView({
		threshold: 0.1,
		triggerOnce: true,
	});

	const projects = [
		{
			id: 1,
			image: project1,
			title: "Çelik Konstrüksiyon",
		},
		{
			id: 2,
			image: project2,
			title: "Betonarme",
		},
		{
			id: 3,
			image: project3,
			title: "Tiny House",
		},
	];

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.15,
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
		<section className={styles.projectsPreviewSection} ref={ref}>
			<div className={styles.container}>
				<motion.div
					className={styles.header}
					initial={{ opacity: 0, y: -20 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}
				>
					<h2 className={styles.title}>
						<span className={styles.titleLine}></span> Projelerimizi Keşfedin
					</h2>
					<Link to="/projects" className={styles.viewAllLink}>
						Tüm Projeleri Gör<span className={styles.arrow}>▸</span>
					</Link>
				</motion.div>

				<motion.div className={styles.grid} variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
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
							</div>
							<h3 className={styles.projectTitle}>{project.title}</h3>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default ProjectsPreviewSection;
