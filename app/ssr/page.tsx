export default async function () {
	const response = (await fetch("http://localhost:3000" + "/api", { method: 'GET' }))
	const json = await response.json()

	return <div>
		{/* {JSON.stringify(response)} */}
		{/* {JSON.stringify(json)} */}
		{json.message}
	</div>
}