import { OuterLink } from "../../components/OuterLink";
import { DisplayCounter } from "./DisplayCounter";
import { UpdateCounter } from "./UpdateCounter";

export default function Zustand() {
	return <main>
		<h1><OuterLink href="https://github.com/pmndrs/zustand">Zustand</OuterLink> state management</h1>
		<p>
			Update counter in Zustand with <UpdateCounter /> and the result <DisplayCounter />
		</p>
	</main>
}