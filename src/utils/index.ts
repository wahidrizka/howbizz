"use client";
import React from "react";
import { ResponsiveMap } from "@/types";

// Utility function to extract responsive values
export const getResponsiveValue = <T>(value: T | ResponsiveMap<T>, prop: "xs" | "sm" | "smd" | "md" | "lg" | "xl"): T | undefined => {
	if (typeof value !== "object" || value === null) return undefined;
	return (value as ResponsiveMap<T>)[prop];
};

export const generateResponsiveComponentStyles = (component: string, property: string, value: string | ResponsiveMap<string>) => {
	const breakpoints: Array<keyof ResponsiveMap<string>> = ["xs", "sm", "smd", "md", "lg", "xl"];
	const styles: { [key: string]: string | undefined } = {};

	if (typeof value === "object") {
		breakpoints.forEach((bp) => {
			styles[`--${bp}-${component}-${property}`] = value[bp];
		});
	} else {
		styles[`--${component}-${property}`] = value;
	}

	return styles;
};
