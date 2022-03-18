import React, { useEffect, useState } from 'react'
import axios from 'axios'

export function PostList() {

	const [posts, setPost] = useState([])

	useEffect(() => {
		axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
			console.log(response.data)
			setPost(response.data)
		})
	}, [])

	return (
		<ul>
			{posts.map((post) => {
				return <h1>post.id</h1>
			})}
		</ul>
	)
}
