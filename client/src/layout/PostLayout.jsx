import React, { useEffect, useState } from 'react';
import PostList from '../views/post/PostList';
import { Pagination } from 'react-bootstrap'
import PostService, { PostServiceError } from '../service/post.service';

const PostLayout = () => {
	const [ Post, setPosts ] = useState([]);
	const [ Page, setPage ] = useState(1);
	useEffect(() => {
		getPosts(Page);
	}, [ Page ]);
	let items = [];
	
	const handleChangePage = (number) => {
		setPage(number);
	}	

	for (let number = 1; number <= 2; number++) {
	items.push(
		<Pagination.Item key={number} active={number === Page} onClick={e => handleChangePage(number)}>
		{number}
		</Pagination.Item>,
	);
	}

	const getPosts = async (page) => {
		try {
			const response = await PostService.get_all(page);
			if (response.message === 'OK') {
				setPosts(response.data);
			}
		} catch (e) {
			setPosts([]);
		};
	}

	return (
		<div>
			<PostList list={Post}/>
			<br/>
			<Pagination style={{ paddingLeft: "50%" }}>{items}</Pagination>
		</div>
	)
}

export default PostLayout;
