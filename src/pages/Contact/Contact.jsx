import { Helmet } from "react-helmet-async";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import styles from "./Contact.module.scss";

const Contact = () => {
	const { strings, language } = useLanguage();
	const [ref, inView] = useInView({
		threshold: 0.1,
		triggerOnce: true,
	});

	const contactInfo = [
		{
			id: "address",
			icon: FaMapMarkerAlt,
			title: strings.pages.contact.labels.address,
			text: strings.footer.contact.address,
			link: null,
		},
		{
			id: "phone",
			icon: FaPhone,
			title: strings.pages.contact.labels.phone,
			text: strings.footer.contact.phone,
			link: "tel:+902227112611",
		},
		{
			id: "email",
			icon: FaEnvelope,
			title: strings.pages.contact.labels.email,
			text: strings.footer.contact.email,
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
			<Helmet key={language}>
				<title>{strings.pages.contact.title}</title>
				<meta name="description" content={strings.pages.contact.description} />
				<meta property="og:title" content={strings.pages.contact.title} />
				<meta property="og:description" content={strings.pages.contact.description} />
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
					{strings.pages.contact.pageTitle}
				</motion.h1>

				<motion.p
					className={styles.subtitle}
					initial={{ opacity: 0, y: 20 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6, delay: 0.2 }}
				>
					{strings.pages.contact.subtitle}
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
