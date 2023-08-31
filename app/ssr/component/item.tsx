import { BasePropsComponent } from "../../../libs/props/base-props";

interface ItemProps extends BasePropsComponent {
	id: string
}

export const Item = async (props: ItemProps) => {
	if (props.id == null || props.id == undefined) {
		return <div>Error: No id found</div>
	}
	const res = await fetch(process.env.URL + `/api/item?id=${props.id}`, { next: { revalidate: 120 } })
	const json = await res.json()
	return <div>
		{json.message}
	</div>
}