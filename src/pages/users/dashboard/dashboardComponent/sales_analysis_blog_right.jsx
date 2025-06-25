import React from "react";

const Sales_analysis_blog_right = () => {
	return (
		<div>
			{" "}
			<div className="item oline">
				<div className="blog_sales_icon">
					<FaTimes className="material_icons_sharp_shopping_cart_span" />
				</div>

				<div className="analysis_right_blog">
					<div className="info">
						<h3 className="dash_h3">ONLINE ORDERS</h3>
						<smal className="text_muted">Last 24 Hours</smal>
					</div>
					<h5 className="dash_success dash_h5">+35%</h5>
					<h3 className="dash_h3">26734</h3>
				</div>
			</div>
		</div>
	);
};

export default Sales_analysis_blog_right;
