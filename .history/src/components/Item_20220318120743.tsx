import React, { memo } from 'react'

function ItemComponent({ item }: { item: any }) {
	return (
		<li>
			<div>
				<strong>{item}</strong>
			</div>
		</li>
	)
}
export const Item = memo(ItemComponent);