/** @format */
import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import dateFormat from "dateformat";

function DishDetail({ comments, selectedDish }) {
	function renderComments(comments) {
		const dishId = selectedDish.id;
		const dishComments = comments.filter((comment) => comment.dishId === dishId);
		if (dishComments === null) {
			return <div></div>;
		} else {
			return (
				<div>
					<h4>COMMENTS</h4>
					<ul className="list-unstyled">
						{dishComments.map((dishComment) => {
							return (
								<li key={dishComment.id}>
									<p>{dishComment.comment}</p>
									<p>{"--" + dishComment.author + dateFormat(dishComment.date)}</p>
								</li>
							);
						})}
					</ul>
				</div>
			);
		}
	}

	if (!selectedDish) {
		return <div></div>;
	}
	return (
		<div className="row">
			<div className="col-12 col-md-5 m-1">
				<Card>
					<CardImg width="100%" object src={selectedDish.image} alt={selectedDish.name} />
					<CardBody>
						<CardTitle>{selectedDish.name}</CardTitle>
						<CardText>{selectedDish.description}</CardText>
					</CardBody>
				</Card>
			</div>
			<div className="col-12 col-md-5 m-1">{renderComments(comments)}</div>
		</div>
	);
}

export default DishDetail;
