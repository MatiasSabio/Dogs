const initialState = {
  allDogs: [],
  renderDogs: [],
  NameQueryDogs: [],
  stateAlpha: "",
  stateWeight: "",
  dogDetail: {},
  filteredDogs: [],//aca voy a hacer los filtros, dependiendo que tenga en alpha weight y FavTemp
  favoritesTemperaments: [],
  allTemperaments: [],
  pagSelect:1
};
function rootReducer(state = initialState, action) {
  if (action.type === "SET_DOGS") {
    return {
      ...state,
      allDogs: action.payload,
    };
  }
  if (action.type === "SET_RENDER_DOGS") {
    return {
      ...state,
      renderDogs: action.payload,
    };
  }
  if (action.type === "SET_QUERY_DOGS") {
    return {
      ...state,
      NameQueryDogs: action.payload,
    };
  }
  if (action.type === "SET_DOG_DETAIL") {
    return {
      ...state,
      dogDetail: action.payload,
    };
  }
  if (action.type === "SET_FILTERED_DOGS") {
    return {
      ...state,
      filteredDogs: action.payload,
    };
  }
  if (action.type === "SET_FAVOURITES_TEMPERAMENTS") {
    return {
      ...state,
      favoritesTemperaments: action.payload,
    };
  }
  if (action.type === "SET_TEMPERAMENTS") {
    return {
      ...state,
      allTemperaments: action.payload,
    };
  }
  if (action.type === "SET_ALPHA") {
    return {
      ...state,
      stateAlpha: action.payload,
    };
  }
  if (action.type === "SET_WEIGHT") {
    return {
      ...state,
      stateWeight: action.payload,
    };
  }
  if (action.type === "PAG_SELECT") {
    return {
      ...state,
      pagSelect: action.payload,
    };
  }
}

export default rootReducer;
