import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import './Home.scss'

const configNav = [
  { text: '首页', url: '/' },
  { text: '分类', url: '/category' },
  { text: '购物车', url: '/car' },
  { text: '我的', url: '/mine' }
]

class Home extends Component {
	constructor (props) {
		super(props)
		this.state = {}
	}
	render () {
		return (
		    <Router>
		      <div>
		        <ul className="tabBar">
		          	{
		                configNav.map((item,i) =>
		                    <li key={i}><NavLink to={item.url} activeClassName="active">{item.text}</NavLink></li>
		                )
	            	}
		        </ul>

		        <div>
			        <Route exact path="/" component={HomeView} />
			        <Route path="/category" component={Category} />
			        <Route path="/car" component={Car} />
			        <Route path="/mine" component={Mine} />
		        </div>
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

function Category() {
  return (
    <div>
      <h2>分类</h2>
    </div>
  );
}

function Car() {
  return (
    <div>
      <h2>购物车</h2>
    </div>
  );
}

function Mine() {
  return (
    <div>
      <h2>我的</h2>
    </div>
  );
}

export default Home;