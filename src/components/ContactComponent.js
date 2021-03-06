/** @format */

import React from "react";

import { BreadcrumbItem, Breadcrumb, Button, Label, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import { Control, Form, Errors } from "react-redux-form";
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val);

function Contact(props) {
	function handleOnSubmit(value) {
		props.postFeedback(value);
		props.resetFeedbackForm();
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
					{/* TODO: ??? ????y ta ch??? ra form state name, c??i ???? ???????c t???o ra trong redux store v?? k???t n???i ?????n n??, do ???? m???i s??? thay ?????i trong form s??? ???????c track v?? dispatch s??? ki???n t????ng ???ng t???i store ????? l??u gi?? tr??? m?? ng?????i d??ng nh???p v??o t???ng th???i ??i???m, ???? l?? l?? do m?? khi ta chuy???n sang trang kh??c tuy nhi??n ch??a g???i form ??i th?? c??c d??? li???u trong form kh??ng h??? reset m???c d?? khi chuy???n trang th?? FORM  ???? ???????c unmout m?? khi tr??? l???i th?? n?? ???? mount l???i, ??i???u n??y c?? ???????c l?? nh??? m???i khi ta thay ?????i d??? li???u trong form th?? d??? li???u ???? ???????c k??m theo dispatch action c??i ?????t s???n trong RRF ????? l??u l???i, khi ta quay l???i sau khi chuy???n trang th?? form s??? t??? ?????ng l???y d??? li???u tr?????c ???? ta ????? nh???p, ch??? khi submit xong th?? ta ???? c???u h??nh ????? Form s??? dispatch ??i s??? ki???n reset, do ???? to??n b??? d??? li???u trong formState ta ???? t???o s??? m???t h???t , d???n ?????n form l??c n??y s??? ch??? nh???n g???? tr??? l?? t????ng ???ng l?? initialFeedback */}
					<Form model="feedback" onSubmit={(value) => handleOnSubmit(value)}>
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
									validators={{
										required,
										minLength: minLength(3),
										maxLength: maxLength(15),
									}}
								/>
								<Errors
									className="text-danger"
									model=".firstname"
									show="touched"
									messages={{
										required: "This feild is required",
										minLength: "Must be greater than 2 characters",
										maxLength: "Must be  15 characters or less",
									}}
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
									validators={{
										required,
										minLength: minLength(3),
										maxLength: maxLength(15),
									}}
								/>
								<Errors
									className="text-danger"
									model=".lastname"
									show="touched"
									messages={{
										required: "This feild is required",
										minLength: " Must be greater than 2 characters",
										maxLength: "Must be  15 characters or less",
									}}
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
									validators={{
										required,
										minLength: minLength(10),
										maxLength: maxLength(12),
										isNumber,
									}}
								/>
								<Errors
									className="text-danger"
									model=".telnum"
									show="touched"
									messages={{
										required: "This feild is required",
										minLength: "Must be greater than 10 numbers",
										maxLength: "Must be  12 numbers or less",
										isNumber: "Must be numbers",
									}}
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
									validators={{
										required,
										validEmail,
									}}
								/>
								<Errors
									className="text-danger"
									model=".email"
									show="touched"
									messages={{
										required: "This feild is required",
										validEmail: "Email is invalid.Email must be contain @ and domain name",
									}}
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
					</Form>
				</div>
			</div>
		</div>
	);
}

export default Contact;
