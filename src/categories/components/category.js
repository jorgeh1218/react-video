import React from 'react';
import Playlist from '../../playlist/components/playlist'

function Category(props)
{
	return(
		<div className="Category">
			<p className="Category-description"> {props.description}</p>
			<h4 className="Category-title">{props.title}</h4>
			<Playlist handleOpenModal={props.handleOpenModal} playlist={props.playlist}/>
		</div>
	);
}

export default Category;