import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { t50245report, t50245reportThumb, t50330report, t50330reportThumb } from "../../staticAssets";
import styles from "./Certificates.module.scss";

const Certificates = () => {
	const [ref, inView] = useInView({
		threshold: 0.1,
		triggerOnce: true,
	});

	const certificates = [
		{
			id: 1,
			title: "METAPAN T50-245 Analiz Raporu",
			thumbnail: t50245reportThumb,
			pdf: t50245report,
		},
		{
			id: 2,
			title: "METAPAN T50-330 Analiz Raporu",
			thumbnail: t50330reportThumb,
			pdf: t50330report,
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
		<section className={styles.certificatesPage} ref={ref}>
			<div className={styles.container}>
				<motion.h1
					className={styles.title}
					initial={{ opacity: 0, y: -20 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}
				>
					Belgeler
				</motion.h1>

				<motion.div
					className={styles.certificatesGrid}
					variants={containerVariants}
					initial="hidden"
					animate={inView ? "visible" : "hidden"}
				>
					{certificates.map((certificate) => (
						<motion.div
							key={certificate.id}
							className={styles.certificateCard}
							variants={itemVariants}
							whileHover={{ y: -5, scale: 1.02 }}
							transition={{ duration: 0.3 }}
						>
							<a
								href={certificate.pdf}
								target="_blank"
								rel="noopener noreferrer"
								className={styles.certificateLink}
							>
								<div className={styles.imageWrapper}>
									<img src={certificate.thumbnail} alt={certificate.title} />
									<div className={styles.overlay}>
										<span className={styles.viewText}>Görüntüle</span>
									</div>
								</div>
								<h3 className={styles.certificateTitle}>{certificate.title}</h3>
							</a>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default Certificates;
