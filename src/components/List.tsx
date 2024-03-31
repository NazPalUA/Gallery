import { StockItem } from "../types"
import Card from "./UI/Card"

type ListProps = {
	items: StockItem[] | undefined
}

export default function List({ items }: ListProps) {
	return (
		<div className="row mt-3">
			{items?.map(item => (
				<div key={item.createdAt.toString()} className="col-4 mb-5">
					<Card {...item} />
				</div>
			))}
		</div>
	)
}
