/** @format */

import React, { Component, useEffect, useLayoutEffect } from "react";
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
import { fetchDishes } from "../redux/actions/actionCreators";

const mapStateToProps = (state) => {
	return {
		dishes: state.dishes,
		comments: state.comments,
		promotions: state.promotions,
		leaders: state.leaders,
	};
};

function mapDispatchToProps(dispatch) {
	return {
		fetchDishes: () => {
			dispatch(fetchDishes());
		},
	};
}

function Main(props) {
	useEffect(() => {
		props.fetchDishes();
	}, []);

	const DishWithId = () => {
		const match = useParams();
		return (
			<DishDetail
				isLoading={props.dishes.isLoading}
				errorMsg={props.dishes.errorMsg}
				selectedDish={
					props.dishes.dishes.filter((dish) => {
						return dish.id === parseInt(match.dishID, 10);
					})[0]
				}
				comments={props.comments.filter((comment) => {
					return comment.dishId === parseInt(match.dishID, 10);
				})}
				totalNumberOfComments={props.comments.length}
			/>
		);
	};

	return (
		<div>
			<div className="container">
				<Header />
				<Routes>
					<Route
						path="/menu"
						exact
						element={
							<Menu
								dishesLoading={props.dishes.isLoading}
								dishesErrorMsg={props.dishes.errorMsg}
								dishes={props.dishes.dishes}
							/>
						}
					/>
					<Route
						path="/home"
						element={
							<Home
								dishesLoading={props.dishes.isLoading}
								dishesErrorMsg={props.dishes.errorMsg}
								dish={props.dishes.dishes.filter((dish) => dish.featured)[0]}
								promotion={props.promotions.filter((pro) => pro.featured)[0]}
								leader={props.leaders.filter((leader) => leader.featured)[0]}
							/>
						}
					/>
					<Route exact path="/menu" element={<Menu dishes={props.dishes} />} />
					<Route
						index
						element={
							<Home
								dishesLoading={props.dishes.isLoading}
								dishesErrorMsg={props.dishes.errorMsg}
								dish={props.dishes.dishes.filter((dish) => dish.featured)[0]}
								promotion={props.promotions}
								leader={props.leaders}
							/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);
