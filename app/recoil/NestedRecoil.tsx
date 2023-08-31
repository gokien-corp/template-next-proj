'use client';

import { RecoilRoot, useRecoilState } from "recoil"
import { countState } from "../../state/recoil/count-state";
import { Button } from "../../components/Button";

export const NestedRecoil = () => {
	return <RecoilRoot>
		<div className="text-xl">Nested recoil state</div>
		<Inside />
	</RecoilRoot>
}

function Inside() {

	const [count, setCount] = useRecoilState(countState)

	return <div>
		Current: {count}
		<Button onClick={() => { setCount(cur => cur + 1) }}>Increase</Button>
	</div>
}