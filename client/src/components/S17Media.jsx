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
				<h1 className="center"> You Are On Your Way To Saving On Your <b>Home</b> Insurance</h1>
				<br></br>
				<div className="container pt-0 main-content-container">
				{/* <h1 className="center"> You Have Beeen Matched With These Companies With Special Savings!</h1> */}
                <div id=""> 
				{/* <UncontrolledLottie /> */}
				<p className="center"> A Quantum Assurance Agent Will Be With You Shortly!</p>
				</div>
				</div>
            </div>
		);
	}
}

export default S17Media;
