import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

export default function Modal({ title, message, onClose, children }) {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div className="modal-backdrop">
      <div className="modal" ref={modalRef}>
        {title && <h2 className="modal-title">{title}</h2>}
        {message && <p className="modal-message">{String(message)}</p>}
        {children}
        <button onClick={onClose} className="modal-close-button">
          Close
        </button>
      </div>
    </div>
  );
}

Modal.propTypes = {
  title: PropTypes.string,
  message: PropTypes.any,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};
