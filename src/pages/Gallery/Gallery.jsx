import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import VideoModal from "../../components/VideoModal/VideoModal";
import {
	video1,
	video2,
	video3,
	video4,
	video5,
	video6,
	video7,
	video8,
} from "../../staticAssets";
import styles from "./Gallery.module.scss";

const Gallery = () => {
	const [selectedVideo, setSelectedVideo] = useState(null);
	const [ref, inView] = useInView({
		threshold: 0.1,
		triggerOnce: true,
	});

	const videos = [
		{ id: 1, url: video1, title: "Video 1" },
		{ id: 2, url: video2, title: "Video 2" },
		{ id: 3, url: video3, title: "Video 3" },
		{ id: 4, url: video4, title: "Video 4" },
		{ id: 5, url: video5, title: "Video 5" },
		{ id: 6, url: video6, title: "Video 6" },
		{ id: 7, url: video7, title: "Video 7" },
		{ id: 8, url: video8, title: "Video 8" },
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
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
			},
		},
	};

	return (
		<>
			<Helmet>
				<title>Galeri | Tedd</title>
				<meta name="description" content="Metapan duvar paneli uygulama videoları ve galeri. Projelerimizden görüntüler ve montaj videoları." />
				<meta property="og:title" content="Galeri | Tedd" />
				<meta property="og:description" content="Metapan duvar paneli uygulama videoları ve galeri. Projelerimizden görüntüler ve montaj videoları." />
				<meta property="og:type" content="website" />
				<meta property="og:image" content="https://www.tedd.com.tr/wp-content/uploads/2026/02/logo.png" />
			</Helmet>
			<section className={styles.galleryPage} ref={ref}>
				<div className={styles.container}>
					<motion.h1
						className={styles.title}
						initial={{ opacity: 0, y: -20 }}
						animate={inView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.6 }}
					>
						Galeri
					</motion.h1>

					<motion.div
						className={styles.grid}
						variants={containerVariants}
						initial="hidden"
						animate={inView ? "visible" : "hidden"}
					>
						{videos.slice(0, 6).map((video) => (
							<motion.div
								key={video.id}
								className={styles.videoCard}
								variants={itemVariants}
								whileHover={{ scale: 1.02 }}
								transition={{ duration: 0.3 }}
							>
								<button
									className={styles.videoWrapper}
									onClick={() => setSelectedVideo(video)}
									aria-label={`Play ${video.title}`}
								>
									<video
										className={styles.videoThumbnail}
										preload="metadata"
										muted
										playsInline
										onLoadedMetadata={(e) => {
											e.target.currentTime = 0.1;
										}}
									>
										<source src={video.url} type="video/mp4" />
									</video>
									<div className={styles.playButton}>
										<FaPlay />
									</div>
								</button>
							</motion.div>
						))}
					</motion.div>
					{videos.length > 6 && (
						<motion.div
							className={styles.lastRow}
							variants={containerVariants}
							initial="hidden"
							animate={inView ? "visible" : "hidden"}
						>
							{videos.slice(6).map((video) => (
								<motion.div
									key={video.id}
									className={styles.videoCard}
									variants={itemVariants}
									whileHover={{ scale: 1.02 }}
									transition={{ duration: 0.3 }}
								>
									<button
										className={styles.videoWrapper}
										onClick={() => setSelectedVideo(video)}
										aria-label={`Play ${video.title}`}
									>
										<video
											className={styles.videoThumbnail}
											preload="metadata"
											muted
											playsInline
											onLoadedMetadata={(e) => {
												e.target.currentTime = 0.1;
											}}
										>
											<source src={video.url} type="video/mp4" />
										</video>
										<div className={styles.playButton}>
											<FaPlay />
										</div>
									</button>
								</motion.div>
							))}
						</motion.div>
					)}
				</div>

				{selectedVideo && (
					<VideoModal
						isOpen={!!selectedVideo}
						onClose={() => setSelectedVideo(null)}
						videoUrl={selectedVideo.url}
					/>
				)}
			</section>
		</>
	);
};

export default Gallery;
