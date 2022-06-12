/** @format */

import React from "react";
import RenderCard from "./RenderCard";
function Home(props) {
	return (
		<div style={{ paddingRight: 0, paddingLeft: 0 }} className="container">
			<div className="row align-item-start">
				<div className="col-12 col-md mt-1 mb-1">
					<RenderCard item={props.dish} />
				</div>
				<div className="col-12 col-md mt-1 mb-1">
					<RenderCard item={props.promotion} />
				</div>
				<div className="col-12 col-md mt-1 mb-1">
					<RenderCard item={props.leader} />
				</div>
			</div>
		</div>
	);
}

export default Home;
