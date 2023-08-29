import Link from "next/link";
import { BasePropsComponent } from "../libs/props/base-props";

export const Nav = () => {
	return <nav className="py-3 px-2 shadow sticky top-0 left-0 right-0 bg-white flex justify-between">
		<ul className="flex gap-x-2">
			<li><NavItem href="/">Home</NavItem></li>
			<li><NavItem href="/recoil">Recoil</NavItem></li>
			<li><NavItem href="/zustand">Zustand</NavItem></li>
		</ul>
	</nav>
}


interface NavItemProps extends BasePropsComponent {
	href: string
}

const NavItem = (props: NavItemProps) => {
	return <Link href={props.href}
		className={"text-pink-600 hover:opacity-60 font-semibold px-2"}>
		{props.children}
	</Link>
}