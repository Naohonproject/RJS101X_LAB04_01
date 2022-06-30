/** @format */

import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";

import { Loading } from "./LoadingComponent";

function RenderCard({ item, isLoading, errorMsg }) {
	if (isLoading) {
		return <Loading />;
	} else if (errorMsg) {
		return <h4>{errorMsg}</h4>;
	} else {
		return (
			<Card>
				<CardImg src={item.image} alt={item.name} />
				<CardBody>
					<CardTitle>{item.name}</CardTitle>
					{item.designation && <CardSubtitle>{item.designation}</CardSubtitle>}
					<CardText>{item.description}</CardText>
				</CardBody>
			</Card>
		);
	}
}

export default RenderCard;
