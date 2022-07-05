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
		console.log("current State is : " + JSON.stringify(value));
		alert("current State is : " + JSON.stringify(value));
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
					{/* TODO: ỏ đây ta chỉ ra form state name, cái đã được tạo ra trong redux store và kết nối đến nó, do đó mọi sự thay đổi trong form sẽ được track và dispatch sự kiện tương ứng tới store để lưu giá trị mà người dùng nhập vào từng thời điểm, đó là lý do mà khi ta chuyển sang trang khác tuy nhiên chưa gửi form đi thì các dữ liệu trong form không hệ reset mặc dù khi chuyển trang thì FORM  đã được unmout mà khi trở lại thì nó đã mount lại, điều này có được là nhờ mỗi khi ta thay đổi dữ liệu trong form thì dữ liệu đó được kèm theo dispatch action cài đặt sẵn trong RRF để lưu lại, khi ta quay lại sau khi chuyển trang thì form sẽ tự động lấy dữ liệu trước đó ta đẫ nhập, chỉ khi submit xong thì ta đã cấu hình để Form sẽ dispatch đi sự kiện reset, do đó toàn bộ dữ liệu trong formState ta đã tạo sẽ mất hết , dẫn đến form lúc này sẽ chỉ nhận gíá trị là tương ứng là initialFeedback */}
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
