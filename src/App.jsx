import { Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Layout from "./components/Layout/Layout";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Pricing from "./pages/Pricing/Pricing";
import Certificates from "./pages/Certificates/Certificates";
import Contact from "./pages/Contact/Contact";
import Gallery from "./pages/Gallery/Gallery";
import Dealers from "./pages/Dealers/Dealers";
import WhyChoose from "./pages/WhyChoose/WhyChoose";

function App() {
	return (
		<LanguageProvider>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="about" element={<About />} />
					<Route path="projects" element={<Projects />} />
					<Route path="pricing" element={<Pricing />} />
					<Route path="certificates" element={<Certificates />} />
					<Route path="contact" element={<Contact />} />
					<Route path="gallery" element={<Gallery />} />
					<Route path="dealers" element={<Dealers />} />
					<Route path="why-choose" element={<WhyChoose />} />
				</Route>
			</Routes>
		</LanguageProvider>
	);
}

export default App;
