import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";
import NavLink from "../NavLink/NavLink";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import styles from "./Header.module.scss";
import { logo } from "../../staticAssets";
import trFlag from "../../assets/custom_icons/tr.png";
import enFlag from "../../assets/custom_icons/en.png";

const Header = () => {
	const location = useLocation();
	const { strings, language, changeLanguage } = useLanguage();
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Close mobile menu when route changes
	useEffect(() => {
		setIsMobileMenuOpen(false);
	}, [location.pathname]);

	// Prevent body scroll when mobile menu is open
	useEffect(() => {
		if (isMobileMenuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isMobileMenuOpen]);

	const navItems = [
		{ label: strings.nav.home, href: "/" },
		{ label: strings.nav.about, href: "/about" },
		{ label: strings.nav.whyChoose, href: "/why-choose" },
		{ label: strings.nav.projects, href: "/projects" },
		{ label: strings.nav.gallery, href: "/gallery" },
		{ label: strings.nav.pricing, href: "/pricing" },
		{ label: strings.nav.certificates, href: "/certificates" },
		{ label: strings.nav.dealers, href: "/dealers" },
		{ label: strings.nav.contact, href: "/contact" },
	];

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<>
			<motion.header
				className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
				initial={{ y: -100 }}
				animate={{ y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<div className={styles.container}>
					<motion.div className={styles.logo} whileHover={{ scale: 1.05 }}>
						<Link to="/">
							<img src={logo} alt="Tedd - METAPAN" />
						</Link>
					</motion.div>

					<nav className={styles.nav}>
						{navItems.map((item, index) => (
							<motion.div
								key={item.href}
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.1 }}
							>
								<NavLink href={item.href} isActive={location.pathname === item.href}>
									{item.label}
								</NavLink>
							</motion.div>
						))}
					</nav>

					{!isMobileMenuOpen && (
						<div className={styles.rightSection}>
							<LanguageSelector />
						</div>
					)}

					<button
						className={styles.hamburger}
						onClick={toggleMobileMenu}
						aria-label="Toggle menu"
					>
						<motion.div
							className={styles.hamburgerIcon}
							animate={isMobileMenuOpen ? "open" : "closed"}
						>
							<motion.span
								variants={{
									closed: { rotate: 0, y: 0 },
									open: { rotate: 45, y: 7 },
								}}
								transition={{ duration: 0.3 }}
							/>
							<motion.span
								variants={{
									closed: { opacity: 1 },
									open: { opacity: 0 },
								}}
								transition={{ duration: 0.2 }}
							/>
							<motion.span
								variants={{
									closed: { rotate: 0, y: 0 },
									open: { rotate: -45, y: -7 },
								}}
								transition={{ duration: 0.3 }}
							/>
						</motion.div>
					</button>
				</div>
			</motion.header>

			<AnimatePresence>
				{isMobileMenuOpen && (
					<>
						<motion.div
							className={styles.mobileMenuOverlay}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.3 }}
							onClick={toggleMobileMenu}
						/>
						<motion.div
							className={styles.mobileMenu}
							initial={{ y: "-100%" }}
							animate={{ y: 0 }}
							exit={{ y: "-100%" }}
							transition={{ type: "spring", damping: 25, stiffness: 200 }}
						>
							<nav className={styles.mobileNav}>
								{navItems.map((item, index) => (
									<motion.div
										key={item.href}
										initial={{ opacity: 0, y: -20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: index * 0.1, duration: 0.3 }}
									>
										<NavLink
											href={item.href}
											isActive={location.pathname === item.href}
											onClick={toggleMobileMenu}
										>
											{item.label}
										</NavLink>
									</motion.div>
								))}
							</nav>
							<motion.div
								className={styles.mobileLanguageSelector}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: navItems.length * 0.1, duration: 0.3 }}
							>
								<button
									className={`${styles.mobileLangButton} ${language === "tr" ? styles.active : ""}`}
									onClick={() => {
										changeLanguage("tr");
										toggleMobileMenu();
									}}
								>
									<img src={trFlag} alt="Türkçe" className={styles.mobileLangFlag} />
									<span>Türkçe</span>
								</button>
								<button
									className={`${styles.mobileLangButton} ${language === "en" ? styles.active : ""}`}
									onClick={() => {
										changeLanguage("en");
										toggleMobileMenu();
									}}
								>
									<img src={enFlag} alt="English" className={styles.mobileLangFlag} />
									<span>English</span>
								</button>
							</motion.div>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</>
	);
};

export default Header;
