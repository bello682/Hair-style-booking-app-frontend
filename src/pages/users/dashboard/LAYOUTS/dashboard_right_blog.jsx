import React, { useRef, useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaSun, FaMoon } from "react-icons/fa";
import profileImage from "../../../../asset/images/cut3.jpg";
import "../../../CSS/userDashboardLayoutView.css";
import Recent_Single_Update from "../dashboardComponent/recent_Single_Update";

const DashBoard_Right_Blog = ({ onClose }) => {
	const sidebarRef = useRef(null);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
				onClose(); // Close if clicked outside
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [onClose]);

	return (
		<div ref={sidebarRef}>
			<div className="blog_right">
				<div className="top_navbar">
					<button id="nenu_btn ">
						<FaBars className="material_icons_sharp_span_menu" />
					</button>

					<div className="theme_toggler">
						<FaSun className="material_icon_sharp_span_sun active" />
						<FaMoon className="material_icon_sharp_span_moon" />
					</div>

					<div className="user_profile_detail_nav">
						<div className="info">
							<p>
								Hey, <b>Daniel</b>
							</p>
							<smal className="text_muted">Admin</smal>
						</div>
						<div className="profile_photo_pics profile_photo">
							<img src={profileImage} alt="" />
						</div>
					</div>

					{/*  */}
					<div
						className="toggle_menu_Recent_request_by_user_for_open_and_close text-[black] cursor-pointer "
						onClick={onClose}
					>
						<FaTimes className="material_icons_sharp_span_menu text-xl" />
					</div>
					{/*  */}
				</div>

				{/* Resent Updates */}
				<div className="recent_update_blogs">
					<h2 className="dash_h2">Recent updates</h2>
					<div className="blog_Updates">
						<div className="blog_single_update">
							<div className="profile_photo_pics profile_photo">
								<img src={profileImage} alt="" />
							</div>
							<div className="message">
								<p>
									<b>Mike Tyson</b> recieves is order of night lion tiger tech
									drone
								</p>
								<small className="text_muted">2 Minutes Ago</small>
							</div>
						</div>
						<Recent_Single_Update />
						<Recent_Single_Update />
						<Recent_Single_Update />
					</div>
				</div>
				{/* Sales Analysis */}
				<div className="sales_analysis_blog">
					<h2 className="dash_b2">Sales Analysis</h2>

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
					<div className="item offline">
						<div className="blog_sales_icon">
							<FaTimes className="material_icons_sharp_local_mall_span" />
						</div>

						<div className="analysis_right_blog">
							<div className="info">
								<h3 className="dash_h3">OFFLINE ORDERS</h3>
								<smal className="text_muted">Last 24 Hours</smal>
							</div>
							<h5 className="dash_danger dash_h5">-17%</h5>
							<h3 className="dash_h3">12345</h3>
						</div>
					</div>
					<div className="item customers">
						<div className="blog_sales_icon">
							<FaTimes className="material_icons_sharp_person_span" />
						</div>

						<div className="analysis_right_blog">
							<div className="info">
								<h3 className="dash_h3">NEW CUSTOMERS</h3>
								<smal className="text_muted">Last 24 Hours</smal>
							</div>
							<h5 className="dash_warning dash_h5">+25%</h5>
							<h3 className="dash_h3">737883</h3>
						</div>
					</div>

					<div className="item add_product">
						<div>
							<FaMoon className="material_icons_sharp_add_span" />
							<h3 className="dash_h3">Add Product</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DashBoard_Right_Blog;
