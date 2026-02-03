import Header from "../Header/Header";
import CallToAction from "../CallToAction/CallToAction";
import Footer from "../Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
	const location = useLocation();
	const isContactPage = location.pathname === "/contact";

	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
			{!isContactPage && <CallToAction />}
			<Footer />
		</>
	);
};

export default Layout;
