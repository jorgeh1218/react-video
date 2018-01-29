import React from "react";
import FullScreenIcon from "../../icons/components/full-screen";

function FullScreen(props)
{
	return(
		<div className="FullScreen" onClick={props.handleFullScreen}>
			<FullScreenIcon size={15} color="white"/>
		</div>
	);
}

export default FullScreen;