import { client } from './../assets/http'

const userId = 1871
const getPosts = async () => {
	const posts = await client.get(`/posts?userId=${userId}`)

	return posts;
}

const createPost = async (data) => {
	const post = await client.post('/posts', {
		...data,
		userId
	});

	return post;
}

export const postsApi = {
	getPosts,
	createPost,
}