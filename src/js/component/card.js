import React from "react";
import { data } from "./data";
import { Link } from "react-router-dom";

export const Cartas = () => {
	return (
		<div className="d-flex justify-content-around flex-wrap m-2">
			{data.map((item, index) => (
				<div
					className=" card mt-4"
					style={{
						maxWidth: "450px",
						border: "1px solid white",
						boxShadow: "0px 0px 5px 0px white",
						borderRadius: "5px"
					}}
					key={index}>
					<img
						className="card-img"
						src={`${item.foto}`}
						alt="Imagen de carta"
					/>
					<div
						className="card-body d-flex flex-column justify-content-center"
						style={texto}>
						<h5 className="text-center">
							<strong>{item.titulo}</strong>
						</h5>
						<p className="card-text">{item.contenido}</p>
						<Link to={"/info/" + item.titulo}>
							<span
								className="btn btn-outline-info m-1 d-flex justify-content-center"
								href="#"
								role="button">
								<p className="m-0">Info</p>
							</span>
						</Link>
						<a
							href={item.browser}
							target="_blank"
							rel="noopener noreferrer"
							className="btn btn-info m-1">
							Browser
						</a>
						<a
							href={item.github}
							target="_blank"
							rel="noopener noreferrer"
							className="btn btn-info m-1">
							Github
						</a>
					</div>
				</div>
			))}
		</div>
	);
};

const texto = {
	textAlign: "justify"
};
