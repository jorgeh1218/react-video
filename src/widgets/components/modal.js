import React from 'react';
import './modal.css';
import VideoPlayer from "../../player/containers/video-player";

function Modal(props)
{
	return(
		<div className="Modal">
			<button className="Modal-close" onClick={props.handleClick}/>
			{props.children}
		</div>
	);
}

export default Modal;