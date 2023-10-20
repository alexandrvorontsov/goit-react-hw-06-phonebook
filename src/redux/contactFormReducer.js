const INITIAL_STATE = {
  nameData: '',
  numberData: '',
};

export const contactFormReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'contactForm/setNameData': {
      return {
        ...state,
        nameData: action.payload,
      };
    }
    case 'contactForm/setNumberData': {
      return {
        ...state,
        numberData: action.payload,
      };
    }
    default:
      return state;
  }
};
