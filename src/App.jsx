import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import FeaturesSection from "./components/FeaturesSection/FeaturesSection";
import AboutSection from "./components/AboutSection/AboutSection";
import ProjectsPreviewSection from "./components/ProjectsPreviewSection/ProjectsPreviewSection";
import TestimonialSection from "./components/TestimonialSection/TestimonialSection";
import WhyChooseSection from "./components/WhyChooseSection/WhyChooseSection";
import CallToAction from "./components/CallToAction/CallToAction";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<FeaturesSection />
				<AboutSection />
				<ProjectsPreviewSection />
				<TestimonialSection />
				<WhyChooseSection />
				<CallToAction />
			</main>
			<Footer />
		</>
	);
}

export default App;
