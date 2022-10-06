import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://6187f432057b9b00177f9b5a.mockapi.io/api/v1";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async () => {
    const { data } = await axios.get("/contacts");
    return data;
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact) => {
    const { data } = await axios.post("/contacts", contact);
    return data;
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId) => {
    const {
      data: { id },
    } = await axios.delete(`/contacts/${contactId}`);

    return id;
  }
);
