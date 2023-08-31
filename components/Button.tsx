import { combineCN } from "../libs/helper/string-processing/comnine-classname";
import { BasePropsComponent } from "../libs/props/base-props";

interface ButtonProps extends BasePropsComponent { }

export const Button = (props: ButtonProps) => {
	return <button
		className={combineCN("bg-pink-600 hover:opacity-90 text-white px-3 py-1 rounded-full active:opacity-80 font-semibold", props.className)}
		onClick={props.onClick} type="button">
		{props.children}
	</button>
}