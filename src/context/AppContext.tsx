"use client";
import React, { createContext, useContext, useState } from "react";

type AppContextType = {
	is404: boolean;
	setIs404: (value: boolean) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
	const [is404, setIs404] = useState(false);

	return (
		<AppContext.Provider value={{ is404, setIs404 }}>
			{children}
		</AppContext.Provider>
	);
};

export const useAppContext = () => {
	const context = useContext(AppContext);
	if (!context) {
		throw new Error("useAppContext must be used within an AppProvider");
	}
	return context;
};
