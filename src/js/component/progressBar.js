import React, { Component } from "react";
import PropTypes from "prop-types";

export const ProgressBar = props => {
	return (
		<div className="">
			<div className="progress-bar mt-2 ">
				<div className="filler" style={{ width: `${props.dato}%` }}>
					<span className="m-0 p-0">
						<strong>{props.dato}%</strong>
					</span>
				</div>
			</div>
		</div>
	);
};

ProgressBar.propTypes = {
	dato: PropTypes.integer
};
