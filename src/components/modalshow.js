import React from "react";
import Modal from "react-responsive-modal";

class ModalShow extends React.Component {
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
		const open = this.open;
		return (
			<Modal open={this.props.open} onClose={this.onCloseModal} center>
				<h2>{this.props.post.title}</h2>
				<p>{this.props.post.body}</p>
			</Modal>
		);
	}
}

export default ModalShow;
