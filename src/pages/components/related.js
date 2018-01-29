import React from 'react';

function Related(props)
{
	return(
		<div className="Related" style={{background: "#511a7a"}}>
			<img src="./imgs/logo.png" width="200"/>
			<ul style={{color:"white"}}>
				<li>Home</li>
				<li>Music</li>
				<li>Video</li>
				<li>Who we are?</li>
				<li>About</li>
				<li>Help</li>
			</ul>
		</div>
	);
}
export default Related;