/** @format */

import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

import { baseUrl } from "../shared/baseUrl";
import { Loading } from "./LoadingComponent";

function Menu({ dishes, dishesErrorMsg, dishesLoading }) {
	if (dishesLoading) {
		return (
			<div className="container">
				<div className="row">
					<Loading />
				</div>
			</div>
		);
	} else if (dishesErrorMsg) {
		return (
			<div className="container">
				<div className="row">
					<h4>{dishesErrorMsg}</h4>
				</div>
			</div>
		);
	} else {
		const menu = dishes.map((dish) => {
			return (
				<div key={dish.id} className="col-12 col-md-5 m-1">
					<Card>
						<Link to={`/menu/${dish.id}`}>
							<CardImg width="100%" object src={baseUrl + dish.image} alt={dish.name} />
							<CardImgOverlay>
								<CardTitle>{dish.name}</CardTitle>
							</CardImgOverlay>
						</Link>
					</Card>
				</div>
			);
		});
		return (
			<div className="container">
				<div className="row">
					<Breadcrumb>
						<BreadcrumbItem>
							<Link to={`/home`}>Home</Link>
						</BreadcrumbItem>
						<BreadcrumbItem active>Menu</BreadcrumbItem>
					</Breadcrumb>
					<div className="col-12">
						<h3>Menu</h3>
						<hr />
					</div>
				</div>
				<div className="row">{menu}</div>;
			</div>
		);
	}
}
export default Menu;
