import React from "react";
import RequestTable from "../dashboardComponent/requestTable";
import "../../../CSS/userDashboardLayoutView.css";

const Recent_request_by_user = () => {
	return (
		<div className="resent_order_request">
			<h2 className="dash_h2">Recent Requests</h2>
			<table>
				<thead>
					<tr>
						<th>Product Name</th>
						<th>Product Number</th>
						<th>Payment</th>
						<th>Status</th>
						<th>View</th>
						{/*
                    <th></th> */}
					</tr>
				</thead>
				<RequestTable
					ProductName="portable mini drones"
					productNumber="1234567890"
					productCondition="Due"
					productStatus="pending"
					preview_details="Details"
				/>
				<RequestTable
					ProductName="portable mini drones"
					productNumber="1234567890"
					productCondition="Due"
					productStatus="pending"
					preview_details="Details"
				/>
				<RequestTable
					ProductName="portable mini drones"
					productNumber="1234567890"
					productCondition="Due"
					productStatus="pending"
					preview_details="Details"
				/>
				<RequestTable
					ProductName="portable mini drones"
					productNumber="1234567890"
					productCondition="Due"
					productStatus="pending"
					preview_details="Details"
				/>
				<RequestTable
					ProductName="portable mini drones"
					productNumber="1234567890"
					productCondition="Due"
					productStatus="pending"
					preview_details="Details"
				/>
				<RequestTable
					ProductName="portable mini drones"
					productNumber="1234567890"
					productCondition="Due"
					productStatus="pending"
					preview_details="Details"
				/>
				<RequestTable
					ProductName="portable mini drones"
					productNumber="1234567890"
					productCondition="Due"
					productStatus="pending"
					preview_details="Details"
				/>
				<RequestTable
					ProductName="portable mini drones"
					productNumber="1234567890"
					productCondition="Due"
					productStatus="pending"
					preview_details="Details"
				/>
			</table>
			<a href="#">Show All</a>
		</div>
	);
};

export default Recent_request_by_user;
