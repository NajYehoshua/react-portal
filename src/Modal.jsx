import ReactDOM from "react-dom";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  padding: "50px",
  zIndex: 1000,
  borderRadius: "4px",
  transition: "all 200ms ease-in-out",
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .7)",
  zIndex: 1000,
  transition: "all 200ms ease-in-out",
};

const Modal = ({ children, isOpen, onClose }) => {
  //! Check if isOpen is false
  if (!isOpen) return null;

  //! Return a portal
  return ReactDOM.createPortal(
    <>
      <div style={OVERLAY_STYLES}></div>
      <div style={MODAL_STYLES}>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </>,
    document.querySelector("#portal")
  );
};

export default Modal;
