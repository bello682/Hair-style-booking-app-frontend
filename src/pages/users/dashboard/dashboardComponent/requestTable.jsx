import React from "react";
import "../../../CSS/userDashboardLayoutView.css";

const RequestTable = ({
	ProductName,
	productNumber,
	productCondition,
	productStatus,
	preview_details,
}) => {
	return (
		<>
			<tbody>
				<tr>
					<td>{ProductName}</td>
					<td>{productNumber}</td>
					<td>{productCondition}</td>
					<td className="dash_warning">{productStatus}</td>
					<td className="dash_primary">{preview_details}</td>
					{/* <td></td> */}
				</tr>
			</tbody>
		</>
	);
};

export default RequestTable;
