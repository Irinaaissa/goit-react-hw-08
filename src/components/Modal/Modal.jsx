import { useDispatch } from "react-redux";
import css from "./Modal.module.css";
import { useState } from "react";
import { deleteContact } from "../../redux/contacts/operations";
//
export default function Modal() {
  const dispatch = useDispatch();
  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
  };

  // const handleCloseModal = () => {
    // dispatch(closeContactForm);
  // };

  const [showModal, setShowModal] = useState(false);
  const handleButtonClick = () => {
  showModal(true);
    };
    const closeContactForm = () => {
  setShowModal(false);
    };

  return (
    <div className={css.fixedOverlay}>
      <div className={css.modal}>
        <div className={css.modalContainer}>
          <p> Are you sure you want to delete the contact?</p>
          <button
            className={css.btn}
            onClick={() => dispatch(handleDeleteContact())}
          >
            Delete
          </button>
          <button type="submit" onClick={() => dispatch(closeContactForm())}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
