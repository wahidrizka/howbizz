"use client";
import clsx from "clsx";
import styles from "./Home.module.css";
import React from "react";
import { Stack } from "@/components";

export const Home = () => {
	return (
		<div className="min-h-screen flex items-center justify-center p-12">
			<div>
				<Stack gap="12px">
					<div className="bg-gray-900 h-12 w-12 rounded-md"></div>
					<div className="bg-gray-900 h-12 w-12 rounded-md"></div>
					<div className="bg-gray-900 h-12 w-12 rounded-md"></div>
				</Stack>
			</div>
		</div>
	);
};
