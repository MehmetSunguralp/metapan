import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { project1, project2, project3, project4, project5, project6 } from "../../staticAssets";
import ImageModal from "../../components/ImageModal/ImageModal";
import styles from "./Projects.module.scss";

const Projects = () => {
	const [selectedProject, setSelectedProject] = useState(null);
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
		{
			id: 4,
			image: project4,
			title: "Ahşap İskelet",
		},
		{
			id: 5,
			image: project5,
			title: "Çelik-Ahşap Yapı",
		},
		{
			id: 6,
			image: project6,
			title: "Otel",
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
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
			},
		},
	};

	return (
		<>
			<Helmet>
				<title>Projelerimiz | Tedd</title>
				<meta name="description" content="Metapan duvar paneli uygulamaları ve projelerimiz. Çelik konstrüksiyon, betonarme, tiny house ve daha fazlası." />
				<meta property="og:title" content="Projelerimiz | Tedd" />
				<meta property="og:description" content="Metapan duvar paneli uygulamaları ve projelerimiz. Çelik konstrüksiyon, betonarme, tiny house ve daha fazlası." />
				<meta property="og:type" content="website" />
				<meta property="og:image" content="https://www.tedd.com.tr/wp-content/uploads/2026/02/logo.png" />
			</Helmet>
			<section className={styles.projectsPage} ref={ref}>
			<div className={styles.container}>
				<motion.h1
					className={styles.title}
					initial={{ opacity: 0, y: -20 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}
				>
					Projelerimiz
				</motion.h1>

				<motion.div className={styles.grid} variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
					{projects.map((project) => (
						<motion.div
							key={project.id}
							className={styles.projectCard}
							variants={itemVariants}
							whileHover={{ scale: 1.02 }}
							transition={{ duration: 0.3 }}
						>
							<div className={styles.imageWrapper} onClick={() => setSelectedProject(project)}>
								<img src={project.image} alt={project.title} />
								<div className={styles.overlay}>
									<h3 className={styles.projectTitle}>{project.title}</h3>
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>

			{selectedProject && (
				<ImageModal
					isOpen={!!selectedProject}
					onClose={() => setSelectedProject(null)}
					imageUrl={selectedProject.image}
					imageAlt={selectedProject.title}
				/>
			)}
		</section>
		</>
	);
};

export default Projects;
