import { useState, useEffect } from "react";

const PasswordValidator = ({ password }) => {
	const requirements = [
		{
			label: "At least one capital letter",
			isValid: /[A-Z]/.test(password),
		},
		{
			label: "At least one small letter",
			isValid: /[a-z]/.test(password),
		},
		{
			label: "At least one number",
			isValid: /\d/.test(password),
		},
		{
			label: "At least one special character",
			isValid: /[!@#$%^&*(),.?":{}|<>]/.test(password),
		},
		{
			label: "Must be more than 8 characters",
			isValid: password.length > 8,
		},
	];

	return (
		<div className="w-full mt-2">
			<ul className="space-y-1">
				{requirements.map((req, index) => (
					<li key={index} className="flex items-center space-x-2">
						{/* Animated Circle */}
						<div
							className={`w-5 h-5 flex items-center justify-center rounded-full border-2 ${
								req.isValid
									? "border-green-500 animate-spin-once"
									: "border-gray-300"
							}`}
						>
							{req.isValid && (
								<div className="w-3 h-3 bg-green-500 rounded-full animate-fade-in" />
							)}
						</div>
						{/* Requirement Text */}
						<span
							className={`${
								req.isValid ? "text-white" : "text-gray-500"
							} text-sm md:text-xl`}
						>
							{req.label}
						</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export default PasswordValidator;
