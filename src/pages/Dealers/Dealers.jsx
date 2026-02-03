import { Helmet } from "react-helmet-async";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import styles from "./Dealers.module.scss";

const Dealers = () => {
	const [ref, inView] = useInView({
		threshold: 0.1,
		triggerOnce: true,
	});

	// Örnek bayiler verisi - kullanıcı daha sonra düzenleyecek
	const dealers = [
		{
			id: 1,
			city: "İstanbul",
			company: "METAPAN İstanbul Bayisi",
			address: "Maslak Mahallesi, Büyükdere Caddesi No:123, Sarıyer/İstanbul",
			phone: "+90 212 555 0101",
		},
		{
			id: 2,
			city: "Ankara",
			company: "Ankara Duvar Panelleri A.Ş.",
			address: "Çankaya Mahallesi, Atatürk Bulvarı No:456, Çankaya/Ankara",
			phone: "+90 312 555 0202",
		},
		{
			id: 3,
			city: "İzmir",
			company: "Ege METAPAN Bayisi",
			address: "Konak Mahallesi, Cumhuriyet Bulvarı No:789, Konak/İzmir",
			phone: "+90 232 555 0303",
		},
		{
			id: 4,
			city: "Bursa",
			company: "Bursa İnşaat Malzemeleri Ltd.",
			address: "Osmangazi Mahallesi, Fomara Caddesi No:321, Osmangazi/Bursa",
			phone: "+90 224 555 0404",
		},
		{
			id: 5,
			city: "Antalya",
			company: "Akdeniz METAPAN Bayisi",
			address: "Muratpaşa Mahallesi, Atatürk Caddesi No:654, Muratpaşa/Antalya",
			phone: "+90 242 555 0505",
		},
		{
			id: 6,
			city: "Adana",
			company: "Çukurova Duvar Panelleri",
			address: "Seyhan Mahallesi, Ziyapaşa Bulvarı No:987, Seyhan/Adana",
			phone: "+90 322 555 0606",
		},
		{
			id: 7,
			city: "Gaziantep",
			company: "Gazi METAPAN Bayisi",
			address: "Şahinbey Mahallesi, İnönü Caddesi No:147, Şahinbey/Gaziantep",
			phone: "+90 342 555 0707",
		},
		{
			id: 8,
			city: "Konya",
			company: "Konya İnşaat Malzemeleri",
			address: "Meram Mahallesi, Mevlana Caddesi No:258, Meram/Konya",
			phone: "+90 332 555 0808",
		},
		{
			id: 9,
			city: "Eskişehir",
			company: "METAPAN Eskişehir Bayisi",
			address: "Odunpazarı Mahallesi, 20. Cadde No:8, Odunpazarı/Eskişehir",
			phone: "+90 222 711 2611",
		},
		{
			id: 10,
			city: "Trabzon",
			company: "Karadeniz METAPAN Bayisi",
			address: "Ortahisar Mahallesi, Atatürk Alanı No:369, Ortahisar/Trabzon",
			phone: "+90 462 555 1010",
		},
	];

	return (
		<>
			<Helmet>
				<title>Yetkili Bayiler | METAPAN</title>
				<meta name="description" content="METAPAN duvar paneli yetkili bayileri. Şehir bazında bayilerimizin iletişim bilgileri." />
				<meta property="og:title" content="Yetkili Bayiler | METAPAN" />
				<meta property="og:description" content="METAPAN duvar paneli yetkili bayileri. Şehir bazında bayilerimizin iletişim bilgileri." />
				<meta property="og:type" content="website" />
			</Helmet>
			<section className={styles.dealersPage} ref={ref}>
				<div className={styles.container}>
					<motion.h1
						className={styles.title}
						initial={{ opacity: 0, y: -20 }}
						animate={inView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.6 }}
					>
						Yetkili Bayiler
					</motion.h1>

					<motion.div
						className={styles.tableWrapper}
						initial={{ opacity: 0, y: 30 }}
						animate={inView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						<table className={styles.table}>
							<thead>
								<tr>
									<th>Şehir</th>
									<th>Firma</th>
									<th>Adres</th>
									<th>Telefon</th>
								</tr>
							</thead>
							<tbody>
								{dealers.map((dealer, index) => (
									<tr key={dealer.id} className={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
										<td className={styles.cityCell} data-label="Şehir:">{dealer.city}</td>
										<td className={styles.companyCell} data-label="Firma:">{dealer.company}</td>
										<td className={styles.addressCell} data-label="Adres:">{dealer.address}</td>
										<td className={styles.phoneCell} data-label="Telefon:">
											<a href={`tel:${dealer.phone.replace(/\s/g, "")}`}>{dealer.phone}</a>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</motion.div>
				</div>
			</section>
		</>
	);
};

export default Dealers;
