import React from "react";

class Video extends React.Component
{
	toggleVideo()
	{
		if(this.props.pause)
			this.video.play();
		else
			this.video.pause();
	}
	componentWillReceiveProps(nextProps)
	{
		if(nextProps.pause != this.props.pause)
			this.toggleVideo();
	}
	setRef = element =>
	{
		this.video = element;
	}
	render()
	{
		return(
			<div className="Video">
				<video 
					src={this.props.src}
					autoplay={this.props.autoplay}
					ref={this.setRef}
					onLoadedMetadata={this.props.handleLoadedMetadata}
					onTimeUpdate= {this.props.handleTimeUpdate}
					onSeeking={this.props.handleSeeking}
					onSeeked={this.props.handleSeeked}
				/>
			</div>
		);
	}
}

export default Video;