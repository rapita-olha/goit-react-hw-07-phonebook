import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/add');
// console.log(addContact('ir', 18));

export const deleteContact = createAction('contacts/delete');
