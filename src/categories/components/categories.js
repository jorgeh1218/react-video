import React from 'react';
import Category from './category'
import Search from '../../widgets/container/search'

function Categories(props)
{
	return(
		<div className="Categories">
		<Search />
		{
			props.data.map((item)=> {
				return <Category handleOpenModal={props.handleOpenModal} key={item.id} {...item}/>
			})
		}	
		</div>
	);
	
}

export default Categories;