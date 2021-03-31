import React from "react";
import foto from "../../img/foto.jpg";
import { ProgressBar } from "../component/progressBar";

export const Curriculum = () => {
	let skills = [
		"HTML",
		"JavaScript",
		"React",
		"Flux",
		"Python",
		"Flask",
		"MySQL",
		"SQLAlchemy",
		"Rest API",
		"CSS",
		"Bootstrap",
		"DOM"
	];
	let porcentage = [
		"70",
		"85",
		"80",
		"70",
		"70",
		"50",
		"50",
		"60",
		"70",
		"80",
		"80",
		"40"
	];
	return (
		<div
			className="container mb-2 align-self-center curriculum"
			style={{ maxWidth: "800px" }}>
			<div className="positionNav" style={{ height: "70px" }}></div>
			<div className="d-flex justify-content-center my-3">
				<h2 className="text-center m-3">
					<strong>Curriculum Vitae</strong>
				</h2>
			</div>

			<div className="row mt-auto d-flex flex-column justify-content-center">
				<div className="align-items-center d-flex flex-column">
					<img
						className="my-auto  "
						style={{
							borderRadius: "50%",
							height: "250px",
							width: "250px",
							border: "4px solid  rgba(35,193,201,1)"
						}}
						src={foto}
						alt="myself"
					/>
					<h3 className="text-center my-3">
						<u>Lucía Domínguez</u>
					</h3>
				</div>
				<div className="p-3 mt-3" id="texto">
					<h4 className="text-center">
						<strong>About me</strong>
					</h4>
					<span className="text-justify">
						I am a BSc in Civil Engineering with a passion for Data
						Science and Software Development. I would describe
						myself as a perfectionist, I have a great eye for
						detail, and I am also a good problem solver.
					</span>
				</div>
				<div className="p-3 mt-3" id="texto">
					<h4 className="text-center mt-3">
						<strong>Contact Information</strong>
					</h4>
					<span>
						<li>E-mail: luciadoja96@gmail.com</li>{" "}
						<li>Phone number: +52 5531160532</li>
						<a
							href="https://www.linkedin.com/in/luc%C3%ADa-dom%C3%ADnguez-jara/"
							target="_blank"
							rel="noopener noreferrer"
							className="btn btn-info m-1 mt-2 d-flex justify-content-center ">
							Linkedin
						</a>
						<a
							href="https://github.com/lucydoja"
							target="_blank"
							rel="noopener noreferrer"
							className="btn btn-info m-1 mt-2 d-flex justify-content-center">
							Github
						</a>
					</span>
				</div>

				<div className="p-3 mt-3" id="texto">
					<h4 className="text-center">
						<strong>Education</strong>
					</h4>

					<li>
						<ins>2014 - 2020</ins> Bachelor’s degree in Civil
						Engineering - Universidad de Costa Rica
					</li>
					<li>
						<ins>2000 - 2014</ins> Middle school at Lycée Franco
						Costaricien
					</li>
				</div>
				<div className="p-3 mt-3" id="texto">
					<h4 className="text-center">
						<strong>Certifications</strong>
					</h4>

					<li>
						<ins>Full Stack Developer</ins> by 4Geeks Academy -
						Duration: 400 hours
					</li>
				</div>
				<div className=" p-3 mt-3" id="texto">
					<h4 className="text-center">
						<strong>Languages</strong>
					</h4>
					<table
						className="text-center"
						style={{ width: "100%", border: "1px solid white" }}>
						<tr>
							<th>Language</th>
							<th>Level</th>
							<th>Title / Certification</th>
						</tr>
						<tr>
							<td>Spanish</td>
							<td>Native</td>
							<td> - </td>
						</tr>
						<tr>
							<td>English</td>
							<td>High</td>
							<td>TOEFL iBT - Score 104/120</td>
						</tr>
						<tr>
							<td>French</td>
							<td>High</td>
							<td>DELF - B2</td>
						</tr>
						<tr>
							<td>Portuguese</td>
							<td>Intermediate</td>
							<td>Certificate of completion ILISA</td>
						</tr>
					</table>
				</div>
				<div className="p-3 mt-3" id="texto">
					<h4 className="text-center">
						<strong>Skills</strong>
					</h4>
					<span>
						Intermediate knowledge of Microsoft Office: Excel, Word,
						PowerPoint, Visio and Project.
					</span>
					{skills.map((item, index) => (
						<div
							key={index}
							className="d-flex flex-column justify-content-center mt-2">
							<span className="text-center">{item}</span>{" "}
							<ProgressBar dato={porcentage[index]}></ProgressBar>
						</div>
					))}
				</div>
				<div className="p-3 mt-3" id="texto">
					<h4 className="text-center">
						<strong>Experience</strong>
					</h4>
					<div className="mt-3">
						<strong>
							<u>
								Transconsult S.A. de C.V.– Consulting engineer
							</u>
						</strong>{" "}
						<br /> 2020 - 2021
						<span>
							<br /> Writing reports, benchmarking and information
							analysis for the Integral Sustainable Urban Mobility
							Program of the Monterrey Metropolitan Area
							(PIMUS-ZMM, for its Spanish initials).
						</span>
					</div>
					<div className="mt-3">
						<strong>
							<u>
								Universidad de Costa Rica – Professors’
								assistant
							</u>
						</strong>{" "}
						<br /> 2018 - 2020
						<span>
							<br /> Review and grade assignments, short exams,
							and projects, as well as solving students’ doubts.
						</span>
					</div>
					<div className="mt-3">
						<strong>
							<u>
								Laboratorio Nacional de Materiales y Modelos
								Estructurales (LanammeUCR) – Assistant
							</u>
						</strong>{" "}
						<br /> 2015 - 2017
						<span>
							<br /> Assistant in the Management and Evaluation of
							the National Road Network Unit, where my
							responsibilities included; analyzing and
							synthesizing data on surface irregularities (IRI),
							friction (GRIP), impact deflectometer (FWD) and
							pavement auscultation to determine the condition of
							Costa Rica&apos;s paved national road network, as
							part of the biennial evaluation report that is
							responsibility of LanammeUCR as the auditing body.
							In addition, I carried out visual auscultation work
							through the use of Geo3D software.
						</span>
					</div>
				</div>
			</div>
			<div className="posicionFooter" style={{ height: "80px" }} />
		</div>
	);
};
