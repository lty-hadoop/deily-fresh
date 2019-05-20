import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Home extends Component {
	constructor (props) {
		super(props)
		this.state = {}
	}
	render () {
		return (
		    <Router>
		      <div>
		        <ul>
		          <li>
		            <Link to="/">首页</Link>
		          </li>
		          <li>
		            <Link to="/about">分类</Link>
		          </li>
		          <li>
		            <Link to="/topic">购物车</Link>
		          </li>
		        </ul>

		        <hr />

		        <Route exact path="/" component={HomeView} />
		        <Route path="/about" component={About} />
		        <Route path="/topic" component={Topic} />
		      </div>
		    </Router>
		  );
	}
  
}

class HomeView extends Component {
	render () {
		return (
		    <div>
		      <h2>HomeView</h2>
		    </div>
		  );
	}
  
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Topic() {
  return (
    <div>
      <h2>Topic</h2>
    </div>
  );
}


export default Home;