import { NextRequest, NextResponse } from "next/server"
import { wait } from "../../../libs/helper/wait"

export async function GET(request: NextRequest) {

	const randomSecond = Math.floor(Math.random() * 5); //Random from 0 to 4

	await wait(randomSecond * 1000)

	const id = request.nextUrl.searchParams.get("id")

	return NextResponse.json({
		message: `Hello item ${id}`
	})
}