import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { NavBar } from "./component/navbar.js";
import { Footer } from "./component/footer.js";
import { Home } from "./views/home.js";
import { Info } from "./views/info.js";

export const Layout = () => {
	return (
		<div className="contenedor d-flex flex-column">
			<BrowserRouter>
				<NavBar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/info/:titulo" component={Info} />
					<Route>
						<h1>Not found!</h1>
					</Route>
				</Switch>
				<Footer />
			</BrowserRouter>
		</div>
	);
};
