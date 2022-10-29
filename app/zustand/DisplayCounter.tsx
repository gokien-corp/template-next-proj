"use client"

import { useCountStore } from "../../state/zustand/count-store"

export const DisplayCounter = () => {
	const count = useCountStore(state => state.value)
	console.log("Refresh component")
	return <div>
		{count} with refresh whole this component
	</div>
}