import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./VideoModal.module.scss";
import { IoClose } from "react-icons/io5";

const VideoModal = ({ isOpen, onClose, videoUrl }) => {
	const videoRef = useRef(null);

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
			if (videoRef.current) {
				videoRef.current.play();
			}
		} else {
			document.body.style.overflow = "unset";
			if (videoRef.current) {
				videoRef.current.pause();
			}
		}
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isOpen]);

	return (
		<AnimatePresence>
			{isOpen && (
				<>
					<motion.div
						className={styles.overlay}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={onClose}
					/>
					<motion.div
						className={styles.modal}
						initial={{ opacity: 0, scale: 0.8, x: "-50%", y: "-50%" }}
						animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
						exit={{ opacity: 0, scale: 0.8, x: "-50%", y: "-50%" }}
						transition={{ duration: 0.3 }}
					>
						<button className={styles.closeButton} onClick={onClose} aria-label="Close">
							<IoClose />
						</button>
						<div className={styles.playerWrapper}>
							<video
								ref={videoRef}
								className={styles.player}
								controls
								preload="metadata"
								src={videoUrl}
							>
								Tarayıcınız video oynatmayı desteklemiyor.
							</video>
						</div>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
};

export default VideoModal;
