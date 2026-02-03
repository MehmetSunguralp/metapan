import { Helmet } from "react-helmet-async";
import { useLanguage } from "../../contexts/LanguageContext";
import Hero from "../../components/Hero/Hero";
import FeaturesSection from "../../components/FeaturesSection/FeaturesSection";
import AboutSection from "../../components/AboutSection/AboutSection";
import ProjectsPreviewSection from "../../components/ProjectsPreviewSection/ProjectsPreviewSection";
import TestimonialSection from "../../components/TestimonialSection/TestimonialSection";
import WhyChooseSection from "../../components/WhyChooseSection/WhyChooseSection";

const Home = () => {
	const { strings, language } = useLanguage();
	return (
		<>
			<Helmet key={language}>
				<title>{strings.pages.home.title}</title>
				<meta name="description" content={strings.pages.home.description} />
				<meta property="og:title" content={strings.pages.home.title} />
				<meta property="og:description" content={strings.pages.home.description} />
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
