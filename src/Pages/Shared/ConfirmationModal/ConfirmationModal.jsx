import React from 'react';

const ConfirmationModal = ({ title, message, successButtonName,closaModal, successAction, modalData }) => {
    return (
        <div>
            <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label 
                        onClick={() => successAction(modalData)}
                         htmlFor="confirmation-modal" className="btn">{successButtonName}</label>
                        <button onClick={closaModal} className='btn btn-outline'>cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;