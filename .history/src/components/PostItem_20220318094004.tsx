import React, { memo } from 'react'

function PostItem({ post }: { post: any }) {
	return (
		<li>
			<div>
				<strong>{post.title}</strong>
				<strong>{post.body}</strong>
			</div>
		</li>
	)
}
export default memo(PostItem)