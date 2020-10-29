import React, { useEffect, useState } from 'react';
import { Tab, Image, Menu } from 'semantic-ui-react';
import PostLayout from './PostLayout';
import PostDetail from '../views/post/PostDetail';
import logo from '../public/image/zigvy-logo.jpg'

const panes = [
	{
		menuItem: (
			<Menu.Item >
			  	<Image src={logo} size='tiny' style={{paddingRight: "20px"}}/> Zigvy
			</Menu.Item>
		),
		render: () => <Tab.Pane attached={false}>Tab 1 Content</Tab.Pane>
	},
	{
		menuItem: 'Blogs',
		render: () => <Tab.Pane attached={false}><PostLayout/></Tab.Pane>
	},
	{
		menuItem: (
			<Menu.Item key='user'>
			  	User<Image src='https://react.semantic-ui.com/images/avatar/large/elliot.jpg' size='tiny' style={{paddingLeft: "20px"}}/>
			</Menu.Item>
		),
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
