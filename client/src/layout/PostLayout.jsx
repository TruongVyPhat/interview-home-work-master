import React, { useEffect, useState } from 'react';
import PostList from '../views/post/PostList';
import { Pagination } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { watchPost } from '../actions/post.action';

const PostLayout = () => {
	const postList = useSelector((state) => state.postList);
	const dispatch = useDispatch();
	const [ Page, setPage ] = useState(1);
	useEffect(() => {
			// getPosts(Page);
			dispatch(watchPost(Page));
	},[ Page ]);

	let items = [];

	const handleChangePage = (number) => {
		setPage(number);
	};

	for (let number = 1; number <= 2; number++) {
		items.push(
			<Pagination.Item key={number} active={number === Page} onClick={(e) => handleChangePage(number)}>
				{number}
			</Pagination.Item>
		);
	}

	return (
		<div>
			<PostList list={postList} />
			<br />
			<Pagination style={{ paddingLeft: '50%' }}>{items}</Pagination>
		</div>
	);
};

export default PostLayout;
