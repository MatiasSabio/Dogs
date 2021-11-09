import axios from "axios";

export function allDogs(dogs, dispatch) {
  !dogs?.length &&
    axios.get("http://localhost:3001/dogs")    
    .then((res) => {
      dispatch(setRenderDogs(res.data));
      dispatch(setAllDogs(res.data));
    });
}
export function allTemperaments(temp, dispatch) {
  !temp?.length &&
    axios.get("http://localhost:3001/temperaments")
    .then(res=>alphaOrder('a-z',res.data))
    .then((res) => {
      dispatch(setTemperaments(res));
    });
}

function temperament(temp, dogs) {
  if (!temp?.length) return dogs;
  else {
    //while o recursivo con el length del temp
    for (let i = 0; i < temp.length; i++) {
      dogs = dogs.filter((dog) => dog.temperament.includes(temp[i]));      
    }
    
    return dogs;
  }
}
function weightOrder(weight, dogs) {
  if (weight === "min-max") {
    //
    dogs.sort((a, b) => {
      let first =
        parseInt(a.weight.slice(0, 2)) +
        parseInt(a.weight.slice(a.weight.length - 2, a.weight.length));
      let second =
        parseInt(b.weight.slice(0, 2)) +
        parseInt(b.weight.slice(b.weight.length - 2, b.weight.length));

      if (first > second) return 1;
      if (first < second) return -1;
      return 0;
    });
  }
  if (weight === "max-min") {
    dogs.sort((a, b) => {
      let first =
        parseInt(a.weight.slice(0, 2)) +
        parseInt(a.weight.slice(a.weight.length - 2, a.weight.length));
      let second =
        parseInt(b.weight.slice(0, 2)) +
        parseInt(b.weight.slice(b.weight.length - 2, b.weight.length));
      if (first < second) return 1;
      if (first > second) return -1;
      return 0;
    });
  }
  return dogs;
}
function alphaOrder(alpha, dogs) {  
  if (alpha === "a-z") {
    dogs.sort((a, b) => {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
      return 0;
    });
  }
  if (alpha === "z-a") {
    dogs.sort((a, b) => {
      if (a.name > b.name) return -1;
      if (a.name < b.name) return 1;
      return 0;
    });
  }
  return dogs;
}
export function filterDogs(params, dogsToFilter) {
  //params ={
  //          alpha=''||'a-z'||'z-a,
  //          weight=''||'nim-max'||'max-min',
  //          temperaments=[]||[con strings]
  //         }||'x'
  let dogsFilterTemp = temperament(params.temperament, dogsToFilter);
  let dogsFilterWeight = weightOrder(params.weight, dogsFilterTemp);
  let dogsFiltered = alphaOrder(params.alpha, dogsFilterWeight);
  return dogsFiltered;
}
function dogsFiltered(params, state, dispatch) {
  //params ={
  //          alpha=''||'a-z'||'z-a,
  //          weight=''||'nim-max'||'max-min',
  //          temperaments=[]||[con strings]
  //         }||'x'

  if (params === "x") {
    if (state.NameQueryDogs.length) {
      dispatch(setRenderDogs(state.NameQueryDogs));
      return state.allDogs;
    } else {
      dispatch(setRenderDogs(state.allDogs));
      return state.allDogs;
    }
  } else {
    let dogs = filterDogs(params, state?.allDogs);
    if (state?.NameQueryDogs.length) {
      let dogsFilter = filterDogs(params, state?.NameQueryDogs);
      dispatch(setRenderDogs(dogsFilter));
      return dogs;
    } else {
      dispatch(setRenderDogs(dogs));
      return dogs;
    }
  }
}
export function queryNameDogs(name, state, dispatch) {
  console.log("state", state);
  if (name === "x") {
    if (state?.filteredDogs.length) {
      dispatch(setRenderDogs(state?.filteredDogs));
      return state?.allDogs;
    } else {
      dispatch(setRenderDogs(state?.allDogs));
      return state?.allDogs;
    }
  } else {
    let dogs = state?.allDogs.filter((dog) =>
      dog.name.toLowerCase().includes(name.toLowerCase())
    );
    console.log("pug ", state?.allDogs);
    if (state?.filteredDogs.length) {
      let dogsFilter = state.filteredDogs.filter((dog) =>
        dog.name.toLowerCase().includes(name.toLowerCase())
      );
      dispatch(setRenderDogs(dogsFilter));
      return dogs;
    } else {
      dispatch(setRenderDogs(dogs));
      return dogs;
    }
  }
}

export function setAlphaOrder(state) {
  return {
    type: "SET_ALPHA",
    payload: state,
  };
}
export function setWeightOrder(state) {
  return {
    type: "SET_WEIGHT",
    payload: state,
  };
}
export function setRenderDogs(dogs) {
  return {
    type: "SET_RENDER_DOGS",
    payload: dogs,
  };
}
export function setAllDogs(dogs) {
  return {
    type: "SET_DOGS",
    payload: dogs,
  };
}

export function setQueryDogs(name, state, dispatch) {
  //si llega 'x' borrar array o llenarlo con allDogs, si llega un name llegar array con ese name
  let dogs = queryNameDogs(name, state, dispatch);
  return {
    type: "SET_QUERY_DOGS",
    payload: dogs,
  };
  //   axios.get(`http://localhost:3001/dogs?name=${name}`).then((response) => {
  //     let dogs;
  //     return (dogs = response);
  //   });
  //   return {
  //     type: "SET_QUERY_DOGS",
  //     payload: dogs,
  //   };
}
export function setDogDetail(dogDetail) {
  return {
    type: "SET_DOG_DETAIL",
    payload: dogDetail,
  };
}
export function setDogsFiltered(params, state, dispatch) {
  let dogs = dogsFiltered(params, state, dispatch);
  return {
    type: "SET_FILTERED_DOGS",
    payload: dogs,
  };
}
export function setFavouritesTemperaments(favTemp) {
  return {
    type: "SET_FAVOURITES_TEMPERAMENTS",
    payload: favTemp,
  };
}
export function setTemperaments(temperaments) {
  temperaments = temperaments.sort((a,b)=>{
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  })
  return {
    type: "SET_TEMPERAMENTS",
    payload: temperaments,
  };
}
export function setPageSelect(pag) {
  return {
    type: "PAG_SELECT",
    payload: pag,
  };
}
