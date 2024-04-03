import { FaPlus } from "react-icons/fa6";
import css from "./NameContact.module.css";
import { useDispatch } from "react-redux";
import ContactForm from "../ContactForm/ContactForm";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Button from '@mui/material/Button';
export default function NameContact() {
  const dispatch = useDispatch();
  const [showContactForm, setShowContactForm] = useState(false);

  const handleButtonClick = () => {
    setShowContactForm(true);
  };

  const closeContactForm = () => {
    setShowContactForm(false);
  };
  return (
    <div className={css.container}>
      <div className={css.plus}>
        <h1 className={css.heading}>CONTACTS</h1>
        <Button
          className={css.button}
          onClick={() => dispatch(handleButtonClick)}
        >
          <FaPlus style={{ fontSize: 30 }} />
        </Button>
        <Button
          className={css.button}
          onClick={() => dispatch(closeContactForm)}
        >
          <AiOutlineClose style={{ fontSize: 30 }} />
        </Button>
        </div>

      {showContactForm && <ContactForm closeContactForm={closeContactForm} />}
    </div>
  );
}
