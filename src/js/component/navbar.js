import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
	return (
		<div>
			<nav className="navbar fixed-top navbar-expand-lg navbar-dark bg">
				<div className="container-fluid">
					<div>
						<Link to="/">
							<a className="navbar-brand" href="#">
								<strong>Lucía Domínguez </strong>
							</a>
						</Link>
					</div>
					<div>
						<button
							className="navbar-toggler"
							type="button"
							data-toggle="collapse"
							data-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation">
							<span className="navbar-toggler-icon" />
						</button>

						<div
							className="collapse navbar-collapse "
							id="navbarSupportedContent">
							<ul className="navbar-nav">
								<li className="nav-item active">
									<Link to="/">
										<span
											className="nav-link"
											href="#"
											role="button">
											Portfolio
										</span>
									</Link>
								</li>
								<li className="nav-item ">
									<Link to="/CV">
										<span
											className="nav-link"
											href="#"
											role="button">
											Curriculum
										</span>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};
