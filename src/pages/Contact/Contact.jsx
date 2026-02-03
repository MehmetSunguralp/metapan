import { Helmet } from "react-helmet-async";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import styles from "./Contact.module.scss";

const Contact = () => {
	const [ref, inView] = useInView({
		threshold: 0.1,
		triggerOnce: true,
	});

	const contactInfo = [
		{
			id: "address",
			icon: FaMapMarkerAlt,
			title: "Adres",
			text: "75. YIL OSB MAH. 20 CAD. NO: 8 ODUNPAZARI/ ESKİŞEHİR",
			link: null,
		},
		{
			id: "phone",
			icon: FaPhone,
			title: "Telefon",
			text: "+90 222 711 2611",
			link: "tel:+902227112611",
		},
		{
			id: "email",
			icon: FaEnvelope,
			title: "E-posta",
			text: "metapanduvarpanelleri@gmail.com",
			link: "mailto:metapanduvarpanelleri@gmail.com",
		},
	];

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, x: -20 },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.4,
			},
		},
	};

	return (
		<>
			<Helmet>
				<title>İletişim | Tedd</title>
				<meta name="description" content="Tedd ile iletişime geçin. Metapan duvar paneli hakkında sorularınız için bize ulaşın." />
				<meta property="og:title" content="İletişim | Tedd" />
				<meta property="og:description" content="Tedd ile iletişime geçin. Metapan duvar paneli hakkında sorularınız için bize ulaşın." />
				<meta property="og:type" content="website" />
				<meta property="og:image" content="https://www.tedd.com.tr/wp-content/uploads/2026/02/logo.png" />
			</Helmet>
			<section className={styles.contactPage} ref={ref}>
			<div className={styles.container}>
				<motion.h1
					className={styles.title}
					initial={{ opacity: 0, y: -20 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}
				>
					İletişim
				</motion.h1>

				<motion.p
					className={styles.subtitle}
					initial={{ opacity: 0, y: 20 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6, delay: 0.2 }}
				>
					TEDD DUVAR PANELLERİ VE YAPI MALZEMELERİ SANAYİ TİCARET LİMİTED ŞİRKETİ.
				</motion.p>

				<motion.div
					className={styles.contactCard}
					variants={containerVariants}
					initial="hidden"
					animate={inView ? "visible" : "hidden"}
				>
					<div className={styles.contactContent}>
						{contactInfo.map((info) => {
							const IconComponent = info.icon;
							return (
								<motion.div
									key={info.id}
									className={styles.contactItem}
									variants={itemVariants}
								>
									{info.link ? (
										<a href={info.link} className={styles.contactLink}>
											<div className={styles.iconWrapper}>
												<IconComponent className={styles.icon} />
											</div>
											<div className={styles.textWrapper}>
												<h3 className={styles.contactTitle}>{info.title}</h3>
												<p className={styles.contactText}>{info.text}</p>
											</div>
										</a>
									) : (
										<div className={styles.contactItemContent}>
											<div className={styles.iconWrapper}>
												<IconComponent className={styles.icon} />
											</div>
											<div className={styles.textWrapper}>
												<h3 className={styles.contactTitle}>{info.title}</h3>
												<p className={styles.contactText}>{info.text}</p>
											</div>
										</div>
									)}
								</motion.div>
							);
						})}
					</div>
				</motion.div>
			</div>
		</section>
		</>
	);
};

export default Contact;
