import { createContext, useContext, useState, useEffect } from "react";
import { trStrings } from "../langs/trStrings";
import { enStrings } from "../langs/enStrings";

const LanguageContext = createContext();

export const useLanguage = () => {
	const context = useContext(LanguageContext);
	if (!context) {
		throw new Error("useLanguage must be used within a LanguageProvider");
	}
	return context;
};

export const LanguageProvider = ({ children }) => {
	const [language, setLanguage] = useState(() => {
		// Check localStorage first, then browser language, default to Turkish
		const savedLanguage = localStorage.getItem("language");
		if (savedLanguage) {
			return savedLanguage;
		}
		const browserLang = navigator.language.split("-")[0];
		return browserLang === "en" ? "en" : "tr";
	});

	const [strings, setStrings] = useState(() => {
		return language === "en" ? enStrings : trStrings;
	});

	useEffect(() => {
		setStrings(language === "en" ? enStrings : trStrings);
		localStorage.setItem("language", language);
	}, [language]);

	const changeLanguage = (lang) => {
		setLanguage(lang);
	};

	return (
		<LanguageContext.Provider value={{ language, strings, changeLanguage }}>
			{children}
		</LanguageContext.Provider>
	);
};
