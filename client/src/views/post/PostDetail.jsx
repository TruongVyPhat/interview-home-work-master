import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import PostService, { PostServiceError } from '../../service/post.service';
import CommentService, { CommentServiceError } from '../../service/comment.service';
import Comment from '../comment/CommentList';
import Moment from 'react-moment';

const PostDetail = ({ id }) => {
    const [ Post, setPost ] = useState({});
    const [ comments, setComments ] = useState([]);
	useEffect(() => {
        getPost(id);
        getComments(id);
    }, [ id ]);

	const getPost = async (id) => {
		try {
			const response = await PostService.get_detail(id);
			if (response.message === 'OK') {
				setPost(response.data);
			}
		} catch (e) {
			setPost({});
		}
    };
    const getComments = async (id) => {
		try {
			const response = await CommentService.get_all(id);
			if (response.message === 'OK') {
				setComments(response.data);
			}
		} catch (e) {
			setComments([]);
		}
	};
	return (
		<Card style={{ width: '100%' }}>
			<Card.Body>
				<Card.Title>{Post.title}</Card.Title>
				<Card.Subtitle className="mb-2 text-muted">Author: {Post.name}</Card.Subtitle>
				<Card.Subtitle className="mb-2 text-muted">
					Created at: <Moment format="hh:mm:ss DD/MM/YYYY">{Post.created_at}</Moment>
				</Card.Subtitle>
				<Card.Text>
					{Post.content}
				</Card.Text>
                <Card.Link>{Post.num} replies</Card.Link>
                <Comment list={comments}/>
			</Card.Body>
		</Card>
	);
};

export default PostDetail;
