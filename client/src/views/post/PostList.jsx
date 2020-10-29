import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { Accordion, Icon } from 'semantic-ui-react';
import CommentService, { CommentServiceError } from '../../service/comment.service';
import Comment from '../comment/CommentList';
import { useHistory } from "react-router-dom";
import Moment from 'react-moment';
import Search from './Search';

const PostList = ({ list }) => {
    const history = useHistory();
    const [ activeIndex, setActiveIndex ] = useState(0);
    const [ comments, setComments ] = useState([]);
    const handleClick = (e, titleProps) => {
        const { index } = titleProps
        const newIndex = activeIndex === index ? -1 : index
        setActiveIndex(newIndex);
    };
    useEffect(() => {
        if (activeIndex > 0)
            getLastedComments(activeIndex);
    }, [ activeIndex ]);

    const getLastedComments = async (post_id) => {
        try {
			const response = await CommentService.get_all(post_id);
			if (response.message === 'OK') {
				setComments(response.data);
			}
		} catch (e) {
			setComments([]);
		};
    }
    const handleSeeDetail = (id) => {
        if (id > 0){
            history.push(`/posts/${id}`);
        }
		
    }
    
	return (
		<div>
            <Search/>
			{list.length > 0 &&
				list.map((item) => (
					<Card style={{ width: '100%' }} key={item.id}>
						<Card.Body>
							<Card.Title>{item.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Author: {item.name}</Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted">Created at: <Moment>{item.created_at}</Moment></Card.Subtitle>
							<Card.Text>
								{item.content.substring(0, 300) + `...`}
                                <Card.Link onClick={e => handleSeeDetail(item.id)}>See more</Card.Link>
							</Card.Text>
							
                            <Accordion styled fluid>
                                <Accordion.Title
                                    active={activeIndex === item.id}
                                    index={item.id}
                                    onClick={handleClick}
                                >
                                <Icon name='dropdown' />
                                {item.num} replies
                                </Accordion.Title>
                                <Accordion.Content active={activeIndex === item.id}>
                                    <Comment list={comments}/>
                                </Accordion.Content>
                            </Accordion>
						</Card.Body>
					</Card>
				))}
		</div>
	);
};

export default PostList;
