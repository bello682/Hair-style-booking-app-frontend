import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllImages } from "../../store/action/adminActions/imagesUploadAction";
import ImageCard from "../../components/imageCard";
import "../CSS/homePage.css";

// Reusable Card Component

const GetAllImagesTour = () => {
	const dispatch = useDispatch();
	const { loadingGetAllImages, allImages, errorGetAllImages } = useSelector(
		(state) => state.getallUploadStateReducer
	);

	// States for data
	const [dataMale, setDataMale] = useState([]);
	const [dataFemale, setDataFemale] = useState([]);
	const [dataOthers, setDataOthers] = useState([]);
	const [filteredData, setFilteredData] = useState([]);

	// State for the filter selection
	const [filter, setFilter] = useState("all");

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

	// Handle loading and error states
	if (loadingGetAllImages) {
		return <div>Loading...</div>;
	}

	if (errorGetAllImages) {
		return <div>Error fetching images: {errorGetAllImages}</div>;
	}

	// Check if no data is available
	if (!allImages || !allImages || allImages.length === 0) {
		return <div>No images found.</div>;
	}

	return (
		<div className="container--Images--upload">
			<h2>Image Gallery</h2>

			{/* Dropdown for filter selection */}
			<div className="dropdown-container">
				<label htmlFor="imageFilter" className="dropdown-label">
					Filter by:
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

			{/* Display filtered data */}
			<div style={{ display: "flex", flexWrap: "wrap" }}>
				{filteredData.map((image) => (
					<ImageCard
						key={image._id}
						imageUrl={image.imageUrl}
						imageName={image.imageName}
					/>
				))}
			</div>
		</div>
	);
};

export default GetAllImagesTour;
