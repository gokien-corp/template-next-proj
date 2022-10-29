import Link from "next/link"
import { LinkProps } from "./InnerLink"

export const OuterLink = (props: LinkProps) => {
	return <a href={props.href}
		className={"text-blue-600 hover:text-blue-500"}
		target="_blank"
		rel="nofollow"
	>
		{props.children}
	</a>
}