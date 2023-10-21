const { createSlice } = require('@reduxjs/toolkit');

const INITIAL_STATE = {
  contactsData: [],
  filterData: '',
  isDelete: false,
  isCreate: false,
};

const contactListSlice = createSlice({
  name: 'contacts',
  // початковій стан
  initialState: INITIAL_STATE,
  //обєкт редюсерів
  reducers: {
    setContacts(state, action) {
      state.contactsData = action.payload;
    },
    setFilter(state, action) {
      state.filterData = action.payload;
    },
    setIsDelete(state, action) {
      state.isDelete = action.payload;
    },
    setIsCreate(state, action) {
      state.isCreate = action.payload;
    },
    createContact(state, action) {
      state.contactsData = [...state.contactsData, action.payload];
    },
    deleteContact(state, action) {
      const deleteContactIndex = state.contactsData.findIndex(
        contact => contact.id === action.payload
      );
      state.contactsData.splice(deleteContactIndex, 1);
      //   state.contactsData = state.contactsData.filter(
      //     contact => contact.id !== action.payload
      //   );
    },
  },
});

//генератор екшенів
export const {
  setContacts,
  setFilter,
  setIsDelete,
  setIsCreate,
  createContact,
  deleteContact,
} = contactListSlice.actions;

// редюсер слайсу
export const contactListReducer = contactListSlice.reducer;

// export const contactListReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case 'contactList/setContacts': {
//       return {
//         ...state,
//         contactsData: action.payload,
//       };
//     }
//     case 'contactList/setFilter': {
//       return {
//         ...state,
//         filterData: action.payload,
//       };
//     }
//     case 'contactList/setIsDelete': {
//       return {
//         ...state,
//         isDelete: action.payload,
//       };
//     }
//     case 'contactList/setIsCreate': {
//       return {
//         ...state,
//         isCreate: action.payload,
//       };
//     }
//     case 'contactList/createContact': {
//       return {
//         ...state,
//         contactsData: [...state.contactsData, action.payload],
//       };
//     }
//     case 'contactList/deleteContact': {
//       return {
//         ...state,
//         contactsData: state.contactsData.filter(
//           contact => contact.id !== action.payload
//         ),
//       };
//     }
//     default:
//       return state;
//   }
// };

// export const setContacts = payload => {
//   return {
//     type: 'contactList/setContacts',
//     payload,
//   };
// };

// export const setFilter = payload => {
//   return {
//     type: 'contactList/setFilter',
//     payload,
//   };
// };

// export const setIsDelete = payload => {
//   return {
//     type: 'contactList/setIsDelete',
//     payload,
//   };
// };

// export const setIsCreate = payload => {
//   return {
//     type: 'contactList/setIsCreate',
//     payload,
//   };
// };

// export const createContact = payload => {
//   return {
//     type: 'contactList/createContact',
//     payload,
//   };
// };

// export const deleteContact = payload => {
//   return {
//     type: 'contactList/deleteContact',
//     payload,
//   };
// };
