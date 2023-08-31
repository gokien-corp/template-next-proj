import { Suspense } from "react"
import { Item } from "./component/item"
import { ItemLoading } from "./component/item-loading"

export default () => {
	return <div className="flex items-center justify-center transition-opacity duration-700">
		Loading...
	</div>
}