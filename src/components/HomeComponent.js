/** @format */

import React from "react";

import RenderCard from "./RenderCard";

function Home(props) {
	return (
		<div style={{ paddingRight: 0, paddingLeft: 0 }} className="container">
			<div className="row align-item-start">
				<div className="col-12 col-md mt-1 mb-1">
					<RenderCard
						item={props.dish}
						isLoading={props.dishesLoading}
						errorMsg={props.dishesErrorMsg}
					/>
				</div>
				<div className="col-12 col-md mt-1 mb-1">
					<RenderCard
						item={props.promotion}
						isLoading={props.promosLoading}
						errorMsg={props.promosErrorMsg}
					/>
				</div>
				<div className="col-12 col-md mt-1 mb-1">
					<RenderCard
						item={props.leader}
						isLoading={props.leadersLoading}
						errorMsg={props.leadersErrorMsg}
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
