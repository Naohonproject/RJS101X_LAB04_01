/** @format */

import React, { useState } from "react";

import { BreadcrumbItem, Breadcrumb, Button, Label, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import { Control, LocalForm, Errors } from "react-redux-form";

function Contact(props) {
	function handleOnSubmit(value) {
		console.log("current State is : " + JSON.stringify(value));
		alert("current State is : " + JSON.stringify(value));
	}
	return (
		<div className="container">
			<div className="row">
				<Breadcrumb>
					<BreadcrumbItem>
						<Link to={`/home`}>Home</Link>
					</BreadcrumbItem>
					<BreadcrumbItem active>Contact Us</BreadcrumbItem>
				</Breadcrumb>
				<div className="col-12">
					<h3>Contact Us</h3>
					<hr />
				</div>
			</div>
			<div className="row row-content">
				<div className="col-12">
					<h3>Location Information</h3>
				</div>
				<div className="col-12 col-sm-4 offset-sm-1">
					<h5>Our Address</h5>
					<address>
						121, Clear Water Bay Road
						<br />
						Clear Water Bay, Kowloon
						<br />
						HONG KONG
						<br />
						<i className="fa fa-phone"></i>: +852 1234 5678
						<br />
						<i className="fa fa-fax"></i>: +852 8765 4321
						<br />
						<i className="fa fa-envelope"></i>:{" "}
						<a href="mailto:confusion@food.net">confusion@food.net</a>
					</address>
				</div>
				<div className="col-12 col-sm-6 offset-sm-1">
					<h5>Map of our Location</h5>
				</div>
				<div className="col-12 col-sm-11 offset-sm-1">
					<div className="btn-group" role="group">
						<a role="button" className="btn btn-primary" href="tel:+85212345678">
							<i className="fa fa-phone"></i> Call
						</a>
						<a role="button" className="btn btn-info">
							<i className="fa fa-skype"></i> Skype
						</a>
						<a role="button" className="btn btn-success" href="mailto:confusion@food.net">
							<i className="fa fa-envelope-o"></i> Email
						</a>
					</div>
				</div>
			</div>
			<div className="row row-content">
				<div className="col-12">
					<h3>Send us your feedback</h3>
				</div>
				<div className="col-12 col-md-12">
					<LocalForm onSubmit={(value) => handleOnSubmit(value)}>
						<Row className="form-group">
							<Label htmlFor={"firstname"} md={2}>
								First Name
							</Label>
							<Col md={10}>
								<Control.text
									model=".firstname"
									className="form-control"
									id="firstname"
									name="firstname"
									placeHolder="first name"
								/>
							</Col>
						</Row>
						<Row className="form-group">
							<Label htmlFor={"lastname"} md={2}>
								Last Name
							</Label>
							<Col md={10}>
								<Control.text
									model=".lastname"
									className="form-control"
									id="lastname"
									name="lastname"
									placeHolder="last name"
								/>
							</Col>
						</Row>
						<Row className="form-group">
							<Label htmlFor={"telNum"} md={2}>
								Number
							</Label>
							<Col md={10}>
								<Control.text
									model=".telnum"
									className="form-control"
									id="telNum"
									name="telNum"
									placeHolder="phone number"
								/>
							</Col>
						</Row>
						<Row className="form-group">
							<Label htmlFor={"email"} md={2}>
								Email
							</Label>
							<Col md={10}>
								<Control.text
									model=".email"
									className="form-control"
									id="email"
									name="email"
									placeHolder="ltb.199x@gmail.com"
								/>
							</Col>
						</Row>

						<Row className="form-group">
							<Col md={{ size: 6, offset: 2 }}>
								<div className="form-check">
									<Label check>
										<Control.checkbox
											model=".agree"
											className="form-check-input"
											id="agree"
											name="agree"
										/>{" "}
										<strong>May we check you ?</strong>
									</Label>
								</div>
							</Col>

							<Col md={{ size: 3, offset: 1 }}>
								<Control.select
									model=".contactType"
									className="form-control"
									id={"contactType"}
									name="contactType">
									<option>Tel.</option>
									<option>Email.</option>
								</Control.select>
							</Col>
						</Row>

						<Row className="form-group">
							<Label htmlFor="message" md={2}>
								Your Feedback
							</Label>
							<Col md={10}>
								<Control.textarea
									model=".message"
									className="form-control"
									id={"message"}
									name="message"
									row="12"
								/>
							</Col>
						</Row>

						<Row className="form-group">
							<Col md={{ size: 10, offset: 2 }}>
								<Button type="submit" color="primary">
									Feedback
								</Button>
							</Col>
						</Row>
					</LocalForm>
				</div>
			</div>
		</div>
	);
}

export default Contact;
