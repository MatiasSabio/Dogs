import NavBar from "./NavBar/NavBar"
import {allTemperaments , allDogs} from "../../Actions/actions";
import DogCards from './Cards/DogCards'
import {useSelector, useDispatch} from 'react-redux'
import { useEffect } from "react";
import  DivFilter  from './Filter/DivFilter';
import Pages from './Pages/Pages'
import css from './home.module.css'

function Home(){    
    const state= useSelector(state=>state)
    const dispatch = useDispatch();
    useEffect(()=>{
       allDogs(state, dispatch)
       allTemperaments(state, dispatch)
    },[])

    return<div className={css.divHome}>
        {NavBar()}
        {DogCards()}        
        {DivFilter()}        
        {Pages(state,dispatch)}      
    </div>
}
export default Home