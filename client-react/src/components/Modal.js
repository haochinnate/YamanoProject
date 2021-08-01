import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css'

const Modal = (props) => {
    return ReactDOM.createPortal(
        <div onClick={props.onDismiss} className="modal d-block">
            <div onClick={(e) => e.stopPropagation()} className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5>{props.title}</h5>
                        <button type="button" className="btn-close" onClick={props.onDismiss}
                            data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">{props.content}</div>
                    <div className="modal-footer">{props.actions}</div>
                </div>
            </div>
        </div>,
        document.querySelector('#modal')
    );
};

export default Modal;
