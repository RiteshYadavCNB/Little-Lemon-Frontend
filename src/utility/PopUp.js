import './PopUp.css'

const PopUp = ({isOpen, onClose, children}) => {
    if (!isOpen) return null;
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>Close</button>
                {children}
            </div>
        </div>
    );
}

export default PopUp;