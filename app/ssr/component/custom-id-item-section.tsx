"use client"

import { Button } from "../../../components/Button"

export const CustomIdItemSection = () => {
	var id: string = ""
	return <div className="mt-3 border border-gray-100 m-2 p-2 flex flex-col gap-2 items-start">
		Custom item
		<input
			className="border-gray-300 border rounded-full px-2 py-1"
			value={id} onChange={(event) => { id = event.target.value }} placeholder="Item id" />
		<Button
			className=""
		>Search</Button>
	</div>
}