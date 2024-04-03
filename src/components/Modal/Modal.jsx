import { useDispatch } from "react-redux";
import css from "./Modal.module.css";
// import { useState } from "react";
import { deleteContact } from "../../redux/contacts/operations";
import { message } from "../Toaster/Toaster";

export default function Modal({ handleModalClose, userId }) {
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContact(userId));
    handleModalClose();
    message ();
  };
  const handleCloseModal = () => {
    handleModalClose();
  };

  return (
    <div className={css.fixedOverlay}>
      <div className={css.modal}>
        <div className={css.modalContainer}>
          <p className={css.text}>
            {" "}
            Are you sure you want to delete the contact?
          </p>
          <div className={css.button}>
            <button className={css.btn} onClick={handleDeleteContact} >
              Delete
            </button>
            <button
              className={css.btn}
              type="button"
              onClick={handleCloseModal}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
