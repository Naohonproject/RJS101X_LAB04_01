/** @format */

import React, { useState } from "react";

import { BreadcrumbItem, Breadcrumb, Button, Form, FormGroup, Label, Input, Col } from "reactstrap";
import { Link } from "react-router-dom";
function Contact(props) {
	const [fields, setFileds] = useState({
		firstname: "",
		lastname: "",
		telNum: "",
		email: "",
		agree: false,
		contactType: "Tel.",
		message: "",
	});
	function handleOnInputChange(e) {
		const id = e.target.id;
		const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
		setFileds((prevState) => {
			return {
				...prevState,
				[id]: value,
			};
		});
	}
	function handleOnSubmit(e) {
		console.log("current State is : " + JSON.stringify(fields));
		alert("current State is : " + JSON.stringify(fields));
		e.preventDefault();
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
					<Form onSubmit={(e) => handleOnSubmit(e)}>
						<FormGroup row>
							<Label htmlFor={"firstname"} md={2}>
								First Name
							</Label>
							<Col md={10}>
								<Input
									onChange={(e) => handleOnInputChange(e)}
									type={"text"}
									id="firstname"
									name="firstname"
									placeHolder="first name"
									value={fields.firstname}
								/>
							</Col>
						</FormGroup>
						<FormGroup row>
							<Label htmlFor={"lastname"} md={2}>
								Last Name
							</Label>
							<Col md={10}>
								<Input
									onChange={(e) => handleOnInputChange(e)}
									type={"text"}
									id="lastname"
									name="lastname"
									placeHolder="last name"
									value={fields.lastname}
								/>
							</Col>
						</FormGroup>
						<FormGroup row>
							<Label htmlFor={"telNum"} md={2}>
								Number
							</Label>
							<Col md={10}>
								<Input
									onChange={(e) => handleOnInputChange(e)}
									type={"tel"}
									id="telNum"
									name="telNum"
									placeHolder="phone number"
									value={fields.telNum}
								/>
							</Col>
						</FormGroup>
						<FormGroup row>
							<Label htmlFor={"email"} md={2}>
								Email
							</Label>
							<Col md={10}>
								<Input
									onChange={(e) => handleOnInputChange(e)}
									type={"mail"}
									id="email"
									name="email"
									placeHolder="ltb.199x@gmail.com"
									value={fields.email}
								/>
							</Col>
						</FormGroup>

						<FormGroup row>
							<Col md={{ size: 6, offset: 2 }}>
								<FormGroup check>
									<Label check>
										<Input
											onChange={(e) => handleOnInputChange(e)}
											id="agree"
											type="checkbox"
											name="agree"
											checked={fields.agree}
											value={fields.agree}
										/>{" "}
										<strong>May we check you ?</strong>
									</Label>
								</FormGroup>
							</Col>

							<Col md={{ size: 3, offset: 1 }}>
								<Input
									onChange={(e) => handleOnInputChange(e)}
									id={"contactType"}
									type="select"
									name="contactType"
									value={fields.contactType}>
									<option value="Tel">Tel.</option>
									<option value="email">Email.</option>
								</Input>
							</Col>
						</FormGroup>

						<FormGroup row>
							<Label htmlFor="message" md={2}>
								Your Feedback
							</Label>
							<Col md={10}>
								<Input
									onChange={(e) => handleOnInputChange(e)}
									type="textarea"
									id={"message"}
									name="message"
									row="12"
									value={fields.message}
								/>
							</Col>
						</FormGroup>

						<FormGroup row>
							<Col md={{ size: 10, offset: 2 }}>
								<Button type="submit" color="primary">
									Feedback
								</Button>
							</Col>
						</FormGroup>
					</Form>
				</div>
			</div>
		</div>
	);
}

export default Contact;
