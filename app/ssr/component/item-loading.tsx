import { BasePropsComponent } from "../../../libs/props/base-props"

interface ItemLoadingProps extends BasePropsComponent {
	isRed?: boolean
}

export const ItemLoading = (props: ItemLoadingProps) => {
	return <div className={`${props.isRed == true ? "text-red-500" : "text-blue-500"}`}>Item loading</div>
}