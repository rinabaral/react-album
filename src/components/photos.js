import React from "react";
import axios from "axios";
import styled from "styled-components";
import Gallery from 'react-grid-gallery';

class Photos extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			photos: []
		};
	}

	componentDidMount() {
		var self = this;
		axios
			.get(
				`https://jsonplaceholder.typicode.com/photos?photoId=${
					this.props.albumId
				}`
			)
			.then(function(resp) {
				self.setState({ photos: resp.data });
			});
	}
	render() {
		const photos = this.state.photos.map(photo =>
		 ({ src: photo.url, 
		 	thumbnail:photo.thumbnailUrl,
		 	 caption:photo.title, thumbnailHeight: 150, 
		 	 thumbnailWidth: 150 }));
		return (
			<div>
				<h3>Photos</h3>
						<div>
							<Gallery images={photos}/>
						</div>
			</div>
		);
	}
}

export default Photos;
