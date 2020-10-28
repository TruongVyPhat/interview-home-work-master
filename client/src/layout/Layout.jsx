import React, { useEffect, useState } from 'react';
import { Tab } from 'semantic-ui-react';
import PostLayout from './PostLayout';
import PostDetail from '../views/post/PostDetail';

const panes = [
	{
		menuItem: 'Logo',
		render: () => <Tab.Pane attached={false}>Tab 1 Content</Tab.Pane>
	},
	{
		menuItem: 'Blogs',
		render: () => <Tab.Pane attached={false}><PostLayout/></Tab.Pane>
	},
	{
		menuItem: 'User',
		render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>
	}
];

const Layout = ({ match }) => {
    const [ postId, setPostId ] = useState(null);
    
    useEffect(() => {
        const id = match ? match.params.id : null;
        setPostId(id);
    }, [ match ])
    return (
        <div>   
            {!postId && <Tab menu={{ pointing: true }} panes={panes} />}
            {postId && <PostDetail id={postId}/>}
        </div>
    );
};

export default Layout;
