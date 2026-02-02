import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import FeaturesSection from "./components/FeaturesSection/FeaturesSection";
import AboutSection from "./components/AboutSection/AboutSection";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
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
				<ProjectsSection />
				<CallToAction />
			</main>
			<Footer />
		</>
	);
}

export default App;
