/** @format */
import React, { Component } from "react";
import { Link } from "react-router-dom";

function Footer() {
	return (
		<div className="footer">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-4 offset-1 col-sm-2">
						<h5>Link</h5>
						<ul className="list-unstyled">
							<li>
								<a href="#">Home</a>
							</li>
							<li>
								<a href="#">About</a>
							</li>
							<li>
								<a href="#">Menu</a>
							</li>
							<li>
								<a href="contactus.html">Contact</a>
							</li>
						</ul>
					</div>
					<div className="col-7 col-sm-5">
						<h5>Our Address</h5>
						<address>Lorem ipsum dolor sit amet consectetur adipisicing elit.</address>
						<i className="fa fa-phone fa-lg">0379496709</i>
						<i className="fa fa-fax fa-lg">+845648692</i>
						<i className="fa fa-envelope fa-lg">
							: <a href="#">LTB.199X@OUTLOOK.COM</a>
						</i>
					</div>
					<div className="col-12 col-sm-4 align-self-center">
						<div className="text-center">
							<a
								className="btn btn-primary"
								style={{ backgroundColor: "#3b5998" }}
								href="#!"
								role="button">
								<i className="fab fa-facebook-f"></i>
							</a>
							<a
								className="btn btn-primary"
								style={{ backgroundColor: "#55acee" }}
								href="#!"
								role="button">
								<i className="fab fa-twitter"></i>
							</a>
							<a
								className="btn btn-primary"
								style={{ backgroundColor: "#dd4b39" }}
								href="#!"
								role="button">
								<i className="fab fa-google"></i>
							</a>
							<a
								className="btn btn-primary"
								style={{ backgroundColor: "#ac2bac" }}
								href="#!"
								role="button">
								<i className="fab fa-instagram"></i>
							</a>
						</div>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-auto">
						<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima assumenda</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
