import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import styles from "./FeaturesSection.module.scss";
import verimlilikIcon from "../../assets/custom_icons/verimlilik.png";
import hafifIcon from "../../assets/custom_icons/hafif.png";
import yalitimIcon from "../../assets/custom_icons/yalitim.png";

const FeaturesSection = () => {
	const [ref, inView] = useInView({
		threshold: 0.1,
		triggerOnce: true,
	});

	const features = [
		{
			id: 1,
			icon: verimlilikIcon,
			title: "Eşsiz Verimlilik",
			description:
				"Hafif yalıtımlı beton bloklarla inşa etmek, geleneksel yöntemlere göre 5 kata kadar daha hızlıdır ve projelerinizi daha hızlı ve daha verimli bir şekilde tamamlamanıza olanak tanır.",
		},
		{
			id: 2,
			icon: hafifIcon,
			title: "Şaşırtıcı Hafiflik",
			description:
				"Geleneksel duvar işçiliğine kıyasla ağırlığı %46'ya varan oranda azalan yalıtımlı hafif beton blok, taşıma ve nakliyeyi kolaylaştırarak inşaatı daha çevik ve ekonomik hale getirir.",
		},
		{
			id: 3,
			icon: yalitimIcon,
			title: "Isı Ve Akustik Yalıtım",
			description:
				"Mükemmel ısı ve ses yalıtımı özellikleri sağlayan, enerji tasarrufu ve ailenizin refahını garanti eden Hafif Yalıtımlı Beton Blok ile daha konforlu ve huzurlu bir ortamın tadını çıkarın!",
		},
	];

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
