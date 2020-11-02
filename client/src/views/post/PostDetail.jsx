import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import Comment from '../comment/CommentList';
import Moment from 'react-moment';
import { useSelector, useDispatch } from 'react-redux';
import { watchComment } from '../../actions/comment.action';
import { watchDetail } from '../../actions/selected.action';

const PostDetail = ({ id }) => {
    const Post = useSelector((state) => state.selectedPost);
	const comments = useSelector((state) => state.comment);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(watchComment(id));
		dispatch(watchDetail(id));
	}, [ id ]);
	
	return (
		<Card style={{ width: '100%' }}>
			<Card.Body>
				<Card.Title>{Post.title}</Card.Title>
				<Card.Subtitle className="mb-2 text-muted">Author: {Post.name}</Card.Subtitle>
				<Card.Subtitle className="mb-2 text-muted">
					Created at: <Moment>{Post.created_at}</Moment>
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
