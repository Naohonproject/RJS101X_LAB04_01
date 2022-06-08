/** @format */

import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

function Menu({ dishes, selectedDish, onClick }) {
	const menu = dishes.map((dish) => {
		return (
			<div onClick={() => onClick(dish)} className="col-12 col-md-5 m-1">
				<Card>
					<CardImg width="100%" object src={dish.image} alt={dish.name} />
					<CardImgOverlay>
						<CardTitle>{dish.name}</CardTitle>
					</CardImgOverlay>
				</Card>
			</div>
		);
	});
	return <div className="row">{menu}</div>;
}

export default Menu;
