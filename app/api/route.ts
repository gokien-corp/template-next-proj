import { NextResponse } from "next/server";
import { wait } from "../../libs/helper/wait";

export async function GET(request: Request) {

	await wait(2000)

	return NextResponse.json({
		message: "Hello world"
	})
}