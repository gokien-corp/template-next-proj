import "../styles/globals.css"
import { Footer } from "./Footer";
import { Nav } from "./Nav";

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
				<title>Next.js</title>
			</head>
			<body>
				<Nav />
				{children}
				<Footer />
			</body>
		</html>
	);
}