import React from "react";
import VolumeIcon from "../../icons/components/volume";

function Volume(props)
{
	return(
		<button className="Volume">
			<VolumeIcon color="white" size={15}/>
			<div className="Volume-range">
				<input 
					type="range"
					max={1}
					min={0}
					step={.05}
					onChange={props.handleChangeVolume}
				/>
			</div>
		</button>
	);
}

export default Volume;