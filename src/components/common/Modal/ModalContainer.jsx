import React from 'react';

const ModalContainer = ({ children, onClose }) => {
    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4"
            onClick={onClose}
        >
            {children}
        </div>
    );
};

export default ModalContainer;