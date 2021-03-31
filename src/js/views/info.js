import React from "react";
import { data } from "../component/data";
import { useParams } from "react-router-dom";

export const Info = () => {
	const params = useParams();

	let prueba = data.find(arr => arr.titulo === params.titulo);
	if (prueba != undefined) {
		let project = prueba;

		return (
			<div className="container mb-2 align-self-center">
				<div className="positionNav" style={{ height: "70px" }}></div>
				<div className="d-flex justify-content-center my-3">
					<h2 className="text-center" style={{ color: "white" }}>
						<strong>{project.titulo}</strong>
					</h2>
				</div>

				<div className="row mt-auto">
					<div className="col-lg-4 col-12 p-3" id="texto">
						<h4 className="text-center">
							<strong>Description</strong>
						</h4>
						<span className="text-justify">
							{project.contenido}
						</span>
					</div>
					<div className="col-lg-4 col-12 p-3" id="texto">
						<h4 className="text-center">
							<strong>Features</strong>
						</h4>
						<ul>
							{project.features.map((item, index) => (
								<li key={index}>{item}</li>
							))}
						</ul>
					</div>
					<div className="col-lg-4 col-12 p-3" id="texto">
						{" "}
						<h4 className="text-center">
							<strong>Technologies</strong>
						</h4>
						<ul style={{ maxHeight: "150px", overflowY: "auto" }}>
							{project.technologies.map((item, index) => (
								<li key={index}>{item}</li>
							))}
						</ul>
					</div>
				</div>
				<div className="row mt-2">
					<div className="col-lg-6 col-12">
						<a
							href={project.browser}
							target="_blank"
							rel="noopener noreferrer"
							className="btn btn-info m-1 d-flex justify-content-center ">
							<strong>Browser</strong>
						</a>
					</div>
					<div className="col-lg-6 col-12">
						<a
							href={project.github}
							target="_blank"
							rel="noopener noreferrer"
							className="btn btn-info m-1 d-flex justify-content-center">
							<strong>Github</strong>
						</a>
					</div>
				</div>
				<div
					id="carouselExampleControls"
					className="carousel slide mt-3"
					data-ride="carousel">
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img
								className="d-block w-100"
								src={`${project.foto}`}
								alt="First slide"
							/>
						</div>
						<div className="carousel-item">
							<img
								className="d-block w-100"
								src={`${project.foto2}`}
								alt="Second slide"
							/>
						</div>
					</div>
					<a
						className="carousel-control-prev"
						href="#carouselExampleControls"
						role="button"
						data-slide="prev">
						<span
							className="carousel-control-prev-icon"
							aria-hidden="true"></span>
						<span className="sr-only">Previous</span>
					</a>
					<a
						className="carousel-control-next"
						href="#carouselExampleControls"
						role="button"
						data-slide="next">
						<span
							className="carousel-control-next-icon"
							aria-hidden="true"></span>
						<span className="sr-only">Next</span>
					</a>
				</div>
				<div className="posicionFooter" style={{ height: "80px" }} />
			</div>
		);
	}
};
