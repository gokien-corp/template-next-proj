import { BasePropsComponent } from "../modules/props/base-props";

interface ButtonProps extends BasePropsComponent { }

export const Button = (props: ButtonProps) => {
	return <button
		className="bg-pink-600 hover:opacity-90 text-white px-2 py-1 rounded-full"
		onClick={props.onClick} type="button">
		{props.children}
	</button>
}