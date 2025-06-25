import React from "react";
import AnalyticsCard from "../dashboardComponent/analyticsCard";
import { MdAnalytics } from "react-icons/md";
import { MdBarChart } from "react-icons/md";
import { MdOutlineStackedLineChart } from "react-icons/md";
import Recent_request_by_user from "./recent_request_by_user";
import "../../../CSS/userDashboardLayoutView.css";

const DashBoard_main = () => {
	return (
		<main className="dash_wrapper_main">
			<div className="date">
				<input type="date" name="" id="" />
			</div>
			<div className="insight">
				<AnalyticsCard
					Total_Sales="Total Sales"
					money_price="25,024"
					percentage_number="45"
					analysisIcons={MdAnalytics}
					// classes
					user_sales="user_sales"
					chart_icon="analytics_icon_span"
				/>
				<AnalyticsCard
					Total_Sales="Total Expenses"
					money_price="30,024"
					percentage_number="40"
					analysisIcons={MdBarChart}
					// classes
					user_sales="user_expenses"
					chart_icon="bar_chart_icon_span"
				/>
				<AnalyticsCard
					Total_Sales="Total Income"
					money_price="77,024"
					percentage_number="20"
					analysisIcons={MdOutlineStackedLineChart}
					// classes
					user_sales="user_income"
					chart_icon="stacked_line_chart_icon_span"
				/>
			</div>

			<Recent_request_by_user />
		</main>
	);
};

export default DashBoard_main;
