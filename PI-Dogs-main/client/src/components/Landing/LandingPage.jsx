import {allTemperaments , allDogs} from "../../Actions/actions";
import  {  useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import css from './Landing.module.css'



function LandingPage(){    
    const dogs= useSelector(state=>state?.allDogs)
    const temp= useSelector(state=>state?.allTemperaments)
    const dispatch = useDispatch();
     
useEffect(()=>{
    allDogs(dogs?.length&&dogs, dispatch)
    allTemperaments(temp?.length&&temp, dispatch)
},[])
    return <div className={css.container}>
        <div className={css.DivGrid} >
        <div className={css.Text}>Welcome to <a className={css.Go} href='http://localhost:3000/home'>DOGS!</a></div>
        <div ><a className={css.Go} href='http://localhost:3000/home'>find your favorite breed >>></a></div>  
            
        </div>
        </div>
}
export default LandingPage