import { NextRequest, NextResponse } from "next/server"
import { wait } from "../../../libs/helper/wait"

export async function GET(request: NextRequest) {

	await wait(2000)

	const id = request.nextUrl.searchParams.get("id")

	return NextResponse.json({
		message: `Hello item ${id}`
	})
}