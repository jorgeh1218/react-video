import React from 'react';
import SearchLayout from '../components/searchLayout';

class Search extends React.Component
{	
	handleSubmit = event =>
	{
		event.preventDefault();
		console.log(this.input.value);
	}
	setInputRef = element =>
	{
		this.input = element;
	}
	render()
	{
		return(
			<SearchLayout setRef={this.setInputRef} handleSubmit={this.handleSubmit}/>
		);
	}
}
export default Search;