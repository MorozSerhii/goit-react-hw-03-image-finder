import 'index.css';
import { Component } from 'react';
import PropTypes from 'prop-types';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handelKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handelKeyDown);
  }
  handelKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.modalShown();
    }
  };
  render() {
    return (
      <div className="Overlay">
        <div className="Modal">
          <img src={this.props.value} alt="" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  ModalShown: PropTypes.bool,
};
