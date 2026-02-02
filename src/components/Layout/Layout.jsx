import Header from "../Header/Header";
import CallToAction from "../CallToAction/CallToAction";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
			<CallToAction />
			<Footer />
		</>
	);
};

export default Layout;
