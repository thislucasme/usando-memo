import React, { useEffect, useState } from 'react'

export default function PostList() {

	const [post, setPost] = useState([])

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts').then(response => {
			response.json().then(data => {
				setPost(data)
			})
		})
	}, [])

	return (
		<div>PostList</div>
	)
}
