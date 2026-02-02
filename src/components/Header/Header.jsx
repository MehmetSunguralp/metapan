import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import NavLink from "../NavLink/NavLink";
import SocialIcons from "../SocialIcons/SocialIcons";
import styles from "./Header.module.scss";
import { logo } from "../../staticAssets";

const Header = () => {
	const location = useLocation();
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navItems = [
		{ label: "Anasayfa", href: "/" },
		{ label: "Hakkında", href: "/about" },
		{ label: "Projeler", href: "/projects" },
		{ label: "Fiyat Listesi", href: "/pricing" },
		{ label: "Sertifikalar", href: "/certificates" },
		{ label: "İletişim", href: "/contact" },
	];

	return (
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
							key={item.label}
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

				<SocialIcons className={styles.socialIcons} />
			</div>
		</motion.header>
	);
};

export default Header;
