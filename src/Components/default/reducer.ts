const initialState = {
  value: 0,
};
interface Iaction {
  type: string
}
function getReducer(state = initialState, action: Iaction) {
  switch(action.type) {
    case 'GETCATEGORIES':
      return { ...state, value: state.value + 1 };
    case 'GETPOSTS':
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
}

export default getReducer;