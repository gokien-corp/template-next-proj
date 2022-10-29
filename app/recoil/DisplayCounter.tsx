"use client"

import { useRecoilValue } from "recoil";
import { countState } from "../../state/recoil/count-state";

export const DisplayCounter = () => {

	let count = useRecoilValue(countState);
	return <div>
		{count}
	</div>
}