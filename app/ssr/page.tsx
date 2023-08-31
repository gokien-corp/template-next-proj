import { Suspense } from "react"
import { Item } from "./component/item"
import { ItemLoading } from "./component/item-loading"
import { CustomIdItemSection } from "./component/custom-id-item-section"

export const runtime = "edge"

export default async function () {
	throw Error("Ahihi");
	const response = (await fetch(process.env.URL + "/api", { method: 'GET' }))
	const json = await response.json()


	return <div>
		<div>SSR and streaming</div>
		{json.message}
		<div>Items</div>
		<Suspense fallback={<ItemLoading />}>
			<Item id="1" />
		</Suspense>
		<Suspense fallback={<ItemLoading isRed={true} />}>
			<Item id="2" />
		</Suspense>

		<CustomIdItemSection />

	</div>
}