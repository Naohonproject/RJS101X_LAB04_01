/** @format */
/** @format */

import React, { Component } from "react";
import { useParams } from "react-router-dom";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Menu from "./MenuComponent";

import Contact from "./ContactComponent";
import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { LEADERS } from "../shared/leaders";
import { PROMOTIONS } from "../shared/promotions";
import DishDetail from "./DishDetailComponent";
import Home from "./HomeComponent";
import { Routes, Route, Link } from "react-router-dom";

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dishes: DISHES,
			comments: COMMENTS,
			leaders: LEADERS,
			promotions: PROMOTIONS,
		};
	}

	render() {
		const DishWithId = () => {
			const match = useParams();
			return (
				<DishDetail
					selectedDish={
						this.state.dishes.filter((dish) => {
							return dish.id === parseInt(match.dishID, 10);
						})[0]
					}
					comments={this.state.comments.filter((comment) => {
						return comment.dishId === parseInt(match.dishID, 10);
					})}
				/>
			);
		};

		return (
			<div>
				<div className="container">
					<Header />
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
						<Route
							index
							element={
								<Home
									dish={this.state.dishes}
									promotion={this.state.promotions}
									leader={this.state.leaders}
								/>
							}
						/>
						<Route exact path="/contactus" element={<Contact />} />
						<Route path="/menu/:dishID" element={<DishWithId />}></Route>
					</Routes>
					<Footer />
				</div>
			</div>
		);
	}
}

export default Main;
