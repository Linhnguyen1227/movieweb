import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './Modal.scss';

function Modal(props) {
    const [active, setActive] = useState(false);

    useEffect(() => {
        setActive(props.active);
    }, [props.active]);
    return (
        <div id={props.id} className={`modal ${active ? 'active' : ''}`}>
            {props.children}
        </div>
    );
}
Modal.propTypes = {
    active: PropTypes.bool,
    id: PropTypes.string,
};
export const ModalContent = (props) => {
    const contentRef = useRef(null);
    const closeModal = () => {
        contentRef.current.parentNode.classList.remove('active');
        if (props.onClose) props.onClose();
    };
    return (
        <div className="modal_content" ref={contentRef}>
            <div className="modal_content_close" onClick={closeModal}>
                <i className="bx bx-x"></i>
            </div>
            {props.children}
        </div>
    );
};
ModalContent.propTypes = {
    onClose: PropTypes.func,
};
export default Modal;
