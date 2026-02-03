import { Helmet } from "react-helmet-async";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import {
	utoCertificateTR,
	utoCertificateTRThumb,
	utoCertificateEN,
	utoCertificateENThumb,
	brandRegistration,
	brandRegistrationThumb,
	catalougueTR,
	catalougueThumb,
	catalogueEN,
	catalogueENThumb,
	t50245report,
	t50245reportThumb,
	t50330report,
	t50330reportThumb
} from "../../staticAssets";
import styles from "./Certificates.module.scss";

const Certificates = () => {
	const [ref, inView] = useInView({
		threshold: 0.1,
		triggerOnce: true,
	});

	const certificates = [
		{
			id: 1,
			title: "UTO Belgesi (TR)",
			thumbnail: utoCertificateTRThumb,
			pdf: utoCertificateTR,
		},
		{
			id: 2,
			title: "UTO Belgesi (EN)",
			thumbnail: utoCertificateENThumb,
			pdf: utoCertificateEN,
		},
		{
			id: 3,
			title: "Marka Tescil Belgesi",
			thumbnail: brandRegistrationThumb,
			pdf: brandRegistration,
		},
		{
			id: 4,
			title: "Katalog (TR)",
			thumbnail: catalougueThumb,
			pdf: catalougueTR,
		},
		{
			id: 5,
			title: "Katalog (EN)",
			thumbnail: catalogueENThumb,
			pdf: catalogueEN,
		},
		{
			id: 6,
			title: "METAPAN T50-245 Analiz Raporu",
			thumbnail: t50245reportThumb,
			pdf: t50245report,
		},
		{
			id: 7,
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
		<>
			<Helmet>
				<title>Dokümanlar | Tedd</title>
				<meta name="description" content="Metapan duvar paneli analiz raporları ve sertifikalar. Ürün kalitemizi belgeleyen teknik dokümanlar." />
				<meta property="og:title" content="Dokümanlar | Tedd" />
				<meta property="og:description" content="Metapan duvar paneli analiz raporları ve sertifikalar. Ürün kalitemizi belgeleyen teknik dokümanlar." />
				<meta property="og:type" content="website" />
				<meta property="og:image" content="https://www.tedd.com.tr/wp-content/uploads/2026/02/logo.png" />
			</Helmet>
			<section className={styles.certificatesPage} ref={ref}>
				<div className={styles.container}>
					<motion.h1
						className={styles.title}
						initial={{ opacity: 0, y: -20 }}
						animate={inView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.6 }}
					>
						Dokümanlar
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
		</>
	);
};

export default Certificates;
