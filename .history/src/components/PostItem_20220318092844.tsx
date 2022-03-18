import React from 'react'

export function PostItem({ post }: { post: any[] }) {
	return (
		<li>
			<div>
				<strong>{post.title}</strong>
				<strong>{post.body}</strong>
			</div>
		</li>
	)
}
