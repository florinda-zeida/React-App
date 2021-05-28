import React from "react";
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";
import Navbar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';
import PageList from "./components/pages/PageList";
import PageDetail from "./components/pages/PageDetail";

import "./App.css";


function App() {
	return (

		<div className ="container">
		<Router>
		<div>
		<Navbar className="bg-custom">
			<Nav>
				<Link to="/">Home</Link>
			</Nav>
		</Navbar>

			<Switch>
				<Route path="/" exact>
					<PageList />
				</Route>
				<Route path="/page/:id">
					<PageDetail />
				</Route>
			</Switch>
		</div>
	</Router>
	</div>
  
	);
}

export default App;





