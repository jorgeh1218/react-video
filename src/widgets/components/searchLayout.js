import React from 'react';

function SearchLayout(props)
{
	return(
		<form className="Search" onSubmit={props.handleSubmit}>
		<input 
			ref={props.setRef}
			type="text"
			className="Search-input"
			name="search"
			placeholder="Busca tu contenido aquí"/>
		</form>
	);
}

export default SearchLayout;