import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import {
  BodyForm,
  LabelForm,
  InputForm,
  ButtonForm,
} from './ContactForm.styled';

export default function ContactForm({ addContact }) {
  const name = useSelector(state => state.contactForm.nameData);
  const number = useSelector(state => state.contactForm.numberData);
  const dispatch = useDispatch();

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        dispatch({ type: 'contactForm/setNameData', payload: value });

        break;
      case 'number':
        dispatch({ type: 'contactForm/setNumberData', payload: value });

        break;
      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    addContact({ id: nanoid(), name: name, number: number });
    resetForm();
  };

  const resetForm = () => {
    dispatch({ type: 'contactForm/setNameData', payload: '' });
    dispatch({ type: 'contactForm/setNumberData', payload: '' });
  };

  return (
    <BodyForm onSubmit={handleSubmit}>
      <LabelForm>
        Name
        <InputForm
          placeholder="Jacob Mercer"
          type="text"
          name="name"
          required
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={handleChange}
        />
      </LabelForm>
      <LabelForm>
        Number
        <InputForm
          placeholder="555-55-55"
          type="tel"
          name="number"
          required
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={handleChange}
        />
      </LabelForm>
      <ButtonForm type="submit">Add contact</ButtonForm>
    </BodyForm>
  );
}
ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
