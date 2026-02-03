import { useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import {
	panelThumb5,
	panelThumb6,
	panelThumb7,
	panelThumb8,
	panelThumb10,
	panelThumb12,
	panelThumb15,
	panelThumb18,
	panelThumb10z,
	panelThumb15z,
	panelThumb18z,
	panelThumb10z18,
	panelThumb15z18,
	panelThumb18z18,
	priceList2026,
} from "../../staticAssets";
import styles from "./Pricing.module.scss";

const Pricing = () => {
	const [activeSeries, setActiveSeries] = useState(null);
	const headerRefs = useRef({});
	const [ref, inView] = useInView({
		threshold: 0.1,
		triggerOnce: true,
	});

	const series126 = [
		{
			id: 1,
			image: panelThumb5,
			model: "T50-126",
			thickness: "120 x 60 x 5",
			weight: "10,5",
			area: "0,72",
			price: "360,00",
		},
		{
			id: 2,
			image: panelThumb6,
			model: "T60-126",
			thickness: "120 x 60 x 6",
			weight: "12,5",
			area: "0,72",
			price: "450,00",
		},
		{
			id: 3,
			image: panelThumb7,
			model: "T70-126",
			thickness: "120 x 60 x 7",
			weight: "15,0",
			area: "0,72",
			price: "500,00",
		},
		{
			id: 4,
			image: panelThumb8,
			model: "T80-126",
			thickness: "120 x 80 x 8",
			weight: "17,0",
			area: "0,72",
			price: "600,00",
		},
		{
			id: 5,
			image: panelThumb10,
			model: "T100-126",
			thickness: "120 x 60 x 10",
			weight: "21,0",
			area: "0,72",
			price: "650,00",
		},
		{
			id: 6,
			image: panelThumb12,
			model: "T120-126",
			thickness: "120 x 60 x 12",
			weight: "25,0",
			area: "0,72",
			price: "800,00",
		},
		{
			id: 7,
			image: panelThumb15,
			model: "T150-126",
			thickness: "120 x 60 x 15",
			weight: "31,5",
			area: "0,72",
			price: "1.000,00",
		},
		{
			id: 8,
			image: panelThumb18,
			model: "T180-126",
			thickness: "120 x 60 x 18",
			weight: "38,0",
			area: "0,72",
			price: "1.200,00",
		},
	];

	const series105 = [
		{
			id: 1,
			image: panelThumb5,
			model: "T50-105",
			thickness: "100 x 50 x 5",
			weight: "7,5",
			area: "0,50",
			price: "360,00",
		},
		{
			id: 2,
			image: panelThumb6,
			model: "T60-105",
			thickness: "100 x 50 x 6",
			weight: "9,0",
			area: "0,50",
			price: "450,00",
		},
		{
			id: 3,
			image: panelThumb7,
			model: "T70-105",
			thickness: "100 x 50 x 7",
			weight: "10,5",
			area: "0,50",
			price: "500,00",
		},
		{
			id: 4,
			image: panelThumb8,
			model: "T80-105",
			thickness: "120 x 80 x 8",
			weight: "12,0",
			area: "0,50",
			price: "600,00",
		},
		{
			id: 5,
			image: panelThumb10,
			model: "T100-105",
			thickness: "100 x 50 x 10",
			weight: "15,0",
			area: "0,50",
			price: "650,00",
		},
		{
			id: 6,
			image: panelThumb12,
			model: "T120-105",
			thickness: "100 x 50 x 12",
			weight: "18,0",
			area: "0,50",
			price: "800,00",
		},
		{
			id: 7,
			image: panelThumb15,
			model: "T150-105",
			thickness: "100 x 50 x 15",
			weight: "22,5",
			area: "0,50",
			price: "1.000,00",
		},
		{
			id: 8,
			image: panelThumb18,
			model: "T180-105",
			thickness: "100 x 50 x 18",
			weight: "27,0",
			area: "0,50",
			price: "1.200,00",
		},
	];

	const series118 = [
		{
			id: 1,
			image: panelThumb10z18,
			model: "T100-118",
			thickness: "100 x 18 x 10",
			weight: "5,5",
			area: "0,18",
			price: "700,00",
		},
		{
			id: 2,
			image: panelThumb15z18,
			model: "T150-118",
			thickness: "100 x 18 x 15",
			weight: "8,5",
			area: "0,18",
			price: "1.100,00",
		},
		{
			id: 3,
			image: panelThumb18z18,
			model: "T180-118",
			thickness: "100 x 18 x 18",
			weight: "10,0",
			area: "0,18",
			price: "1.300,00",
		}
	];

	const series132 = [
		{
			id: 1,
			image: panelThumb10z,
			model: "T100-132",
			thickness: "100 x 32 x 10",
			weight: "10,0",
			area: "0,32",
			price: "700,00",
		},
		{
			id: 2,
			image: panelThumb15z,
			model: "T150-132",
			thickness: "100 x 32 x 15",
			weight: "15,0",
			area: "0,32",
			price: "1.100,00",
		},
		{
			id: 3,
			image: panelThumb18z,
			model: "T180-132",
			thickness: "100 x 32 x 18",
			weight: "18,0",
			area: "0,32",
			price: "1.300,00",
		}
	];

	const series = [
		{ id: "126", name: "126 Serisi", data: series126 },
		{ id: "105", name: "105 Serisi", data: series105 },
		{ id: "118", name: "118 Serisi", data: series118 },
		{ id: "132", name: "132 Serisi", data: series132 },
	];

	const handleSeriesToggle = (seriesId) => {
		const wasOpen = activeSeries === seriesId;
		
		// First close all accordions to reset page height
		if (activeSeries !== null) {
			setActiveSeries(null);
			
			// Wait for accordion to close, then open the clicked one
			setTimeout(() => {
				if (!wasOpen) {
					setActiveSeries(seriesId);
					
					// Scroll to accordion header after opening
					setTimeout(() => {
						const headerElement = headerRefs.current[seriesId];
						if (headerElement) {
							const headerHeight = 80; // $header-height from variables
							const offset = 10; // Small additional offset
							
							// Get element position relative to document
							const elementRect = headerElement.getBoundingClientRect();
							const elementTop = elementRect.top + window.pageYOffset;
							
							// Calculate target scroll position
							const targetScroll = elementTop - headerHeight - offset;

							window.scrollTo({
								top: Math.max(0, targetScroll), // Ensure not negative
								behavior: "smooth",
							});
						}
					}, 300); // Wait for accordion to fully open
				}
			}, 300); // Wait for accordion to fully close
		} else {
			// No accordion is open, just open the clicked one
			setActiveSeries(seriesId);
			
			// Scroll to accordion header after opening
			setTimeout(() => {
				const headerElement = headerRefs.current[seriesId];
				if (headerElement) {
					const headerHeight = 80; // $header-height from variables
					const offset = 10; // Small additional offset
					
					// Get element position relative to document
					const elementRect = headerElement.getBoundingClientRect();
					const elementTop = elementRect.top + window.pageYOffset;
					
					// Calculate target scroll position
					const targetScroll = elementTop - headerHeight - offset;

					window.scrollTo({
						top: Math.max(0, targetScroll), // Ensure not negative
						behavior: "smooth",
					});
				}
			}, 300); // Wait for accordion to fully open
		}
	};

	return (
		<>
			<Helmet>
				<title>Fiyatlandırma | Tedd</title>
				<meta name="description" content="Metapan duvar paneli fiyat listesi. 126, 105, 118 ve 132 serisi ürünlerimizin güncel fiyatları." />
				<meta property="og:title" content="Fiyatlandırma | Tedd" />
				<meta property="og:description" content="Metapan duvar paneli fiyat listesi. 126, 105, 118 ve 132 serisi ürünlerimizin güncel fiyatları." />
				<meta property="og:type" content="website" />
				<meta property="og:image" content="https://www.tedd.com.tr/wp-content/uploads/2026/02/logo.png" />
			</Helmet>
			<section className={styles.pricingPage} ref={ref}>
			<div className={styles.container}>
				<motion.h1
					className={styles.title}
					initial={{ opacity: 0, y: -20 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}
				>
					Fiyat Listesi
				</motion.h1>

				<motion.div
					className={styles.downloadSection}
					initial={{ opacity: 0, y: 20 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6, delay: 0.2 }}
				>
				<a href={priceList2026} target="_blank" rel="noopener noreferrer" className={styles.downloadLink}>
					<FaDownload className={styles.downloadIcon} />
					METAPAN 2026 Fiyat Listesi İndir
				</a>
				</motion.div>

				<div className={styles.accordion}>
					{series.map((seriesItem, index) => (
						<motion.div
							key={seriesItem.id}
							className={styles.accordionItem}
							initial={{ opacity: 0, y: 20 }}
							animate={inView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.5, delay: index * 0.1 }}
						>
							<button
								ref={(el) => (headerRefs.current[seriesItem.id] = el)}
								className={`${styles.accordionHeader} ${activeSeries === seriesItem.id ? styles.active : ""}`}
								onClick={() => handleSeriesToggle(seriesItem.id)}
								disabled={seriesItem.data.length === 0}
							>
								<span className={styles.seriesName}>{seriesItem.name}</span>
								<span className={styles.accordionIcon}>{activeSeries === seriesItem.id ? "−" : "+"}</span>
							</button>

							<AnimatePresence>
								{activeSeries === seriesItem.id && seriesItem.data.length > 0 && (
									<motion.div
										className={styles.accordionContent}
										initial={{ height: 0, opacity: 0 }}
										animate={{ height: "auto", opacity: 1 }}
										exit={{ height: 0, opacity: 0 }}
										transition={{ duration: 0.3 }}
									>
										<div className={styles.tableWrapper}>
											<table className={styles.pricingTable}>
												<thead>
													<tr>
														<th></th>
														<th>Model</th>
														<th>Ebat (cm)</th>
														<th>Ağırlık (kg)</th>
														<th>Alan (m²)</th>
														<th>Fiyat (₺/m²)</th>
													</tr>
												</thead>
												<tbody>
													{seriesItem.data.map((item, itemIndex) => (
														<motion.tr
															key={item.id}
															initial={{ opacity: 0, x: -20 }}
															animate={{ opacity: 1, x: 0 }}
															transition={{ duration: 0.3, delay: itemIndex * 0.05 }}
														>
															<td className={styles.imageCell}>
																<img src={item.image} alt={`${item.model} Panel`} />
															</td>
															<td className={styles.modelCell}>{item.model}</td>
															<td className={styles.thicknessCell}>{item.thickness}</td>
															<td className={styles.weightCell}>{item.weight}</td>
															<td className={styles.areaCell}>{item.area}</td>
															<td className={styles.priceCell}>{item.price}</td>
														</motion.tr>
													))}
												</tbody>
											</table>
										</div>
										<div className={styles.footerNotes}>
											<p>Liste fiyatlarına KDV dahil değildir</p>
											<p>Ürünler Eskişehir teslimi olup nakliye alıcıya aittir</p>
										</div>
									</motion.div>
								)}
							</AnimatePresence>
						</motion.div>
					))}
				</div>
			</div>
		</section>
		</>
	);
};

export default Pricing;
