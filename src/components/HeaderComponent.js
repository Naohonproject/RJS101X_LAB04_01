/** @format */
import { Navbar, NavbarBrand, Jumbotron, Nav, NavbarToggler, Collapse, NavItem } from "reactstrap";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isNavOpen: false,
		};
		this.toggleNav = this.toggleNav.bind(this);
	}
	toggleNav() {
		this.setState({ isNavOpen: !this.state.isNavOpen });
	}
	render() {
		return (
			<React.Fragment>
				<Navbar dark expand={"md"}>
					<div className="container">
						<NavbarToggler onClick={this.toggleNav} />
						<NavbarBrand className="mr-auto" href="/">
							<img src="/src/assets/images/maxresdefault.jpg" alter="img" height="30" width="41" />
						</NavbarBrand>
						<Collapse isOpen={this.state.isNavOpen} navbar>
							<Nav navbar>
								<NavItem>
									<NavLink to="/home" className="nav-link">
										<span className="fa fa-home fa-lg"></span>Home
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink to="/aboutus" className="nav-link">
										<span className="fa fa-home fa-lg"></span>About Us
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink to="/menu" className="nav-link">
										<span className="fa fa-list fa-lg"></span>Menu
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink to="/contactus" className="nav-link">
										<span className="fa fa-address-card fa-lg"></span>Contact us
									</NavLink>
								</NavItem>
							</Nav>
						</Collapse>
					</div>
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
