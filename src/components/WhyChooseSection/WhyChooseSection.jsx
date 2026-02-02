import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
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
	const [ref, inView] = useInView({
		threshold: 0.1,
		triggerOnce: true,
	});

	const features = [
		{
			id: 1,
			title: "ÇEVRECİ",
			description: "METAPAN duvar elemanları çevrecidir, doğaya zarar vermez ve sürdürülebilirdir.",
			icon: cevreciIcon,
		},
		{
			id: 2,
			title: "EKONOMİK",
			description: "Hafif ve kolay uygulanabilir yapısıyla işçilik ve mantolama maliyetlerini düşürür.",
			icon: ekonomikIcon,
		},
		{
			id: 3,
			title: "HAFİF",
			description: "Hafif yapısı sayesinde taşıması kolaydır ve deprem yükünü azaltır.",
			icon: hafifIcon,
		},
		{
			id: 4,
			title: "SAĞLIKLI",
			description: "Asbest içermez, daha sağlıklı yaşam alanları oluşturur.",
			icon: saglikliIcon,
		},
		{
			id: 5,
			title: "YANMAZ",
			description: "A1 sınıfı yanmaz özelliğe sahiptir, alev almaz ve yangına karşı güvenlidir.",
			icon: yanmazIcon,
		},
		{
			id: 6,
			title: "İZOLASYONLU",
			description: "Isı ve ses yalıtımı sağlar, mantolama gerektirmeden %60-80 enerji tasarrufu sunar.",
			icon: izolasyonluIcon,
		},
		{
			id: 7,
			title: "NEFES ALIR",
			description: "Nefes alan yapısı küf ve bakteri oluşumunu engeller.",
			icon: nefesAlirIcon,
		},
		{
			id: 8,
			title: "KOLAY ŞEKİLLENDİRİLEBİLİR",
			titleLine1: "KOLAY",
			titleLine2: "ŞEKİLLENDİRİLEBİLİR",
			description: "İstenilen ölçü ve formda üretilebilir, yerinde döküme ve tünel kalıba uygundur.",
			icon: kolaySekillendirilebilirIcon,
		},
	];

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
					<span className={styles.titleLine}></span> Neden METAPAN Tercih Etmelisin?
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
