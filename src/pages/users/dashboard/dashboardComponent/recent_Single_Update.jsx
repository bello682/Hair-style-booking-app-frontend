import React from "react";
import profileImage from "../../../../asset/images/cut3.jpg";
import "../../../CSS/userDashboardLayoutView.css";

const Recent_Single_Update = ({ profileImageUrl }) => {
	return (
		<div className="blog_single_update">
			<div className="profile_photo_pics profile_photo">
				<img
					src={profileImageUrl ? profileImageUrl?.profileImage : profileImage}
					alt=""
				/>
			</div>
			<div className="message">
				<p>
					<b>Mike Tyson</b> recieves is order of night lion tiger tech drone
				</p>
				<small className="text_muted">2 Minutes Ago</small>
			</div>
		</div>
	);
};

export default Recent_Single_Update;
