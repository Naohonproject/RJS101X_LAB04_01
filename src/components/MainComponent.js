/** @format */
/** @format */

import React, { Component } from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Menu from "./MenuComponent";
import Count from "./Counter";
import DishDetail from "./DishDetailComponent";
import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dishes: DISHES,
			selectedDish: null,
			comments: COMMENTS,
		};
	}
	handleAddDish() {
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

	handleShowDetail(dish) {
		this.setState({ selectedDish: dish });
	}

	render() {
		return (
			<div>
				<div className="container">
					<Header />
					<Menu
						onClick={(dish) => this.handleShowDetail(dish)}
						selectedDish={this.state.selectedDish}
						dishes={this.state.dishes}
					/>
					<button onClick={() => this.handleAddDish()}>add more dish</button>
					<Count numberOfDishes={this.state.dishes.length} />
					<DishDetail comments={this.state.comments} selectedDish={this.state.selectedDish} />
					<Footer />
				</div>
			</div>
		);
	}
}

export default Main;
