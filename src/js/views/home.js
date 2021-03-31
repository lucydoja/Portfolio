import React from "react";
import { Cartas } from "../component/card";

export const Home = () => {
	return (
		<container>
			<div className="positionNav" style={{ height: "70px" }}></div>
			<h3 className="titulo">Portfolio</h3>
			<Cartas />
			<div className="posicionFooter" style={{ height: "80px" }} />
		</container>
	);
};
