const initState = {
  FRIENDSs: ["Shivani Singh","Vidhi Taneja","Shreyas Kaetik","Adam Teller","John Berry"],
  text: "",
  selected: undefined,
  preference:[]
};

const setPersist = FRIENDSs =>{
  window.localStorage.setItem("FRIENDSs2", JSON.stringify(FRIENDSs));
}

export const addFRIENDS = (state = initState, action) => {
  switch (action.type) {
    case "PERSIST_FRIENDSS":
      const FRIENDSs = JSON.parse(window.localStorage.getItem("FRIENDSs2"));
      return { ...state, FRIENDSs: FRIENDSs ? FRIENDSs : [] };
    case "ADD_TEXT":
      return { ...state, text: action.payload };
    case "ADD_FRIENDS":
      const FRIENDSs2 = state.FRIENDSs.concat(action.payload);
      window.localStorage.setItem("FRIENDSs2", JSON.stringify(FRIENDSs2));
      return { ...state, FRIENDSs: FRIENDSs2, text: "" };
    case "DELETE_FRIENDS":
      const FRIENDS3 = state.FRIENDSs.filter((FRIENDS, i) => i !== action.payload);
      setPersist(FRIENDS3);
      return {
        ...state,
        FRIENDSs: FRIENDS3
      };
    case "EDIT_FRIENDS":
      return {
        ...state,
        text: state.FRIENDSs[action.payload],
        selected: action.payload
      };
      case "PREFERENCE_FRIENDS":
        return {
          ...state,
          preference:state.preference.concat(action.payload)
        };
        case "REMPREFERENCE_FRIENDS":
          const preFRIENDS3 = state.preference.splice(action.payload,1);
          return {
            ...state,
            preference:preFRIENDS3
          };
    case "EDIT_ADD_FRIENDS":
      const FRIENDS4 = state.FRIENDSs.map((FRIENDS, i) =>
        i !== action.payload.selected ? FRIENDS : action.payload.value
      );
      setPersist(FRIENDS4);
      return {
        ...state,
        FRIENDSs: FRIENDS4,
        selected: undefined,
        text: ""
      };
    case "DELETE_ALL":
      setPersist([]);
      return { ...state, FRIENDSs: [], text: "" };
    default:
      return state;
  }
};
