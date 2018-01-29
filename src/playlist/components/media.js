import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Media extends Component
{	
	/*
	//ES6 way
	state = {
		title: this.props.title
	};*/
	 //Old fashion way
	 constructor(props)
	 {
	 	super(props);
	 	/*this.state = {
	 		title: this.props.title
	 	}*/
	 	//this.in_val = 0;
	 }
	 //Handling DOM Events
	  handleClick = (event) => {
    // console.log(this.props.image)
    // this.setState({
    //   author: 'Ricardo Celis',
    // })
	    this.props.openModal(this.props);
	  }

	 render()
	 {
	 	//One way of styling
	 	/*const myStyle = 
		{
			container:
			{
				fontSize: 18
			}
		};*/
	 	return(
	 		<div className="Media" onClick={this.handleClick}>
        		<div className="Media-cover">
	 				<img
	 					//Handling DOM Events
	 					src={this.props.cover}
	 					alt=""
	 					width={260}
	 					height={160}
	 				/>
	 				<h3 className="Media-title">{this.props.title}</h3>
        			<p className="Media-author">{this.props.author}</p>
	 			</div> 
	 		</div>
	 	)
	 }
}

Media.propTypes =
{
	title: PropTypes.string
};

export default Media;