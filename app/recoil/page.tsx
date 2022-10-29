import Link from "next/link";
import { InnerLink } from "../../components/InnerLink";
import { DisplayCounter } from "./DisplayCounter";
import { UpdateCounter } from "./UpdateCounter";

export default function Recoil() {
	return <div>
		<section className="p-2">
			<h1>RecoilJS</h1>
			<p>Remember when you move away this location (/recoil/*), all state will be reset</p>
			<p>All sublocation's state will be kept, example: <InnerLink href="/recoil/sub">Sublocation</InnerLink></p>
			<UpdateCounter />
			<DisplayCounter />
		</section>
	</div>
}