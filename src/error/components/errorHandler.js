import React from 'react';

class errorHandler extends React.Component
{
	state = {
		crash:false
	}
	componentDidCatch(error,info)
	{
		this.setState({
			crash: true
		});
	}
	render()
	{
		console.log("Component did catch");
		if(this.state.crash)
		{
			console.log("Component did catch");
			return(
				<h1>There was an error</h1>
			);
		}
		return this.props.children;
	}
}

export default errorHandler;