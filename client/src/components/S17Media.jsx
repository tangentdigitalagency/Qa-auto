import React, { Component } from "react";
import Success from './Succeess';




class S17Media extends Component {


	state = {
		username: "",
	};

	UNSAFE_componentWillReceiveProps = (newProps) => {
		this.setState({ username: newProps.username });
	};

	render() {
		return (

			<div className="container pt-0 main-content-container">
				<h1 className="center"> You Are On Your Way To Saving!</h1>
				<br></br>
				<div id="">
					<Success />
					<p className="center"> A Quantum Assurance Agent Will Be With You Shortly!</p>
				</div>
			</div>
		);
	}
}

export default S17Media;