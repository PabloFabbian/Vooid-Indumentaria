import React from 'react';

const BaseModal = ({
    children,
    isOpen,
    onClose,
    className = '',
    overlayClassName = 'bg-black/75 backdrop-blur-sm'
}) => {
    if (!isOpen) return null;

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto ${overlayClassName}`}
            onClick={onClose}
        >
            <div
                className={`relative ${className}`}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

export default BaseModal;