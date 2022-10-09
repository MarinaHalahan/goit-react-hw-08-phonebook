import { createSlice } from '@reduxjs/toolkit';

import { fetchContacts } from './operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
  // extraReducers: {
  //   addContacts: {
  //     reducer(state, action) {
  //       console.log(state.contacts);
  //       state.push(action.payload);
  //     },
  //     prepare({ name, number }) {
  //       return {
  //         payload: {
  //           id: nanoid(10),
  //           name,
  //           number,
  //         },
  //       };
  //     },
  //   },
  //   deleteContacts(state, action) {
  //     return state.filter(contact => contact.id !== action.payload);
  //   },
  // },
});

export const { addContacts, deleteContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
