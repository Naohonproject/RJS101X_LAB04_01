/** @format */

import React, { useState } from "react";

import {
	BreadcrumbItem,
	Breadcrumb,
	Button,
	Form,
	FormGroup,
	Label,
	Input,
	Col,
	FormFeedback,
} from "reactstrap";
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
		touched: {
			firstname: false,
			lastname: false,
			telNum: false,
			email: false,
		},
	});
	function handleOnBlur(e) {
		const field = e.target.id;
		setFileds((prevState) => {
			return {
				...prevState,
				touched: { ...fields.touched, [field]: true },
			};
		});
	}
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

	function validate(firstname, lastname, telNum, email) {
		const errors = {
			firstname: "",
			lastname: "",
			telNum: "",
			email: "",
		};
		const nameRegExp = /^[a-z ,.'-]{3,15}$/i;
		const numberRegExp = /^\d{10,11}$/;
		const emailRexExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if (fields.touched.firstname && !nameRegExp.test(firstname)) {
			errors.firstname =
				"firstname must contains at latest 3 characters and no more 15 characters ";
		}
		if (fields.touched.lastname && !nameRegExp.test(lastname)) {
			errors.lastname = "lastname must contains at latest 3 characters and no more 10 characters ";
		}
		if (fields.touched.telNum && !numberRegExp.test(telNum)) {
			errors.telNum = "phone number must contains 10 or 11 digits";
		}
		if (fields.touched.email && !emailRexExp.test(email)) {
			errors.email = "email is not valid,please type the right email format";
		}
		return errors;
	}

	const errors = validate(fields.firstname, fields.lastname, fields.telNum, fields.email);
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
									onBlur={(e) => handleOnBlur(e)}
									onChange={(e) => handleOnInputChange(e)}
									type={"text"}
									id="firstname"
									name="firstname"
									placeHolder="first name"
									value={fields.firstname}
									valid={errors.firstname === ""}
									invalid={errors.firstname !== ""}
								/>
								<FormFeedback>{errors.firstname}</FormFeedback>
							</Col>
						</FormGroup>
						<FormGroup row>
							<Label htmlFor={"lastname"} md={2}>
								Last Name
							</Label>
							<Col md={10}>
								<Input
									onBlur={(e) => handleOnBlur(e)}
									onChange={(e) => handleOnInputChange(e)}
									type={"text"}
									id="lastname"
									name="lastname"
									placeHolder="last name"
									value={fields.lastname}
									valid={errors.lastname === ""}
									invalid={errors.lastname !== ""}
								/>
								<FormFeedback>{errors.lastname}</FormFeedback>
							</Col>
						</FormGroup>
						<FormGroup row>
							<Label htmlFor={"telNum"} md={2}>
								Number
							</Label>
							<Col md={10}>
								<Input
									onBlur={(e) => handleOnBlur(e)}
									onChange={(e) => handleOnInputChange(e)}
									type={"tel"}
									id="telNum"
									name="telNum"
									placeHolder="phone number"
									value={fields.telNum}
									valid={errors.telNum === ""}
									invalid={errors.telNum !== ""}
								/>
								<FormFeedback>{errors.telNum}</FormFeedback>
							</Col>
						</FormGroup>
						<FormGroup row>
							<Label htmlFor={"email"} md={2}>
								Email
							</Label>
							<Col md={10}>
								<Input
									onBlur={(e) => handleOnBlur(e)}
									onChange={(e) => handleOnInputChange(e)}
									type={"mail"}
									id="email"
									valid={errors.email === ""}
									invalid={errors.email !== ""}
									name="email"
									placeHolder="ltb.199x@gmail.com"
									value={fields.email}
								/>
								<FormFeedback>{errors.email}</FormFeedback>
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
