/** @format */
import {
	Navbar,
	NavbarBrand,
	Jumbotron,
	Nav,
	NavbarToggler,
	Collapse,
	NavItem,
	Modal,
	Button,
	ModalHeader,
	ModalBody,
	Form,
	FormGroup,
	Label,
	Input,
} from "reactstrap";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isNavOpen: false,
			isModalOpen: false,
		};
		this.toggleNav = this.toggleNav.bind(this);
		this.toggleModal = this.toggleModal.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
	}
	toggleNav() {
		this.setState((prev) => {
			return { ...prev, isNavOpen: !this.state.isNavOpen };
		});
	}

	toggleModal() {
		this.setState((prev) => {
			return { ...prev, isModalOpen: !this.state.isModalOpen };
		});
	}
	handleLogin(event) {
		this.toggleModal();
		alert(
			"Username: " +
				this.username.value +
				" Password: " +
				this.password.value +
				" Remember: " +
				this.remember.checked
		);
		event.preventDefault();
	}
	render() {
		return (
			<React.Fragment>
				<Navbar dark expand="md">
					<div className="container">
						<NavbarToggler onClick={this.toggleNav} />
						<NavbarBrand className="mr-auto" href="/">
							<img src="/assets/images/logo.png" alt="logo" width={50} />
						</NavbarBrand>
						<Collapse navbar>
							<Nav navbar>
								<NavItem>
									<NavLink to="/home" className="nav-link">
										<span className="fa fa-home fa-lg"></span> Home
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink to="/aboutus" className="nav-link">
										<span className="fa fa-home fa-lg"></span>About Us
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink to="/menu" className="nav-link">
										<span className="fa fa-list fa-lg"></span> Menu
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink to="/contactus" className="nav-link">
										<span className="fa fa-address-card fa-lg"></span> Contact us
									</NavLink>
								</NavItem>
							</Nav>
							<Nav className="ml-auto" navbar>
								<NavItem>
									<Button outline onClick={this.toggleModal}>
										<span className="fa fa-sign-in fa-lg">Login</span>
									</Button>
								</NavItem>
							</Nav>
						</Collapse>
					</div>
				</Navbar>
				<Jumbotron>
					<div className="container">
						<div className="row row-header">
							<div className="col-12 col-sm-6">
								<h1>Welcome to The King Restaurant</h1>
								<p>
									Where you are always be served, whoever you are,wherever you come from, whichever
									color you are,Always ready to serve
								</p>
							</div>
						</div>
					</div>
				</Jumbotron>
				<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
					<ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
					<ModalBody>
						<Form onSubmit={this.handleLogin}>
							<FormGroup>
								<Label htmlFor="password">UserName</Label>
								<Input
									type="text"
									id="userName"
									name="userName"
									innerRef={(input) => (this.username = input)}
								/>
							</FormGroup>
							<FormGroup>
								<Label htmlFor="password">password</Label>
								<Input
									type="password"
									id="password"
									name="password"
									innerRef={(input) => (this.password = input)}
								/>
							</FormGroup>
							<FormGroup check>
								<Label check>
									<Input
										type="checkbox"
										name="remeber"
										innerRef={(input) => (this.remember = input)}
									/>
									remeber me
								</Label>
							</FormGroup>
							<Button type="submit" value="submit" className="bg-primary">
								Login
							</Button>
						</Form>
					</ModalBody>
				</Modal>
			</React.Fragment>
		);
	}
}

export default Header;
