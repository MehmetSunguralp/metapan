import { Helmet } from "react-helmet-async";
import Hero from "../../components/Hero/Hero";
import FeaturesSection from "../../components/FeaturesSection/FeaturesSection";
import AboutSection from "../../components/AboutSection/AboutSection";
import ProjectsPreviewSection from "../../components/ProjectsPreviewSection/ProjectsPreviewSection";
import TestimonialSection from "../../components/TestimonialSection/TestimonialSection";
import WhyChooseSection from "../../components/WhyChooseSection/WhyChooseSection";

const Home = () => {
	return (
		<>
			<Helmet>
				<title>Ana Sayfa | Tedd</title>
				<meta name="description" content="Metapan duvar paneli çözümleri. Tedd ile modern, hafif ve verimli duvar panelleri keşfedin." />
				<meta property="og:title" content="Ana Sayfa | Tedd" />
				<meta property="og:description" content="Metapan duvar paneli çözümleri. Tedd ile modern, hafif ve verimli duvar panelleri keşfedin." />
				<meta property="og:type" content="website" />
				<meta property="og:image" content="https://www.tedd.com.tr/wp-content/uploads/2026/02/logo.png" />
			</Helmet>
			<Hero />
			<FeaturesSection />
			<AboutSection />
			<ProjectsPreviewSection />
			<TestimonialSection />
			<WhyChooseSection />
		</>
	);
};

export default Home;
