import React, { Component } from "react";
import carQuery from "../Assets/carQuery.json";
import axios from 'axios'
import CommonComponents from './CommonComponents';
// import ProgressBar from 'react-bootstrap/ProgressBar';
class S4VehicleModel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			models: "",
		};
	}

	/*UNSAFE_componentWillReceiveProps = (newProps) => {
		var modelsArray = [];
		carQuery.map(
			(data) =>
				data.model_make_id === newProps.searchModel.make &&
				data.model_year === newProps.searchModel.year &&
				!modelsArray.includes(data.model_name) &&
				modelsArray.push(data.model_name)
		);
		this.setState({ models: modelsArray });
	};*/

	UNSAFE_componentWillReceiveProps = (newProps) => {
		axios.post('https://qhautoformreact.herokuapp.com/getmodel', { year: newProps.searchModel.year, make: newProps.searchModel.make })
			.then(res => this.setState({ models: res.data }))
			.catch(err => console.log(err))
	};


	createVehicleNameBoxes = () => {
		const arr = [];
		var column = "";
		if (this.state.models.length >= 4) {
			column = "col-md-3 col-4";
		} else if (this.state.models.length === 3) {
			column = "col-4";
		} else if (this.state.models.length === 2) {
			column = "col-6";
		} else if (this.state.models.length === 1) {
			column = "col-12";
		}

		for (var i = 0; i < this.state.models.length; i++) {
			arr.push(
				<div key={i} className={"text-center " + column}>
					<button
						value={this.state.models[i]}
						className="btn btn-outline-primary m-md-2 m-1 btn-font"
						style={{ width: "100%", height: "60px", overflow: "hidden", textTransform: "capitalize" }}
						onClick={(e) => this.moveNext(e)}
					>
						{this.state.models[i]}
					</button>
				</div>
			);
		}
		return arr;
	};

	moveNext = (e) => {
		this.props.nextStep();
		this.props.vehicle_model(e.target.value);
	};
	render() {
		return (
			<div className="container p-0 content-container main-content-container3 mb-5">
				{/* <ProgressBar animated now={25} /> */}
				{/* <CommonComponents
					currentStep={this.props.currentStep}
					totalSteps={this.props.totalSteps}
					previousStep={this.props.previousStep}
				/> */}

				<div
					className="container pt-0 main-content-container4 pb-5 "
					style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
				>
					<div className="text-center vehicle-model-padding">
						<h1 className="heading">Vehicle Model</h1>
						<div className="row">{this.state.models.length !== 0 && this.createVehicleNameBoxes()}</div>
					</div>
				</div>
			</div >
		);
	}
}

export default S4VehicleModel;

// class S4VehicleModel extends Component {
// 	state = {
// 		models: "",
// 	};

// 	componentWillReceiveProps = (newProps) => {
// 		console.log(newProps.searchModel);
// 		carQuery.getMakes(newProps.searchModel).then((models) => {
// 			this.setState({ models: models });
// 		});
// 	};

// 	createVehicleModelBoxes = () => {
// 		const arr = [];
// 		for (var i = 0; i < this.state.models.length; i++) {
// 			arr.push(
// 				<button
// 					key={i}
// 					value={this.state.models[i].name}
// 					className="btn btn-outline-primary"
// 					onClick={(e) => this.moveNext(e)}
// 				>
// 					{this.state.models[i].name}
// 				</button>
// 			);
// 		}
// 		return arr;
// 	};

// 	moveNext = (e) => {
// 		this.props.nextStep();
// 		// this.props.nameForVehicalModel(e.target.value);
// 	};
// 	render() {
// 		return (
// 			<div>
// 				<div className="main-content-inner-container" style={{ height: "70vh" }}>
// 					<div className="text-center">
// 						<h1>Vehicle Model</h1>
// 						<br />
// 						<br />
// 						{/* {this.state.models.length !== 0 && this.createVehicleModelBoxes()} */}
// 					</div>
// 				</div>
// 			</div>
// 		);
// 	}
// }

// export default S4VehicleModel;
