import React from "react";

export const Footer = () => {
	return (
		<footer className="footer d-flex mt-4" style={pieStyle}>
			<span>By Lucía Domínguez, 2021</span>
		</footer>
	);
};

const pieStyle = {
	margin: "0px",
	backgroundColor: "black",
	alignSelf: "center",
	padding: "30px",
	justifyContent: "center",
	color: "white"
};
