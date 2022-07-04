/** @format */

import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody, Button, Label, Col, Row } from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";
import { connect } from "react-redux";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;

class CommentForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isModalOpen: false,
		};
		this.toggleModal = this.toggleModal.bind(this);
		this.handleOnSubmit = this.handleOnSubmit.bind(this);
	}
	toggleModal() {
		this.setState((prev) => ({ ...prev, isModalOpen: !this.state.isModalOpen }));
	}

	handleOnSubmit(value) {
		const comment = {
			id: this.props.totalNumberOfComments,
			dishId: this.props.dishId,
			rating: Number(value.rating),
			comment: value.comments,
			author: value.name,
			date: new Date().toISOString(),
		};

		this.props.postComment(comment);

		this.setState((prev) => ({
			...this.state,
			isModalOpen: !this.state.isModalOpen,
		}));
	}

	render() {
		return (
			<React.Fragment>
				<Button outline onClick={this.toggleModal}>
					<span className="fa fa-pencil fa-lg"> Submit Comment</span>
				</Button>
				<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
					<ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
					<ModalBody>
						<LocalForm onSubmit={(value) => this.handleOnSubmit(value)}>
							<Row className="form-group">
								<Label htmlFor={"rating"} md={12}>
									Rating
								</Label>
								<Col md={12}>
									<Control.select
										model=".rating"
										className="form-control"
										id="rating"
										name="rating">
										<option>1</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
										<option>5</option>
									</Control.select>
								</Col>
							</Row>

							<Row className="form-group">
								<Label htmlFor={"firstname"} md={12}>
									First Name
								</Label>
								<Col md={12}>
									<Control.text
										model=".name"
										className="form-control"
										id="name"
										name="name"
										placeholder="Your Name"
										validators={{
											required,
											minLength: minLength(5),
											maxLength: maxLength(15),
										}}
									/>
									<Errors
										className="text-danger"
										model=".name"
										show="touched"
										messages={{
											required: "This feild is required",
											minLength: "Must be greater than 5 characters",
											maxLength: "Must be  15 characters or less",
										}}
									/>
								</Col>
							</Row>

							<Row className="form-group">
								<Label htmlFor="comments" md={12}>
									Comment
								</Label>
								<Col md={12}>
									<Control.textarea
										model=".comments"
										className="form-control"
										id="comments"
										name="comments"
										row="15"
										validators={{
											required,
										}}
									/>
									<Errors
										className="text-danger"
										model=".comments"
										show="touched"
										messages={{
											required: "This feild is required",
										}}
									/>
								</Col>
							</Row>
							<Row className="form-group">
								<Col md={{ size: 10, offset: 2 }}>
									<Button type="submit" color="primary">
										Submit
									</Button>
								</Col>
							</Row>
						</LocalForm>
					</ModalBody>
				</Modal>
			</React.Fragment>
		);
	}
}

export default connect()(CommentForm);
