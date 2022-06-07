/** @format */

import React, { Component } from "react";

class Count extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <h1>{this.props.numberOfDishes}</h1>;
	}
}

export default Count;
