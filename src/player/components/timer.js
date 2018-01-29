import React from "react";

function Timer(props)
{
	return(
		<div className="Timer">
			<span>{props.currentTime} / {props.duration}</span>
		</div>
	);
}

export default Timer;