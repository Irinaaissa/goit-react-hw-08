import css from "./Contact.module.css";
import { FaPhone } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import { useState } from "react";
import * as React from 'react';
// import Button from '@mui/material/Button';
import Modal from "../Modal/Modal";

export default function Contact({ item: { name, number, id } }) {
  // const dispatch = useDispatch();
  //
  const [isModalActive, setModalActive] = useState(false);
  // const [userId,setUserId] = useState("");
  //
  const handleModalOpen = () => {
    // setUserId(id);
    setModalActive(true);
  };
  const handleModalClose = () => {
    setModalActive(false);
  };

  return (
    <div className={css.contactCard}>
      <div>
        <p className={css.info}>
          <span className={css.iconWrapper}>
            <IoPersonSharp />
          </span>
          {name}{" "}
        </p>
        <p className={css.info}>
          <span className={css.iconWrapper}>
            <FaPhone />
          </span>{" "}
          {number}
        </p>
      </div>
      {/* <button className="button" type="button" onClick={handleModalOpen}> */}
      {/* open modal */}
      {/* </button> */}
      <button className={css.btn} type="button" onClick={handleModalOpen}>
        Delete
      </button>
      {/* <button className={css.btn} type="button"> */}
        {/* Edit */}
      {/* </button> */}
      {/* <button className={css.btn} onClick={() => dispatch(deleteContact(id))}> */}
      {/* Delete */}
      {/* </button> */}
      <div>
        {isModalActive && (
          <Modal handleModalClose={handleModalClose} userId={id} />
        )}
      </div>
    </div>
  );
}
