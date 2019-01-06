  import React from "react";
// import axios from "axios";
import Modal from "react-responsive-modal";
import styled from "styled-components";
import Photos from "./photos";

class Album extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false
		};

		this.onOpenModal = this.onOpenModal.bind(this);
		this.onCloseModal = this.onCloseModal.bind(this);
	}

	onOpenModal = () => {
		this.setState({ open: true });
	};

	onCloseModal = () => {
		this.setState({ open: false });
	};

	render() {
		const open = this.state.open;
		return (
			<Wrapper onClick={this.onOpenModal}>
			<img src="https://via.placeholder.com/150/d32776" width="100%"/>
				<TextContainer >
					<b>{this.props.album.title}</b>
				</TextContainer>
				<Modal open={open} onClose={this.onCloseModal} center>
					<h2>{this.props.album.title}</h2>
					<p>{this.props.album.body}</p>
					<br />
					<Photos albumId={this.props.album.id} />
				</Modal>
			</Wrapper>
		);
	}
}

const Wrapper = styled.div`
	background: #fff;
	border-radius: 2px;
	display: inline-block;
	margin: 10px;
	position: relative;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
	transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

	&:hover {
		box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
	}
`;

const TextContainer = styled.div`
	width: 70%;
	padding: 2px 16px;
	float: left;
`;


export default Album;
