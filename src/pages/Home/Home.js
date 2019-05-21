import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import './Home.scss'

const configNav = [
  { text: '首页', url: '/', icon: 'iconshouye'},
  { text: '分类', url: '/category', icon: 'iconleimupinleifenleileibie'},
  { text: '购物车', url: '/car', icon: 'icongouwuche2'},
  { text: '我的', url: '/mine', icon: 'iconwode'}
]

class Home extends Component {
	constructor () {
		super()
		this.state = {}
	}
	render () {
		return (
		    <Router>
		      <div>
		        <ul className="tabBar">
		          	{
		                configNav.map((item,i) =>
		                    <li key={i}>		                    	
		                    	<NavLink exact to={item.url} activeClassName="active"><i className={`icon iconfont ${item.icon}`}></i>{item.text}</NavLink>
		                    </li>
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