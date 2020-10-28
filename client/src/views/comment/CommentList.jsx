import React from 'react';
import { Button, Comment, Form } from 'semantic-ui-react';
import Moment from 'react-moment';

const CommentList = ({ list }) => (
	<Comment.Group>
		{list.length > 0 &&
			list.map((item) => (
				<Comment key={item.id}>
					<Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
					<Comment.Content>
						<Comment.Author as="a">{item.name}</Comment.Author>
						<Comment.Metadata>
							<div><Moment format="hh:mm:ss DD/MM/YYYY">{item.created_at}</Moment></div>
						</Comment.Metadata>
						<Comment.Text>{item.content}</Comment.Text>
					</Comment.Content>
				</Comment>
			))}
		<Form reply>
			<Form.TextArea />
			<Button content="Add Reply" labelPosition="left" icon="edit" primary />
		</Form>
	</Comment.Group>
);

export default CommentList;
