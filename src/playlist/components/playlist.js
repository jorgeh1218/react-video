import React from 'react';
import Play from '../../icons/components/play';
import Media from './media';

function Playlist (props)
{
	const playlist = props.playlist; 
	return (
		
		<div className="Playlist">
			{
				playlist.map((item)=>
				{
					return <Media openModal={props.handleOpenModal} {...item} key={item.id}/>
				})
			}
		</div>
	);
}

export default Playlist;