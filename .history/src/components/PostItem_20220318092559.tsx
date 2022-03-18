import React from 'react'

export function PostItem({ post }) {
	return (
		<li>
			<div>
				<strong>{post.title}</strong>
				<strong>{post.body}</strong>
			</div>
		</li>
	)
}
