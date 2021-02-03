import React, { Component } from "react";
import { Form, Select, Button } from "antd";
import CommonComponents from './CommonComponents';
// import ProgressBar from 'react-bootstrap/ProgressBar';
const { Option } = Select;

class S10CurrentAutoInsurance extends Component {
	state = {};

	onFinish = (values) => {
		// console.log("Success:", values);
		this.props.nextStep();
		this.props.education_level(values.educationLevel);
		this.props.credit_score(values.creditScore);
	};

	onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};

	render() {
		return (
			<div className="container pt-0 main-content-container mb-5">
				{/* <ProgressBar animated now={81} /> */}
				{/* <CommonComponents
					currentStep={this.props.currentStep}
					totalSteps={this.props.totalSteps}
					previousStep={this.props.previousStep}
				/> */}


				<div className="box-width">
					<h1 className="text-center heading">Education & Credit Score</h1>
					<br />
					<br />
					<Form
						name="educationForm"
						initialValues={{
							remember: true,
						}}
						onFinish={this.onFinish}
						onFinishFailed={this.onFinishFailed}
					>
						<h5>Education Level</h5>
						<Form.Item
							name="educationLevel"
							hasFeedback
							rules={[
								{
									required: true,
									message: "Please select an option!",
								},
							]}
						>
							<Select
								style={{ width: "100%" }}
								size="large"
								placeholder="Select a option"
								optionFilterProp="children"
								filterOption={(input, option) =>
									option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
								}
							>
								<Option value="Associate Degree">Associate Degree</Option>
								<Option value="Bachelor's Degree">Bachelor's Degree</Option>
								<Option value="High School">High School</Option>
								<Option value="Masters Degree">Masters Degree</Option>
								<Option value="PhD">PhD</Option>
								<Option value="Some College">Some College</Option>
							</Select>
						</Form.Item>
						<h5>Credit Score</h5>
						<Form.Item
							name="creditScore"
							hasFeedback
							rules={[
								{
									required: true,
									message: "Please select an option!",
								},
							]}
						>
							<Select
								size="large"
								placeholder="Select a person"
								optionFilterProp="children"
								filterOption={(input, option) =>
									option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
								}
							>
								<Option value="Average">Average</Option>
								<Option value="Excellent">Excellent</Option>
								<Option value="Good">Good</Option>
								<Option value="Poor">Poor</Option>
							</Select>
						</Form.Item>

						<Form.Item style={{ width: "100%" }}>
							<Button type="primary" htmlType="submit" style={{ width: "100%" }} size={"large"}>
								<h4 style={{ display: "inline", color: "white", fontWeight: "400" }}>Continue</h4>
								&nbsp;&nbsp;&nbsp;
								<i className="fa fa-arrow-right" style={{ fontSize: "24px" }}></i>
							</Button>
						</Form.Item>
					</Form>
				</div>
			</div>
		);
	}
}

export default S10CurrentAutoInsurance;
