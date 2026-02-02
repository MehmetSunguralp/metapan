import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { concreteBg } from "../../staticAssets";
import styles from "./TestimonialSection.module.scss";

const TestimonialSection = () => {
	const [ref, inView] = useInView({
		threshold: 0.2,
		triggerOnce: true,
	});

	return (
		<section className={styles.testimonialSection} ref={ref}>
			<div className={styles.backgroundImage} style={{ backgroundImage: `url(${concreteBg})` }}></div>
			<div className={styles.overlay}></div>
			<div className={styles.container}>
				<motion.div
					className={styles.content}
					initial={{ opacity: 0, y: 30 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8 }}
				>
					<div className={styles.quoteMark}>"</div>
					<blockquote className={styles.quote}>
						Duvar panelleri, yaşam alanlarınıza estetik ve işlevsellik kazandırmanın en şık yollarından biridir. Geniş ürün
						yelpazemiz, farklı renk, desen ve doku seçenekleriyle her tarza hitap eder.
					</blockquote>
				</motion.div>
			</div>
		</section>
	);
};

export default TestimonialSection;