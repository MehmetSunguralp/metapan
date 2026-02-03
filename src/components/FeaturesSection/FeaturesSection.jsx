import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";
import styles from "./FeaturesSection.module.scss";
import verimlilikIcon from "../../assets/custom_icons/verimlilik.png";
import hafifIcon from "../../assets/custom_icons/hafif.png";
import yalitimIcon from "../../assets/custom_icons/yalitim.png";

const FeaturesSection = () => {
	const { strings } = useLanguage();
	const [ref, inView] = useInView({
		threshold: 0.1,
		triggerOnce: true,
	});

	const icons = [verimlilikIcon, hafifIcon, yalitimIcon];
	const features = strings.features.items.map((feature, index) => ({
		...feature,
		id: index + 1,
		icon: icons[index],
	}));

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
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
			},
		},
	};

	return (
		<section className={styles.featuresSection} ref={ref}>
			<div className={styles.container}>
				<motion.div className={styles.grid} variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
					{features.map((feature) => (
						<motion.div key={feature.id} className={styles.featureCard} variants={itemVariants}>
							<div className={styles.iconWrapper}>
								<img src={feature.icon} alt={feature.title} />
							</div>
							<h3 className={styles.title}>{feature.title}</h3>
							<p className={styles.description}>{feature.description}</p>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default FeaturesSection;
