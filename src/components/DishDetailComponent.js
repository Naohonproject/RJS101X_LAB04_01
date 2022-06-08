/** @format */
import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import { COMMENTS } from "../shared/comments";

class DishDetail extends Component {
	constructor(props) {
		super(props);
	}

	renderComments(comments) {
		const dishId = this.props.selectedDish.id;
		const dishComments = this.props.comments.filter((comment) => comment.dishId === dishId);
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
									<p>{"--" + dishComment.author + dishComment.date}</p>
								</li>
							);
						})}
					</ul>
				</div>
			);
		}
	}

	render() {
		const selectedDish = this.props.selectedDish;
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
				<div className="col-12 col-md-5 m-1">{this.renderComments(this.props.comments)}</div>
			</div>
		);
	}
}

export default DishDetail;
