import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";
import Button from "../Button/Button";
import VideoModal from "../VideoModal/VideoModal";
import { panelCloseUp, installationVideo2, installationVideo2Thumb } from "../../staticAssets";
import styles from "./AboutSection.module.scss";
import { FaPlay } from "react-icons/fa";

const AboutSection = () => {
	const navigate = useNavigate();
	const { strings } = useLanguage();
	const [isVideoOpen, setIsVideoOpen] = useState(false);
	const [ref, inView] = useInView({
		threshold: 0.1,
		triggerOnce: true,
	});

	const textVariants = {
		hidden: { opacity: 0, x: -30 },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.6,
				staggerChildren: 0.2,
			},
		},
	};

	const imageVariants = {
		hidden: { opacity: 0, x: 30 },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.6,
			},
		},
	};

	return (
		<section className={styles.aboutSection} ref={ref}>
			<div className={styles.container}>
				<motion.h2
					className={styles.title}
					initial={{ opacity: 0, y: -20 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}
				>
					<span className={styles.titleLine}></span> {strings.aboutSection.title}
				</motion.h2>

				<div className={styles.content}>
					<motion.div
						className={styles.imageWrapper}
						variants={imageVariants}
						initial="hidden"
						animate={inView ? "visible" : "hidden"}
					>
						<img src={panelCloseUp} alt="Metapan Panel Detay" />
					</motion.div>

					<motion.div
						className={styles.textContent}
						variants={textVariants}
						initial="hidden"
						animate={inView ? "visible" : "hidden"}
					>
						<button type="button" className={styles.videoWrapper} onClick={() => setIsVideoOpen(true)} aria-label="Play video">
							<img src={installationVideo2Thumb} alt="Video Thumbnail" className={styles.videoThumbnail} />
							<div className={styles.playButton}>
								<FaPlay />
							</div>
						</button>

						<motion.p className={styles.description} variants={textVariants}>
							{strings.aboutSection.description.split("\n").map((line, index) => (
								<span key={index}>
									{line}
									{index < strings.aboutSection.description.split("\n").length - 1 && <br />}
								</span>
							))}
						</motion.p>

						<motion.div variants={textVariants}>
							<Button variant="dark" size="large" onClick={() => navigate("/about")}>
								{strings.aboutSection.cta} <span className={styles.arrow}>▸</span>
							</Button>
						</motion.div>
					</motion.div>
				</div>
			</div>
			<VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} videoUrl={installationVideo2} />
		</section>
	);
};

export default AboutSection;
