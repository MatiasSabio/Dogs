import Form from "./Form"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {allTemperaments , allDogs} from "../../Actions/actions";

function AddDog(){
    const state= useSelector(state=>state)
    const dispatch = useDispatch();
    useEffect(()=>{
        allDogs(state, dispatch)
        allTemperaments(state, dispatch)
     },[])
    return <div >
       
        {Form()}
    </div>
}
export default AddDog