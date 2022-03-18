import React, { memo } from 'react'

function Item({ item }: { item: any }) {
	return (
		<li>
			<div>
				<strong>{item.title}</strong>
			</div>
		</li>
	)
}
export default Item;