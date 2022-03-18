import React, { useEffect, useState } from 'react'
import axios from 'axios'

export function PostList() {

	const [posts, setPost] = useState<any[]>([])

	useEffect(() => {
		axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {

			setPost(response.data)
		})
	}, [])

	return (
		<ul>
			{posts.map((post) => {
				return <div>{post.title}</div>
			})}
		</ul>
	)
}
