/** @format */

import React, { Component } from "react";
import { useParams } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";

import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Menu from "./MenuComponent";
import Contact from "./ContactComponent";
import DishDetail from "./DishDetailComponent";
import Home from "./HomeComponent";
import About from "./AboutComponent";

const mapStateToProps = (state) => {
	return {
		dishes: state.dishes,
		comments: state.comments,
		promotions: state.promotions,
		leaders: state.leaders,
	};
};

function Main(props) {
	const DishWithId = () => {
		const match = useParams();
		return (
			<DishDetail
				selectedDish={
					props.dishes.filter((dish) => {
						return dish.id === parseInt(match.dishID, 10);
					})[0]
				}
				comments={props.comments.filter((comment) => {
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
								dish={props.dishes.filter((dish) => dish.featured)[0]}
								promotion={props.promotions.filter((pro) => pro.featured)[0]}
								leader={props.leaders.filter((leader) => leader.featured)[0]}
							/>
						}
					/>
					<Route
						index
						element={
							<Home
								dish={props.dishes.filter((dish) => dish.featured)[0]}
								promotion={props.promotions.filter((pro) => pro.featured)[0]}
								leader={props.leaders.filter((leader) => leader.featured)[0]}
							/>
						}
					/>
					<Route exact path="/menu" element={<Menu dishes={props.dishes} />} />
					<Route
						index
						element={
							<Home dish={props.dishes} promotion={props.promotions} leader={props.leaders} />
						}
					/>
					<Route exact path="/contactus" element={<Contact />} />
					<Route path="/menu/:dishID" element={<DishWithId />}></Route>
					<Route path="/aboutus" element={<About leaders={props.leaders} />} />
				</Routes>
				<Footer />
			</div>
		</div>
	);
}

export default connect(mapStateToProps)(Main);
