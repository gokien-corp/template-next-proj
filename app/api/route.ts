import { NextResponse } from "next/server";

export async function GET(request: Request) {

	// await wait(500)

	return NextResponse.json({
		message: "Hello world"
	})
}