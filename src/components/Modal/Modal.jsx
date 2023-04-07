import 'index.css';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { ImCancelCircle } from 'react-icons/im';

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
          <button
            className="modalCloseBtn"
            type="button"
            onClick={() => {
              this.props.modalShown();
            }}
          >
            <ImCancelCircle className="iconX" />
          </button>
          <img src={this.props.value} alt="" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  ModalShown: PropTypes.bool,
};
