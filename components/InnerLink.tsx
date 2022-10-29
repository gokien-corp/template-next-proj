import Link from "next/link";
import { BasePropsComponent } from "../modules/props/base-props";

export interface LinkProps extends BasePropsComponent {
	href: string
}

export const InnerLink = (props: LinkProps) => {
	return <Link href={props.href}
		className={"text-pink-600 hover:text-pink-500"}>
		{props.children}
	</Link>
}