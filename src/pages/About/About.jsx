import { Helmet } from "react-helmet-async";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";
import { concreteBg, project4 } from "../../staticAssets";
import styles from "./About.module.scss";

const About = () => {
	const { strings, language } = useLanguage();
	const [ref, inView] = useInView({
		threshold: 0.1,
		triggerOnce: true,
	});

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
			},
		},
	};

	return (
		<>
			<Helmet key={language}>
				<title>{strings.pages.about.title}</title>
				<meta name="description" content={strings.pages.about.description} />
				<meta property="og:title" content={strings.pages.about.title} />
				<meta property="og:description" content={strings.pages.about.description} />
				<meta property="og:type" content="website" />
				<meta property="og:image" content="https://www.tedd.com.tr/wp-content/uploads/2026/02/logo.png" />
			</Helmet>
			<section className={styles.aboutPage} ref={ref}>
			<div className={styles.container}>
				<motion.div
					className={styles.content}
					variants={containerVariants}
					initial="hidden"
					animate={inView ? "visible" : "hidden"}
				>
					<div className={styles.leftColumn}>
						<motion.h1 className={styles.title} variants={itemVariants}>
							{strings.pages.about.pageTitle}
						</motion.h1>
						<motion.p className={styles.description} variants={itemVariants}>
							{strings.pages.about.descriptionText}
						</motion.p>
					</div>

					<div className={styles.rightColumn}>
						<motion.div className={styles.imageWrapper} variants={itemVariants}>
							<img src={concreteBg} alt="Metapan İç Mekan Uygulaması" />
						</motion.div>
					</div>
				</motion.div>

				<motion.div
					className={styles.bottomSection}
					variants={containerVariants}
					initial="hidden"
					animate={inView ? "visible" : "hidden"}
				>
					<motion.div className={styles.bottomLeftImage} variants={itemVariants}>
						<img src={project4} alt="Metapan Dış Mekan Uygulaması" />
					</motion.div>

					<motion.div className={styles.bottomRightText} variants={itemVariants}>
						<h2 className={styles.visionTitle}>{strings.pages.about.vision.title}</h2>
						<p className={styles.visionText}>
							{strings.pages.about.vision.text}
						</p>
						<h2 className={styles.missionTitle}>{strings.pages.about.mission.title}</h2>
						<p className={styles.missionText}>
							{strings.pages.about.mission.text}
						</p>
					</motion.div>
				</motion.div>
			</div>
		</section>
		</>
	);
};

export default About;
