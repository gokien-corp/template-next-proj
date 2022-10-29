"use client"

import { useRecoilValue } from "recoil"
import { countState } from "../../../state/recoil/count-state"

export default function SubRecoil() {
	let count = useRecoilValue(countState)
	return <div>
		{count}
	</div>
}