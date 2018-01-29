import React from 'react';
import HomeLayout from '../components/homeLayout';
import Categories from '../../categories/components/categories';
import Related from '../components/related';
import ModalContainer from './modal-container';
import Modal from '../../widgets/components/modal';
import errorHandler from '../../error/components/errorHandler';
import VideoPlayer from '../../player/containers/video-player';

class Home extends React.Component
{
	state = {
		modalVisible: false
	}
	closeModal = (event) =>
	{
		this.setState({
			modalVisible: false
		});
	}
	openModal= (media) =>
	{
		console.log(media);
		this.setState({
			modalVisible: true,
			media
		});
	}
	render()
	{
		return(
			<errorHandler>	
				<HomeLayout>		
						<Related/>
						<Categories handleOpenModal={this.openModal} data={this.props.data}/>
						{
							this.state.modalVisible &&
							<ModalContainer>
								<Modal
					                handleClick={this.closeModal}
					            >
					                <VideoPlayer
					                  autoplay
					                  src={this.state.media.src}
					                  title={this.state.media.title}
					                />
            					</Modal>
							</ModalContainer>
						}
				</HomeLayout>
			</errorHandler>	
		);
	}
	
}

export default Home;