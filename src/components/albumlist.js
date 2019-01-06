import React from "react";
import styled from "styled-components";
import Album from "./album";
import { Container, Row, Col } from 'react-grid-system';

class AlbumList extends React.Component {
	render() {
		const { albums }= this.props;
		return (
			<Container>
				<Row>
					
						{albums.map(function(album) {
							return (
								<Col sm={3}>
									
									<Album album={album} />
									{console.log(album)}
								</Col>
							);
						})}

							</Row>
						</Container>
		);
	}
}

export default AlbumList;
