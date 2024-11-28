"use client";
import React, { useEffect } from "react";
import { useAppContext } from "@/context/AppContext";
import { NotFound } from "@/components";

export default function NotFoundPage() {
	const { setIs404 } = useAppContext();

	useEffect(() => {
		setIs404(true);
		return () => setIs404(false);
	}, [setIs404]);

	return <NotFound />;
}
