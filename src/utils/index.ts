"use client";
import { ResponsiveMap } from "@/types";

// Utility function to extract responsive values
export const getResponsiveValue = <T>(
	value: T | ResponsiveMap<T>,
	prop: "xs" | "sm" | "smd" | "md" | "lg" | "xl"
): T | undefined => {
	if (typeof value !== "object" || value === null) return undefined; // Not responsive
	return (value as ResponsiveMap<T>)[prop];
};
