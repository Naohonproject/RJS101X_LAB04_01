/** @format */
/** @format */

import React, { Component } from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Menu from "./MenuComponent";
import Count from "./Counter";
import DishDetail from "./DishDetailComponent";
import Contact from "./ContactComponent";
import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { LEADERS } from "../shared/leaders";
import { PROMOTIONS } from "../shared/promotions";

import Home from "./HomeComponent";
import { Routes, Route, Link } from "react-router-dom";

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dishes: DISHES,
			// selectedDish: null,
			comments: COMMENTS,
			leaders: LEADERS,
			promotions: PROMOTIONS,
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

	// handleShowDetail(dish) {
	// 	this.setState({ selectedDish: dish });
	// }

	render() {
		return (
			<div>
				<div className="container">
					<Header />
					{/* <Menu
						onClick={(dish) => this.handleShowDetail(dish)}
						selectedDish={this.state.selectedDish}
						dishes={this.state.dishes}
					/> */}
					{/* <button onClick={() => this.handleAddDish()}>add more dish</button> */}
					{/* <Count numberOfDishes={this.state.dishes.length} /> */}
					{/* <DishDetail comments={this.state.comments} selectedDish={this.state.selectedDish} /> */}
					<Routes>
						<Route
							path="/home"
							element={
								<Home
									dish={this.state.dishes.filter((dish) => dish.featured)[0]}
									promotion={this.state.promotions.filter((pro) => pro.featured)[0]}
									leader={this.state.leaders.filter((leader) => leader.featured)[0]}
								/>
							}
						/>
						<Route exact path="/menu" element={<Menu dishes={this.state.dishes} />} />
						<Route index element={<Home />} />
						<Route exact path="/contactus" element={<Contact />} />
					</Routes>
					<Footer />
				</div>
			</div>
		);
	}
}

export default Main;
