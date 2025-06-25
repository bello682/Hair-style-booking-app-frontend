import React from "react";
import "../../../CSS/userDashboardLayoutView.css";

const AnalyticsCard = ({
	user_sales,
	chart_icon,
	Total_Sales,
	money_price,
	percentage_number,
	analysisIcons: AnalysisIcons, // 💡 renamed prop to `icon`, and destructure it
}) => {
	return (
		<div className={`${user_sales} `}>
			{/* AnalysisIcons is created by me as a props to mutate icons anywhere i use AnalyticsCard */}
			<span>{AnalysisIcons && <AnalysisIcons className={chart_icon} />}</span>
			<div className="sale_middle">
				<div className="sale_left">
					<h3 className="dash_h3">{Total_Sales}</h3>
					{/* <h3 className="dash_h3">Total Sales</h3> */}
					<h1 className="dash_h1">${money_price}</h1>
					{/* <h1 className="dash_h1">$25,024</h1> */}
				</div>
				<div className="sales_progress">
					<svg>
						<circle cx="38" cy="38" r="36"></circle>
					</svg>
					<div className="sale_number">
						<p>{percentage_number}%</p>
						{/* <p>81%</p> */}
					</div>
				</div>
			</div>
			<small className="text_muted dash_small">Last 24 Hours</small>
		</div>
	);
};

export default AnalyticsCard;
