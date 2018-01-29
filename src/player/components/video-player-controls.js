import React from "react";

function VideoPlayerControls(props)
{
	return(
		<div class="VideoPlayerControls">
			{props.children}
		</div>
	);
}

export default VideoPlayerControls;