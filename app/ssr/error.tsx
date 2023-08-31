'use client'

import { Button } from "../../components/Button"

interface Props {
	error: Error,
	reset: () => void
}

export default (props: Props) => {
	return <div className={`h-[200px] flex flex-col items-center justify-center gap-3`}>
		<h2 className="text-xl font-semibold">Something went wrong!</h2>
		<div className="text-sm">{props.error.message}</div>
		<Button onClick={props.reset}>Retry</Button>
	</div>
}