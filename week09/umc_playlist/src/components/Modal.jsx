import ModalButton from "./ModalButton";

const Modal = () => {
    return (
        <aside className="modal-container" onClick={(e) => {}}>
            <div className="modal">
                {children}
                <ModalButton />
            </div>
        </aside>
    );
};

export default Modal;