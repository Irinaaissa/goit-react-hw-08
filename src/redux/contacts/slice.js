import { createSlice,createSelector } from "@reduxjs/toolkit";
import { fetchContacts, deleteContact,addContact } from "./operations";
import { logOut } from "../auth/operations";
// import { selectContacts } from "./selectors";
// import { selectNameFilter} from "../filters/selectors";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
     items: [], 
     loading: false,
      error: null },
  extraReducers: (builder) =>
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
      
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(deleteContact .pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, (state, action) => {
        console.log(action);
        state.error = true;
        state.loading = false;
      })
      .addCase(addContact .pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        console.log(action);
        state.error = true;
        state.loading = false;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.items = [];
        state.loading = false;
        state.error = null;
      })
      ,
});

export const contactsReducer = contactsSlice.reducer;

// export const selectFilteredContacts = createSelector([selectContacts,selectNameFilter],
  // (contacts,nameFilter)=>{
    // return contacts.filter(contact =>contact.name.toLowerCase().includes(nameFilter.toLowerCase())&&contact.number.includes(nameFilter))
  // });
  // export const selectFilteredNumber = createSelector([selectContacts,selectNumberFilter],
    // (contacts,numberFilter)=>{
      // return contacts.filter(contact =>contact.number.toString().includes(numberFilter.toString()))
    // });