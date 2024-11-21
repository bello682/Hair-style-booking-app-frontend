// components/GlobalImageModal.js
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllImages } from "../store/action/adminActions/imagesUploadAction";
import ImageCard from "./imageCard";
import "../pages/CSS/bookingForm.css";

const GlobalImageModal = ({ isOpen, onClose, onSelectImage }) => {
	const dispatch = useDispatch();
	const { allImages, loadingGetAllImages, errorGetAllImages } = useSelector(
		(state) => state.getallUploadStateReducer
	);

	const [filter, setFilter] = useState("all");
	const [filteredData, setFilteredData] = useState([]);

	useEffect(() => {
		if (isOpen) {
			dispatch(getAllImages());
		}
	}, [isOpen, dispatch]);

	useEffect(() => {
		if (allImages) {
			const allMale = allImages.flatMap((set) => set?.maleImages || []);
			const allFemale = allImages.flatMap((set) => set?.femaleImages || []);
			const allOther = allImages.flatMap((set) => set?.otherImages || []);
			if (filter === "male") setFilteredData(allMale);
			else if (filter === "female") setFilteredData(allFemale);
			else if (filter === "other") setFilteredData(allOther);
			else setFilteredData([...allMale, ...allFemale, ...allOther]);
		}
	}, [filter, allImages]);

	if (!isOpen) return null;

	return (
		<div className="global-modal-overlay" onClick={onClose}>
			<div
				className="global-modal-content"
				onClick={(e) => e.stopPropagation()}
			>
				<div class="image-selection-container">
					<h2 class="selection-heading">Select an Image</h2>
					<div class="filter-container">
						<label class="filter-label">Select by:</label>
						<select
							value={filter}
							onChange={(e) => setFilter(e.target.value)}
							class="filter-select"
						>
							<option value="all">All</option>
							<option value="male">Male</option>
							<option value="female">Female</option>
							<option value="other">Other</option>
						</select>
					</div>
				</div>

				{loadingGetAllImages && <p>Loading...</p>}
				{errorGetAllImages && <p>Error: {errorGetAllImages}</p>}
				<div className="image-grid">
					{filteredData.map((image) => (
						<ImageCard
							key={image._id}
							imageUrl={image.imageUrl}
							imageName={image.imageName}
							Expand_Image="Select Image"
							onclickViewImage={() => {
								onSelectImage(image);
								onClose();
							}}
						/>
					))}
				</div>
				<button onClick={onClose} className="close-modal">
					Close
				</button>
			</div>
		</div>
	);
};

export default GlobalImageModal;
