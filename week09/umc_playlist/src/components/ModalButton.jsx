import { useDispatch } from "react-redux";
import { clearCart } from "../features/cartSlice";
import { closeModal } from "../features/modalSlice";

const ModalButton = () => {
    const dispatch = useDispatch();
    return(
        <div className="btn-container">
            <button type="button" className="btn confirm-btn" onClick={() => {
                dispatch(clearCart());
                dispatch(closeModal());
            }}>
                네
            </button>
            <button type="button" className="btn clear-btn" onClick={() => {
                dispatch(closeModal());
            }}>
                아니요
            </button>
        </div>
    );
};

export default ModalButton;