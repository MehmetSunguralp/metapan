import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";
import PDFModal from "../../components/PDFModal/PDFModal";
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
	const { strings, language } = useLanguage();
	const [ref, inView] = useInView({
		threshold: 0.1,
		triggerOnce: true,
	});
	const [selectedPDF, setSelectedPDF] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const thumbnails = [
		utoCertificateTRThumb,
		utoCertificateENThumb,
		brandRegistrationThumb,
		catalougueThumb,
		catalogueENThumb,
		t50245reportThumb,
		t50330reportThumb,
	];
	const pdfs = [
		utoCertificateTR,
		utoCertificateEN,
		brandRegistration,
		catalougueTR,
		catalogueEN,
		t50245report,
		t50330report,
	];
	const titles = [
		strings.pages.certificates.certificateTitles.utoTR,
		strings.pages.certificates.certificateTitles.utoEN,
		strings.pages.certificates.certificateTitles.brandRegistration,
		strings.pages.certificates.certificateTitles.catalogTR,
		strings.pages.certificates.certificateTitles.catalogEN,
		strings.pages.certificates.certificateTitles.t50245,
		strings.pages.certificates.certificateTitles.t50330,
	];

	const certificates = thumbnails.map((thumbnail, index) => ({
		id: index + 1,
		title: titles[index],
		thumbnail,
		pdf: pdfs[index],
	}));

	const handleCertificateClick = (certificate) => {
		setSelectedPDF(certificate);
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
		setSelectedPDF(null);
	};

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
				<title>{strings.pages.certificates.title}</title>
				<meta name="description" content={strings.pages.certificates.description} />
				<meta property="og:title" content={strings.pages.certificates.title} />
				<meta property="og:description" content={strings.pages.certificates.description} />
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
						{strings.pages.certificates.pageTitle}
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
								<button
									onClick={() => handleCertificateClick(certificate)}
									className={styles.certificateLink}
									aria-label={`View ${certificate.title}`}
								>
									<div className={styles.imageWrapper}>
										<img src={certificate.thumbnail} alt={certificate.title} />
										<div className={styles.overlay}>
											<span className={styles.viewText}>{strings.pages.certificates.view}</span>
										</div>
									</div>
									<h3 className={styles.certificateTitle}>{certificate.title}</h3>
								</button>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>
			{selectedPDF && (
				<PDFModal
					isOpen={isModalOpen}
					onClose={handleCloseModal}
					pdfUrl={selectedPDF.pdf}
					title={selectedPDF.title}
				/>
			)}
		</>
	);
};

export default Certificates;
