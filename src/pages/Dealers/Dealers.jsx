import { Helmet } from "react-helmet-async";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";
import styles from "./Dealers.module.scss";

const Dealers = () => {
	const { strings, language } = useLanguage();
	const [ref, inView] = useInView({
		threshold: 0.1,
		triggerOnce: true,
	});

	const dealersRaw = [
		{ city: "AFYON", company: "EĞİLMEZLER SAYGIN YATIRIM LTD.ŞTİ.", phone: "+90 532 658 88 90" },
		{ city: "ANKARA", company: "VİLLA PREFABRİK ÇELİK YAPI İNŞ. MAK.TİC.SAN.LTD.ŞTİ.", phone: "+90 312 378 7978", phone2: "+90 541 336 3738" },
		{ city: "ANTALYA", company: "GÜNEŞ ÇELİK YAPI", phone: "+90 532 405 8076" },
		{ city: "BURDUR", company: "EGE STEEL CONSTRUCTION", phone: "+90 532 266 0215" },
		{ city: "BURSA", company: "SOİ MİMARLIK TASARIM SAN.LTD.ŞTİ.", phone: "+90 530 794 1626" },
		{ city: "ESKİŞEHİR", company: "BONO MUTFAK SERAMİK YAPI MALZ.İNŞ.SAN. VE TİC.A.Ş.", phone: "+90 222 400 0111", phone2: "+90 549 288 1111" },
		{ city: "ESKİŞEHİR", company: "DENGE İZOLASYON SIH. TES. DOĞALGAZ MÜH. İNŞ. SAN. TİC. LTD.ŞTİ.", phone: "+90 222 221 45 17", phone2: "+90 533 281 4517" },
		{ city: "ESKİŞEHİR", company: "ERMAK YAPI DEMİR ÇELİK NAKLİYE MAKİNA SAN. TİC. LTD. ŞTİ.", phone: "+90 541 337 0079" },
		{ city: "ESKİŞEHİR", company: "TLED ELEKTRİK ELKTRONİK GÜVENLİK SİSTEMLERİ LTD.ŞTİ.", phone: "+90 542 321 6326" },
		{ city: "İSTANBUL", company: "TESKA MİMARLIK TURİZM İNŞAAT LTD.ŞTİ", phone: "+90 212 257 8001" },
		{ city: "İSTANBUL", company: "MİMARİST İNŞAAT", phone: "+90 533 419 5555" },
		{ city: "İZMİR", company: "KUTAY ISITMA SOĞUTMA SAN.İTH.İH.TİC.LTD.ŞTİ.", phone: "+90 537 251 8045" },
		{ city: "İZMİR", company: "EGE CEYLAN ÇELİK EV", phone: "+90 543 484 4184" },
		{ city: "KIRIKKALE", company: "BAYKAL PREFABRİK", phone: "+90 507 023 3271" },
		{ city: "KIRKLARELİ", company: "BARK PROJE TAAH. İNŞ. SAN. VE TİC. A.Ş.", phone: "+90 533 969 2275" },
		{ city: "KOCAELİ", company: "AKDOST PREFABRİK YAPI İNŞ.", phone: "+90 540 554 4141" },
		{ city: "KÜTAHYA", company: "KÜTAHYA KALE PREFABRİK İNŞ. TAAH. OTOM. SAN. TİC. LTD. ŞTİ.", phone: "+90 537 688 2640" },
		{ city: "MALATYA", company: "KADİFE İNŞ. TAAH. TİC. VE SAN. LTD. ŞTİ.", phone: "+90 422 212 9650", phone2: "+90 533 350 1241" },
		{ city: "MANİSA", company: "AĞAOĞLU İNŞ. ÇELİK KONS.", phone: "+90 542 845 0205" },
		{ city: "MUĞLA", company: "FADO ÇELİK VİLLA", phone: "+90 553 472 8666" },
		{ city: "SAKARYA", company: "AKDOSTLAR PREFABRİK İNŞ. ÇELİK KONS. METAL SAN.TİC.LTD.ŞTİ.", phone: "+90 532 418 4202" },
		{ city: "YALOVA", company: "ÇELİK GRUP MİMARLIK MÜHENDİSLİK LTD. ŞTİ", phone: "+90 554 243 8206" },
		{ city: "ZONGULDAK", company: "KERVAN YAPI", phone: "+90 532 513 5467" },
	];

	const dealers = [...dealersRaw]
		.sort((a, b) => a.city.localeCompare(b.city, "tr"))
		.map((d, i) => ({ id: i + 1, ...d }));

	return (
		<>
			<Helmet key={language}>
				<title>{strings.pages.dealers.title}</title>
				<meta name="description" content={strings.pages.dealers.description} />
				<meta property="og:title" content={strings.pages.dealers.title} />
				<meta property="og:description" content={strings.pages.dealers.description} />
				<meta property="og:type" content="website" />
				<meta property="og:image" content="https://www.tedd.com.tr/wp-content/uploads/2026/02/logo.png" />
			</Helmet>
			<section className={styles.dealersPage} ref={ref}>
				<div className={styles.container}>
					<motion.h1
						className={styles.title}
						initial={{ opacity: 0, y: -20 }}
						animate={inView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.6 }}
					>
						{strings.pages.dealers.pageTitle}
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
									<th>{strings.pages.dealers.table.city}</th>
									<th>{strings.pages.dealers.table.company}</th>
									<th>{strings.pages.dealers.table.phone}</th>
									<th>{strings.pages.dealers.table.phone2}</th>
								</tr>
							</thead>
							<tbody>
								{dealers.map((dealer, index) => (
									<tr key={dealer.id} className={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
										<td className={styles.cityCell} data-label={`${strings.pages.dealers.table.city}:`}>{dealer.city}</td>
										<td className={styles.companyCell} data-label={`${strings.pages.dealers.table.company}:`}>{dealer.company}</td>
										<td className={styles.phoneCell} data-label={`${strings.pages.dealers.table.phone}:`}>
											<a href={`tel:${dealer.phone.replaceAll(" ", "")}`}>{dealer.phone}</a>
										</td>
										<td className={styles.phone2Cell} data-label={`${strings.pages.dealers.table.phone2}:`}>
											{dealer.phone2 ? (
												<a href={`tel:${dealer.phone2.replaceAll(" ", "")}`}>{dealer.phone2}</a>
											) : (
												<span className={styles.noPhone}>-</span>
											)}
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
