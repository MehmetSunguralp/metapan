import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";
import { FaChevronDown } from "react-icons/fa";
import trFlag from "../../assets/custom_icons/tr.png";
import enFlag from "../../assets/custom_icons/en.png";
import styles from "./LanguageSelector.module.scss";

const LanguageSelector = () => {
	const { language, changeLanguage } = useLanguage();
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef(null);

	const languages = [
		{ code: "tr", name: "Türkçe", flag: trFlag },
		{ code: "en", name: "English", flag: enFlag },
	];

	// Show opposite flag: if current is "en", show "tr" flag (to switch to Turkish)
	// if current is "tr", show "en" flag (to switch to English)
	const oppositeLanguage = languages.find((lang) => lang.code == language) || languages[0];

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const handleLanguageChange = (langCode) => {
		changeLanguage(langCode);
		setIsOpen(false);
	};

	return (
		<div className={styles.languageSelector} ref={dropdownRef}>
			<button
				className={styles.selectorButton}
				onClick={() => setIsOpen(!isOpen)}
				aria-label="Select language"
				aria-expanded={isOpen}
			>
				<img src={oppositeLanguage.flag} alt={oppositeLanguage.name} className={styles.flagImage} />
				<FaChevronDown className={`${styles.chevron} ${isOpen ? styles.open : ""}`} />
			</button>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						className={styles.dropdown}
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						transition={{ duration: 0.2 }}
					>
						{languages.map((lang) => (
							<button
								key={lang.code}
								className={`${styles.option} ${language === lang.code ? styles.active : ""}`}
								onClick={() => handleLanguageChange(lang.code)}
							>
								<img src={lang.flag} alt={lang.name} className={styles.flagImage} />
								<span className={styles.languageName}>{lang.name}</span>
							</button>
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default LanguageSelector;
