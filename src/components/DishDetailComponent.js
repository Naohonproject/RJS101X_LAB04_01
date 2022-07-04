/** @format */
import React from "react";
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	BreadcrumbItem,
	Breadcrumb,
} from "reactstrap";
import dateFormat from "dateformat";
import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";

import CommentForm from "./CommentFormComponent";
import {} from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";

function DishDetail({
	comments,
	selectedDish,
	totalNumberOfComments,
	isLoading,
	errorMsg,
	postComment,
}) {
	function renderComments(comments) {
		if (comments === null) {
			return <div></div>;
		} else {
			return (
				<div>
					<h4>COMMENTS</h4>
					<ul className="list-unstyled">
						{comments.map((comment) => {
							return (
								<li key={comment.id}>
									<p>{comment.comment}</p>
									<p>{"--" + comment.author + dateFormat(comment.date)}</p>
								</li>
							);
						})}
					</ul>
					<div className="mt-5">
						<CommentForm
							dishId={selectedDish.id}
							totalNumberOfComments={totalNumberOfComments}
							postComment={postComment}
						/>
					</div>
				</div>
			);
		}
	}

	if (isLoading) {
		return (
			<div className="container">
				<div className="row">
					<Loading />
				</div>
			</div>
		);
	} else if (errorMsg) {
		return (
			<div className="container">
				<div className="row">
					<h4>{errorMsg}</h4>
				</div>
			</div>
		);
	} else if (!selectedDish) {
		return <div></div>;
	} else
		return (
			<div className="container">
				<div className="row">
					<Breadcrumb>
						<BreadcrumbItem>
							<Link to={`/menu`}>Menu</Link>
						</BreadcrumbItem>
						<BreadcrumbItem active>{selectedDish.name}</BreadcrumbItem>
					</Breadcrumb>
					<div className="col-12">
						<h3>{selectedDish.name}</h3>
						<hr />
					</div>
				</div>
				<div className="row">
					<div className="col-12 col-md-5 m-1">
						<Card>
							<CardImg
								width="100%"
								object
								src={baseUrl + selectedDish.image}
								alt={selectedDish.name}
							/>
							<CardBody>
								<CardTitle>{selectedDish.name}</CardTitle>
								<CardText>{selectedDish.description}</CardText>
							</CardBody>
						</Card>
					</div>
					<div className="col-12 col-md-5 m-1">{renderComments(comments)}</div>
				</div>
			</div>
		);
}

export default DishDetail;
