import "../styles/globals.css"
import { Footer } from "./Footer";
import { Nav } from "./Nav";
import { Partytown } from '@builder.io/partytown/react'

export default function RootLayout({
	// Layouts must accept a children prop.
	// This will be populated with nested layouts or pages
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<meta charSet="UTF-8" />
				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>Next.js</title>
				<Partytown forward={['dataLayer.push']} />
			</head>
			<body>
				<div style={{ minHeight: "100vh", height: "100%" }}>
					<Nav />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	);
}