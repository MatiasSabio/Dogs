import { NavLink} from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux';
import DogCard from "./DogCard"
import {setDogDetail} from '../../../Actions/actions'
import cards from './cardsCss/cards.module.css'

//importar filtrado y paginado
var DogCards = function () {   
    const renderDogs = useSelector((state)=>state?.renderDogs);    
    const pag= useSelector((state)=>state?.pagSelect);
    const stateDogs= renderDogs?.slice(8*(pag-1),(8*(pag-1))+8)
    const dispatch =useDispatch()

  const SendDetail= function (dog) {
   dispatch(setDogDetail(dog)) 
  }
  return (    
  <div className={cards.div} >    
      {stateDogs?.map(dog=>{ 
          
        return(
        <NavLink  to={`/home/detail`} style={{ textDecoration: 'none' }} >
          <button  className={cards.card} onClick={()=>SendDetail(dog)}>
          {DogCard(dog.name, dog.image, dog.weight, dog.temperament)} 
            </button>                  
       </NavLink>)
  })}  
  </div>)

};
export default DogCards;