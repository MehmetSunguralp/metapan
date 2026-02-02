import Hero from "../../components/Hero/Hero";
import FeaturesSection from "../../components/FeaturesSection/FeaturesSection";
import AboutSection from "../../components/AboutSection/AboutSection";
import ProjectsPreviewSection from "../../components/ProjectsPreviewSection/ProjectsPreviewSection";
import TestimonialSection from "../../components/TestimonialSection/TestimonialSection";
import WhyChooseSection from "../../components/WhyChooseSection/WhyChooseSection";

const Home = () => {
	return (
		<>
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
