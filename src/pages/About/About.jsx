import { Helmet } from "react-helmet-async";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { concreteBg, project4 } from "../../staticAssets";
import styles from "./About.module.scss";

const About = () => {
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
			<Helmet>
				<title>Hakkımızda | Tedd</title>
				<meta name="description" content="Metapan duvar panelleri üreticisi olarak inovasyon ve kalite odaklı yaklaşımımız." />
				<meta property="og:title" content="Hakkımızda | Tedd" />
				<meta property="og:description" content="Tedd hakkında bilgi. Metapan duvar panelleri üreticisi olarak inovasyon ve kalite odaklı yaklaşımımız." />
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
							METAPAN Hakkında
						</motion.h1>
						<motion.p className={styles.description} variants={itemVariants}>
							Metapan Duvar Panelleri, inşaat sektöründe duvarların geleneksel işlevini dönüştürmek amacıyla geliştirilmiştir.
							Çimento ve EPS (Genleştirilmiş Polistiren) karışımından üretilen bu paneller, ısı ve ses yalıtımı sağlayarak
							ek malzeme ihtiyacını ortadan kaldırır. Hafif yapısı, uygun maliyeti ve kolay uygulanabilirliği sayesinde
							işçilik maliyetlerini düşürür ve taşıyıcı elemanlar üzerindeki yükü azaltarak yapıların dayanıklılığını
							artırır.
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
						<h2 className={styles.visionTitle}>Vizyonumuz</h2>
						<p className={styles.visionText}>
							İnovatif ve sürdürülebilir duvar paneli çözümleriyle sektörde öncü bir marka olmak, yaşam alanlarına hem
							estetik hem de işlevsellik kazandırmak.
						</p>
						<h2 className={styles.missionTitle}>Misyonumuz</h2>
						<p className={styles.missionText}>
							Müşteri odaklı yaklaşımımız doğrultusunda, yüksek kaliteli, güvenilir ve modern duvar panelleri sunarak inşaat
							sektöründe kalıcı değer yaratmak.
						</p>
					</motion.div>
				</motion.div>
			</div>
		</section>
		</>
	);
};

export default About;
