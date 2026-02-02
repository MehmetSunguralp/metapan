import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import CallToAction from "./components/CallToAction/CallToAction";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<>
			<Header />
			<main style={{ paddingTop: "80px" }}>
				<Hero />
				<ProjectsSection />
				<CallToAction />
			</main>
			<Footer />
		</>
	);
}

export default App;
