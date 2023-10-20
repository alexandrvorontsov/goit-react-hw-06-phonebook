const INITIAL_STATE = {
  contactsData: [],
  filter: '',
  isDelete: false,
  isCreate: false,
};

export const contactListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'contactList/setContacts': {
      return {
        ...state,
        contactsData: action.payload,
      };
    }
    case 'contactList/setFilter': {
      return {
        ...state,
        filter: action.payload,
      };
    }
    case 'contactList/setIsDelete': {
      return {
        ...state,
        isDelete: action.payload,
      };
    }
    case 'contactList/setIsCreateData': {
      return {
        ...state,
        isCreate: action.payload,
      };
    }
    case 'contactList/addContact': {
      return {
        ...state,
        contactsData: [...state.contactsData, action.payload],
      };
    }
    case 'contactList/deleteContact': {
      return {
        ...state,
        contactsData: state.contactsData.filter(
          contact => contact.id !== action.payload
        ),
      };
    }
    default:
      return state;
  }
};
