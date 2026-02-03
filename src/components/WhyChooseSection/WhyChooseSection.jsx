import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";
import styles from "./WhyChooseSection.module.scss";
import cevreciIcon from "../../assets/features_icons/cevreci.png";
import ekonomikIcon from "../../assets/features_icons/ekonomik.png";
import hafifIcon from "../../assets/features_icons/hafif.png";
import saglikliIcon from "../../assets/features_icons/saglikli.png";
import yanmazIcon from "../../assets/features_icons/yanmaz.png";
import izolasyonluIcon from "../../assets/features_icons/izolasyonlu.png";
import nefesAlirIcon from "../../assets/features_icons/nefes_alir.png";
import kolaySekillendirilebilirIcon from "../../assets/features_icons/kolay_sekillendirilebilir.png";

const WhyChooseSection = () => {
	const { strings } = useLanguage();
	const [ref, inView] = useInView({
		threshold: 0.1,
		triggerOnce: true,
	});

	const icons = [
		cevreciIcon,
		ekonomikIcon,
		hafifIcon,
		saglikliIcon,
		yanmazIcon,
		izolasyonluIcon,
		nefesAlirIcon,
		kolaySekillendirilebilirIcon,
	];

	const features = strings.whyChoose.features.map((feature, index) => ({
		...feature,
		id: index + 1,
		icon: icons[index],
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
		<section className={styles.whyChooseSection} ref={ref}>
			<div className={styles.container}>
				<motion.h2
					className={styles.title}
					initial={{ opacity: 0, y: -20 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}
				>
					<span className={styles.titleLine}></span> {strings.whyChoose.title}
				</motion.h2>

				<motion.div className={styles.grid} variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
					{features.map((feature) => (
						<motion.div key={feature.id} className={styles.featureCard} variants={itemVariants}>
							<div className={styles.leftColumn}>
								<div className={styles.iconWrapper}>
									<img src={feature.icon} alt={feature.title} />
								</div>
								<h3 className={styles.featureTitle}>
									{feature.titleLine1 ? (
										<>
											{feature.titleLine1}
											<br />
											{feature.titleLine2}
										</>
									) : (
										feature.title
									)}
								</h3>
							</div>
							<div className={styles.rightColumn}>
								<p className={styles.featureDescription}>{feature.description}</p>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default WhyChooseSection;
