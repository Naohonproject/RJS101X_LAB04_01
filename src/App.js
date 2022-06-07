/** @format */

import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./components/MenuComponent";
import Count from "./components/Couter";
import "./App.css";
import { DISHES } from "./shared/dishes";
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dishes: DISHES,
		};
	}
	handleClick() {
		console.log("print");
		this.setState({
			dishes: [
				...this.state.dishes,
				{
					id: this.state.dishes.length,
					name: "Uthappizza",
					image: "assets/images/uthappizza.png",
					category: "mains",
					label: "Hot",
					price: "4.99",
					description:
						"A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.",
				},
			],
		});
	}
	render() {
		return (
			<div>
				<Navbar dark color="primary">
					<div className="container"></div>
					<NavbarBrand href="/">Some code here</NavbarBrand>
				</Navbar>
				<Menu dishes={this.state.dishes} />
				<button onClick={() => this.handleClick()}>add more dish</button>
				<Count numberOfDishes={this.state.dishes.length} />
			</div>	
		);
	}
}

export default App;
