import React from "react";
import VideoPlayerLayout from "../components/video-player-layout";
import Video from "../components/video";
import Title from "../components/title";
import VideoPlayerControls from "../components/video-player-controls";
import PlayPause from "../components/playpause";
import Timer from "../components/timer";
import ProgressBar from "../components/progressbar";
import Spinner from "../components/spinner";
import Volume from "../components/volume";
import FullScreen from "../components/fullscreen";

class VideoPlayer extends React.Component
{
	state = {
		pause: true,
		duration: 0,
		currentTime: 0,
		loading: false
	}
	formatTime = secs =>
	{
		const minutes = parseInt(secs / 60, 10);
		const seconds = parseInt(secs % 60, 10);
		return `${minutes}:${this.leftPadCurrentTime(seconds.toString())}`;
	}
	leftPadCurrentTime = number =>
	{
		const pad = '00';
		return pad.substring(0, pad.length - number.length) + number;
	}
	togglePlay = event =>
	{
		this.setState({
			pause: !this.state.pause
		});
	}
	handleLoadedMetadata = event =>
	{
		this.video = event.target;
		this.setState({duration: this.video.duration})
	}
	handleTimeUpdate = event =>
	{
		console.log(this.video.currentTime);
		this.setState({currentTime: this.video.currentTime});
	}
	handleProgressChange = event =>
	{
		console.log("Managed: " + event.target.value);
		this.video.currentTime = event.target.value;
	}
	handleSeeking = event =>
	{
		this.setState({loading: true});
	}
	handleSeeked = event =>
	{
		this.setState({loading: false});
	}
	handleChangeVolume =event =>
	{
		console.log("Volume change");
		this.video.volume = event.target.value
	}
	handleFullScreen = event =>
	{
		 if(this.player.requestFullscreen) {
		    this.player.requestFullscreen();
		  } else if(this.player.mozRequestFullScreen) {
		    this.player.mozRequestFullScreen();
		  } else if(this.player.webkitRequestFullscreen) {
		    this.player.webkitRequestFullscreen();
		  } else if(this.player.msRequestFullscreen) {
		    this.player.msRequestFullscreen();
		  }
	}
	setRef = element =>
	{
		this.player = element;
	}
	render()
	{
		return(
			<VideoPlayerLayout setRef={this.setRef}>
				<Title title={this.props.title}/>
				<VideoPlayerControls>

					<PlayPause pause={this.state.pause} handleClick={this.togglePlay}/>

					<Timer 
						currentTime={this.formatTime(this.state.currentTime)} 
						duration= {this.formatTime(this.state.duration)}
					/>

					<ProgressBar 
						value={this.state.currentTime} 
						duration= {this.state.duration}
						handleProgressChange={this.handleProgressChange} 
					/>

					<Volume handleChangeVolume={this.handleChangeVolume}/>

					<FullScreen handleFullScreen={this.handleFullScreen}/>

				</VideoPlayerControls>

				<Spinner active={this.state.loading}/>

				<Video 
					pause={this.state.pause} 
					src={this.props.src}
					autoplay={this.props.autoplay} 
					handleLoadedMetadata= {this.handleLoadedMetadata}
					handleTimeUpdate= {this.handleTimeUpdate}
					handleSeeking = {this.handleSeeking}
					handleSeeked = {this.handleSeeked}
				/>
			</VideoPlayerLayout>
		);
	}
}

export default VideoPlayer;