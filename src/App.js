/** @format */

import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import Main from "./components/MainComponent";
import "./App.css";
import { ConfigureStore } from "./redux/configStore";

const store = ConfigureStore();

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<Main />
				</Router>
			</Provider>
		);
	}
}

export default App;
