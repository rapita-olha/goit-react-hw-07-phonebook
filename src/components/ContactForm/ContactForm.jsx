import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/contacts-operations";
import { getContacts } from "../../redux/contacts/contacts-selectors";

import s from "./ContactForm.module.scss";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  // для всех инпутов ввод данных
  const handleInputChange = ({ currentTarget: { name, value } }) => {
    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleBtnSubmit = (e) => {
    e.preventDefault();

    if (name === "" && number === "") {
      return alert("Empty");
    }

    contacts.some(
      (contact) =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number === number
    )
      ? alert(`${name} is already in contacts.`)
      : dispatch(addContact({ name, number }));
    reset();
  };

  const reset = () => {
    setNumber("");
    setName("");
  };

  return (
    <form onSubmit={handleBtnSubmit} className={s.form} autoComplete="off">
      <label className={s.label}>
        Name
        <input
          autoFocus
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          className={s.input}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Імя може містти лиш букви, апостроф, тире та пропуски. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label className={s.label}>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleInputChange}
          className={s.number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефону повинен містити цифри, попуски, тире, і може починатись з начинаться +"
          required
        />
      </label>

      <button type="submit" className={s.btn}>
        Add contact
      </button>
    </form>
  );
}
