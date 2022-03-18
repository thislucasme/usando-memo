import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { PostItem } from '../components/PostItem'
export function PostList() {

	const [posts, setPost] = useState<any[]>([])
	const [newPost, setNewPost] = useState('')

	useEffect(() => {
		axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {

			setPost(response.data)
		})
	}, [])

	return (
		<>
			<input onChange={e => { setNewPost(e.target.value) }} value={newPost} />
			<ul>
				{posts.map((post) => {
					return <PostItem key={post.id} post={post} />
				})}
			</ul>
		</>
	)
}
