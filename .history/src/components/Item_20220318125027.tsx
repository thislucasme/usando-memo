import React, { memo } from 'react'

function Item({ item, onAddToWishList }: { item: any, onAddToWishList: (item: string) => void }) {
	return (
		<li>
			<div>
				<strong>{item}</strong>
			</div>
		</li>
	)
}
export default memo(Item);