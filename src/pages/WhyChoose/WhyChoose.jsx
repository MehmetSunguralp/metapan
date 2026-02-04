import { Helmet } from "react-helmet-async";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";
import WhyChooseSection from "../../components/WhyChooseSection/WhyChooseSection";
import styles from "./WhyChoose.module.scss";

const WhyChoose = () => {
	const { strings, language } = useLanguage();
	const [ref, inView] = useInView({
		threshold: 0.1,
		triggerOnce: true,
	});

	return (
		<>
			<Helmet key={language}>
				<title>{strings.pages.whyChoose.title}</title>
				<meta name="description" content={strings.pages.whyChoose.description} />
				<meta property="og:title" content={strings.pages.whyChoose.title} />
				<meta property="og:description" content={strings.pages.whyChoose.description} />
				<meta property="og:type" content="website" />
				<meta property="og:image" content="https://www.tedd.com.tr/wp-content/uploads/2026/02/logo.png" />
			</Helmet>
			<section className={styles.whyChoosePage} ref={ref}>
				<div className={styles.container}>
					<motion.h1
						className={styles.title}
						initial={{ opacity: 0, y: -20 }}
						animate={inView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.6 }}
					>
						{strings.whyChoose.title}
					</motion.h1>
				</div>
				<WhyChooseSection hideTitle={true} />
			</section>
		</>
	);
};

export default WhyChoose;
