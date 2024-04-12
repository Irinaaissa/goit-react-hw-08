import css from "./Contact.module.css";
import { FaPhone } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import { useState } from "react";
import * as React from "react";
import Modal from "../Modal/Modal";

export default function Contact({ item: { name, number, id } }) {
  const [isModalActive, setModalActive] = useState(false);

  const handleModalOpen = () => {
    setModalActive(true);
  };
  const handleModalClose = () => {
    setModalActive(false);
  };

  return (
    <div className={css.contactCard}>
      <div className={css.contact}>
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
      <div>
        <button className={css.btn} type="button" onClick={handleModalOpen}>
          Delete
        </button>
      </div>

      <div>
        {isModalActive && (
          <Modal handleModalClose={handleModalClose} userId={id} />
        )}
      </div>
    </div>
  );
}
