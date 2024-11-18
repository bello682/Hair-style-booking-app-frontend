// import React from "react";

// const ImageCard = ({ imageUrl, imageName, onclickBooking }) => {
// 	return (
// 		<div
// 			style={{
// 				border: "1px solid #ccc",
// 				padding: "10px",
// 				margin: "10px",
// 				width: "150px",
// 				textAlign: "center",
// 			}}
// 		>
// 			<img
// 				src={imageUrl}
// 				alt={imageName}
// 				style={{ width: "100px", height: "100px", objectFit: "cover" }}
// 			/>
// 			<p>{imageName}</p>
// 			<button onClick={onclickBooking}>Book Now</button>
// 		</div>
// 	);
// };

// export default ImageCard;

// ImageCard.js

import React from "react";
import "./ImageCard.css";

const ImageCard = ({ imageUrl, imageName, onclickBooking }) => {
	return (
		<div className="image-card">
			<img className="image-card__img" src={imageUrl} alt={imageName} />
			<p className="image-card__name">{imageName}</p>
			<button className="image-card__button" onClick={onclickBooking}>
				Book Now
			</button>
		</div>
	);
};

export default ImageCard;
