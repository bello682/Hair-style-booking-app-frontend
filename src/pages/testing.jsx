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
