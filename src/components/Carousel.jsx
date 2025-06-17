import React, { useState, useEffect } from "react";
import "./Carousel.css";

const Carousel = ({ images, imageSize, height }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
		}, 3000);

		return () => clearInterval(intervalId);
	}, [images.length]);

	const handlePrevClick = () => {
		setCurrentIndex(
			(prevIndex) => (prevIndex - 1 + images.length) % images.length
		);
	};

	const handleNextClick = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
	};

	return (
		<div className="carousel-container" style={{ width: imageSize, height }}>
			<div
				className="carousel-slider"
				style={{ transform: `translateX(-${currentIndex * 100}%)` }}
			>
				{images.map((image, index) => (
					<div key={index} className="carousel-slide">
						<img
							src={image}
							alt={`Slide ${index + 1}`}
							className="carousel-image"
						/>
					</div>
				))}
			</div>
			{/* <div className="carousel-controls">
				<button className="carousel-btn" onClick={handlePrevClick}>
					&#8249;
				</button>
				<button className="carousel-btn" onClick={handleNextClick}>
					&#8250;
				</button>
			</div> */}
		</div>
	);
};

export default Carousel;
