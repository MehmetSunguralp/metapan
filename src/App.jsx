import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Pricing from "./pages/Pricing/Pricing";
import Certificates from "./pages/Certificates/Certificates";
import Contact from "./pages/Contact/Contact";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="projects" element={<Projects />} />
				<Route path="pricing" element={<Pricing />} />
				<Route path="certificates" element={<Certificates />} />
				<Route path="contact" element={<Contact />} />
			</Route>
		</Routes>
	);
}

export default App;
