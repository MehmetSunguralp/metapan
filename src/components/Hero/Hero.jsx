import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Button from "../Button/Button";
import { heroImage } from "../../staticAssets";
import styles from "./Hero.module.scss";

const Hero = () => {
	const [ref, inView] = useInView({
		threshold: 0.1,
		triggerOnce: true,
	});

	const textVariants = {
		hidden: { opacity: 0, x: -50 },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.6,
				staggerChildren: 0.2,
			},
		},
	};

	const imageVariants = {
		hidden: { opacity: 0, x: 50 },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.6,
			},
		},
	};

	return (
		<section className={styles.hero} ref={ref}>
			<div className={styles.container}>
				<motion.div className={styles.content} variants={textVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
					<motion.h1 className={styles.mainHeading} variants={textVariants}>
						METAPAN
					</motion.h1>
					<motion.h2 className={styles.subheading} variants={textVariants}>
						Yenilikçi Yapı Çözümleri!
					</motion.h2>
					<motion.p className={styles.description} variants={textVariants}>
						İnşaat sektöründe yaşanan uluslararası gelişmeleri Türkiye'ye taşıyor, sektörün geleceğini bugünden kuruyoruz.
					</motion.p>
					<motion.div variants={textVariants}>
						<Button variant="dark" size="large" onClick={() => (globalThis.location.href = "#projects")}>
							Projelere Göz Atın <span className={styles.arrow}>▸</span>
						</Button>
					</motion.div>
				</motion.div>

				<motion.div
					className={styles.imageContainer}
					variants={imageVariants}
					initial="hidden"
					animate={inView ? "visible" : "hidden"}
				>
					<div className={styles.mainImage}>
						<img src={heroImage} alt="Metapan Yapı Çözümleri" />
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Hero;
