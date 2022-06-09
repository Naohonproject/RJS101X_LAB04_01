/** @format */
import { Navbar, NavbarBrand, Jumbotron } from "reactstrap";
import React, { Component } from "react";

class Header extends Component {
	render() {
		return (
			<React.Fragment>
				<Navbar dark>
					<div className="container"></div>
					<NavbarBrand href="/">Some code here</NavbarBrand>
				</Navbar>
				<Jumbotron>
					<div className="container">
						<div className="row row-header">
							<div className="col-12 col-sm-6">
								<h1>Lorem ipsum dolor</h1>
								<p>Lorem ipsum dolor sit amet, consectetur </p>
							</div>
						</div>
					</div>
				</Jumbotron>
			</React.Fragment>
		);
	}
}

export default Header;
