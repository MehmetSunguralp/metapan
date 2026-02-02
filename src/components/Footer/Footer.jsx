import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { logo } from "../../staticAssets";
import styles from "./Footer.module.scss";

const Footer = () => {
	const [ref, inView] = useInView({
		threshold: 0.1,
		triggerOnce: true,
	});

	const currentYear = new Date().getFullYear();

	const contactInfo = [
		{
			id: "address",
			icon: FaMapMarkerAlt,
			text: "75. YIL OSB MAH. 20 CAD. NO: 8 ODUNPAZARI/ ESKİŞEHİR",
		},
		{
			id: "phone",
			icon: FaPhone,
			text: "+90 222 711 2611",
		},
		{
			id: "email",
			icon: FaEnvelope,
			text: "metapanduvarpanelleri@gmail.com",
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
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
			},
		},
	};

	return (
		<footer className={styles.footer} ref={ref}>
			<div className={styles.footerContentWrapper}>
				<motion.div
					className={styles.footerContent}
					variants={containerVariants}
					initial="hidden"
					animate={inView ? "visible" : "hidden"}
				>
					<motion.div className={styles.footerLeft} variants={itemVariants}>
						<div className={styles.logo}>
							<img src={logo} alt="TEDD Logo" />
						</div>
						<p className={styles.description}>TEDD DUVAR PANELLERİ VE YAPI MALZEMELERİ SANAYİ TİCARET LİMİTED ŞİRKETİ.</p>
					</motion.div>

					<motion.div className={styles.footerRight} variants={itemVariants}>
						{contactInfo.map((info) => {
							const IconComponent = info.icon;
							return (
								<motion.div key={info.id} className={styles.contactItem} variants={itemVariants}>
									<span className={styles.icon}>
										<IconComponent />
									</span>
									<span className={styles.text}>{info.text}</span>
								</motion.div>
							);
						})}
					</motion.div>
				</motion.div>
			</div>

			<div className={styles.footerBottomWrapper}>
				<motion.div
					className={styles.footerBottom}
					initial={{ opacity: 0 }}
					animate={inView ? { opacity: 1 } : {}}
					transition={{ delay: 0.5 }}
				>
					<p className={styles.copyright}>© {currentYear} tedd.com.tr Tüm hakları saklıdır.</p>
				</motion.div>
			</div>
		</footer>
	);
};

export default Footer;
