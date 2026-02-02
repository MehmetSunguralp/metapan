import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import styles from "./SocialIcons.module.scss";

const socialLinks = [
	{ name: "facebook", url: "#", icon: FaFacebook },
	{ name: "instagram", url: "https://www.instagram.com/metapanduvar", icon: FaInstagram },
	{ name: "youtube", url: "#", icon: FaYoutube },
];

const SocialIcons = ({ className = "" }) => {
	return (
		<div className={`${styles.socialIcons} ${className}`}>
			{socialLinks.map((social, index) => {
				const IconComponent = social.icon;
				return (
					<motion.a
						key={social.name}
						href={social.url}
						target="_blank"
						rel="noopener noreferrer"
						className={styles.icon}
						whileHover={{ scale: 1.2, y: -2 }}
						whileTap={{ scale: 0.9 }}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: index * 0.1 }}
					>
						<IconComponent />
					</motion.a>
				);
			})}
		</div>
	);
};

export default SocialIcons;
