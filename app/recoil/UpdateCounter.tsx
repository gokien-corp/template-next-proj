"use client"

import { useSetRecoilState } from "recoil"
import { Button } from "../../components/Button"
import { BasePropsComponent } from "../../libs/props/base-props"
import { countState } from "../../state/recoil/count-state"

interface Props extends BasePropsComponent { }
export const UpdateCounter = (props: Props) => {

	let setCount = useSetRecoilState(countState)

	return <Button onClick={() => {
		setCount(num => num + 1)
	}}>
		Update count
	</Button>
}