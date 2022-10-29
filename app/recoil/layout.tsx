"use client"

import { RecoilRoot } from "recoil";

export default function RootLayout({
	// Layouts must accept a children prop.
	// This will be populated with nested layouts or pages
	children,
}: {
	children: React.ReactNode;
}) {
	return <RecoilRoot>
		{children}
	</RecoilRoot>
}