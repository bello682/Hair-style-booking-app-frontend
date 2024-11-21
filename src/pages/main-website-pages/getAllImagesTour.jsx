import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllImages } from "../../store/action/adminActions/imagesUploadAction";
import ImageCard from "../../components/imageCard";
import "../CSS/homePage.css";
import { useNavigate } from "react-router-dom";
import NotificationList from "./../users/getNotifications/getNotifications";

// Reusable Card Component

const GetAllImagesTour = () => {
	const dispatch = useDispatch();
	const navigation = useNavigate();
	const { loadingGetAllImages, allImages, errorGetAllImages } = useSelector(
		(state) => state.getallUploadStateReducer
	);
	const isVerified = localStorage.getItem("isVerified");

	// States for data
	const [dataMale, setDataMale] = useState([]);
	const [dataFemale, setDataFemale] = useState([]);
	const [dataOthers, setDataOthers] = useState([]);
	const [filteredData, setFilteredData] = useState([]);
	// State for the filter selection
	const [filter, setFilter] = useState("all");
	// Modal State
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedImage, setSelectedImage] = useState(null);

	useEffect(() => {
		dispatch(getAllImages());
	}, [dispatch]);

	useEffect(() => {
		if (Array.isArray(allImages)) {
			// Extract male, female, and other images
			const allMaleImages = allImages.flatMap((imageSet) =>
				Array.isArray(imageSet?.maleImages) ? imageSet.maleImages : []
			);
			setDataMale(allMaleImages);

			const allFemaleImages = allImages.flatMap((imageSet) =>
				Array.isArray(imageSet?.femaleImages) ? imageSet.femaleImages : []
			);
			setDataFemale(allFemaleImages);

			const allOthersImages = allImages.flatMap((imageSet) =>
				Array.isArray(imageSet?.otherImages) ? imageSet.otherImages : []
			);
			setDataOthers(allOthersImages);

			// Combine all data for initial render
			setFilteredData([
				...allMaleImages,
				...allFemaleImages,
				...allOthersImages,
			]);
		}
	}, [allImages]);

	// Update filtered data when filter changes
	useEffect(() => {
		if (filter === "male") {
			setFilteredData(dataMale);
		} else if (filter === "female") {
			setFilteredData(dataFemale);
		} else if (filter === "other") {
			setFilteredData(dataOthers);
		} else {
			setFilteredData([...dataMale, ...dataFemale, ...dataOthers]); // Combine all
		}
	}, [filter, dataMale, dataFemale, dataOthers]);

	// Modal Functions
	const openModal = (image) => {
		setSelectedImage(image);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setSelectedImage(null);
	};

	// const handleBooking = () => {
	// 	navigation("/booking/hair-service");
	// };

	// Handle loading and error states
	if (loadingGetAllImages) {
		return (
			<div className="Loading__Images">
				<h1>Loading, Please Wait While Processing Images...</h1>
			</div>
		);
	}

	if (errorGetAllImages) {
		return <div>Error fetching images: {errorGetAllImages}</div>;
	}

	// Check if no data is available
	if (!allImages || !allImages || allImages.length === 0) {
		return <div>No images found.</div>;
	}

	const handleBooking = () => {
		if (isVerified) {
			navigation("/booking/hair-service");
		} else {
			navigation("/user-signUp");
		}
	};

	return (
		<div className="container--Images--upload">
			<h2>Image Gallery</h2>

			{/* Dropdown for filter selection */}
			<div className="dropdown-container">
				<label htmlFor="imageFilter" className="dropdown-label">
					Select by:
				</label>
				<select
					id="imageFilter"
					className="dropdown-select"
					value={filter}
					onChange={(e) => setFilter(e.target.value)}
				>
					<option value="all">All Images</option>
					<option value="female">Female Images</option>
					<option value="male">Male Images</option>
					<option value="other">Other Images</option>
				</select>
			</div>

			<NotificationList />

			{/* Display filtered data */}
			<div className="getAll__image__show">
				{filteredData.map((image) => (
					<ImageCard
						key={image._id}
						imageUrl={image.imageUrl}
						imageName={image.imageName}
						Expand_Image="Expand Image"
						onclickViewImage={() => openModal(image)}
					/>
				))}
			</div>

			{/* Modal */}
			{isModalOpen && (
				<div className="modal-overlay" onClick={closeModal}>
					<div className="modal-content" onClick={(e) => e.stopPropagation()}>
						<img
							src={selectedImage?.imageUrl}
							alt={selectedImage?.imageName}
							className="modal-image"
						/>
						<p className="modal-caption">{selectedImage?.imageName}</p>
						<div style={{ display: "flex", gap: "1rem" }}>
							<button className="modal-close-button" onClick={closeModal}>
								Close
							</button>
							<button className="modal-close-button" onClick={handleBooking}>
								Book now
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default GetAllImagesTour;
