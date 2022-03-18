import React, { useEffect, useState } from 'react'

export function PostList() {

	const [posts, setPost] = useState([])

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts').then(response => {
			response.json().then(data => {
				setPost(data)
			})
		})
	}, [])

	return (
		<ul>
			{posts.map(post => <strong key={1}>d</strong>)}
		</ul>
	)
}
