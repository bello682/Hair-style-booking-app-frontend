import React from "react";
import "./CSS/testing.css";
import bg from "../../src/asset/images/bg.png";

const Testing = () => {
	return (
		<div>
			<div className="login-form">
				<h1>Login</h1>
				<div className="container">
					<div className="main">
						<div className="content">
							<h2>Log In</h2>
							<form action="#" method="post">
								<input
									type="text"
									name=""
									placeholder="User Name"
									required
									autoFocus
								/>
								<input
									type="password"
									name=""
									placeholder="User Password"
									required
									autoFocus
								/>
								<button className="btn" type="submit">
									Login
								</button>
							</form>
							<p className="account">
								Don't Have An Account? <a href="#">Register</a>
							</p>
						</div>
						<div className="form-img">
							<img src={bg} alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Testing;

{
	/* Sidebar */
}
// 	<div
// 	className={`bg-white text-black h-screen w-64 fixed transition-transform duration-300 border border-black ${
// 		isOpen ? "translate-x-0" : "-translate-x-64"
// 	} md:translate-x-0`} // Always visible on medium screens and above
// >
// 	<button
// 		className="absolute top-4 right-4 text-2xl text-red-700 md:hidden"
// 		onClick={() => setIsOpen(false)}
// 	>
// 		<AiOutlineClose />
// 	</button>

{
	/* <div className="p-6">
		<h2 className="text-2xl font-bold">My Dashboard</h2>
		<nav className="mt-6 space-y-4">
			<ul>
				<li
					className="cursor-pointer flex items-center space-x-3 text-lg hover:text-blue-400 transition-colors duration-200"
					onClick={() => setIsOpen(false)}
				>
					<AiFillHome />
					<span>Home</span>
				</li>
				<li
					className="cursor-pointer flex items-center space-x-3 text-lg hover:text-blue-400 transition-colors duration-200"
					onClick={() => setIsOpen(false)}
				>
					<AiFillFileText />
					<span>My CV</span>
				</li>
				<li
					className="cursor-pointer flex items-center space-x-3 text-lg hover:text-blue-400 transition-colors duration-200"
					onClick={() => setIsOpen(false)}
				>
					<AiFillSetting />
					<span>Settings</span>
				</li>
			</ul>
		</nav>
	</div>
</div> */
}

{
	/* Open Sidebar Button */
}
{
	/* <button
	className="fixed top-4 left-4 text-3xl text-green-800 md:hidden"
	onClick={() => setIsOpen(true)}
>
	<AiOutlineMenu />
</button> */
}
