import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Layout from './layout/Layout';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/'>
					<Redirect to="/posts" />
				</Route>
				<Route path="/posts/:id"
					render={props => <Layout {...props}/>}
				/>
				<Route path="/posts"
					render={props => <Layout {...props}/>}
				/>
			</Switch>
		</Router>
	);
};

export default App;
