"use client"

import { Button } from "../../components/Button"
import { useCountStore } from "../../state/zustand/count-store"

export const UpdateCounter = () => {

	var updateFunc = useCountStore(state => state.increaseBy)
	return <Button onClick={() => updateFunc(1)}>Update</Button>
}