import React from 'react';
import ReactDOM from 'react-dom';

const Modal = (props) => {
    return ReactDOM.createPortal(
        // <div onClick={props.onDismiss} className="ui dimmer modals visible active">
        //     <div onClick={(e) => e.stopPropagation()} className="ui standard modal visible active">
        //         <i className="close icon" onClick={props.onDismiss}></i>
        //         <div className="header">{props.title}</div>
        //         <div className="content">{props.content}</div>
        //         <div className="actions">{props.actions}</div>
        //     </div>
        // </div>
        <div className="modal" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Modal title {props.title}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                
                    <div className="modal-body">
                        <p>Modal body text goes here.</p>
                    </div>
            
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>,
        
        document.querySelector('#modal')
    );
};

export default Modal;
