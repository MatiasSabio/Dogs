import {  useState  } from "react";
import {useSelector, useDispatch} from 'react-redux'
import {setQueryDogs, setDogsFiltered} from '../../../Actions/actions'
import fil from './filterCss/filter.module.css'
export default function DivFilter(){
const state= useSelector((state)=>state);
const temperaments = state?.allTemperaments
const dispatch = useDispatch();
const [alphaFilter, setAlpha] = useState('Alphabetic');
const [weightFilter, setWeight] = useState('Weight');
const [temperamentFilter, setTemperament] = useState([]);
const [name, setName] = useState('');

function search(){
    return( 
        dispatch(setQueryDogs(name, state, dispatch)),
        setName('')
        )
}
function submit (){
   return  dispatch(
    setDogsFiltered({
        alpha:alphaFilter,
        weight:weightFilter,
        temperament:temperamentFilter
    },
    state,
    dispatch
    )             
    ),       
        setAlpha('Alphabetic'),
        setWeight('Weight'),
        setTemperament([])
}
// const [btnf,setBtnf]= useState({});
var fixed = function(name){
    return temperamentFilter.includes(name)         
}

function changeTemperaments(targetCheck){
    
    let TempCheck = [...temperamentFilter]
   if(TempCheck.find(e=>e===targetCheck)){
    TempCheck = TempCheck.filter((f)=>f!==targetCheck)
    setTemperament(TempCheck)   
   }else{
    TempCheck.push(targetCheck)
    setTemperament(TempCheck )
   }
}

function changeAlpha(){
    switch (alphaFilter) {
        case 'Alphabetic':
            setAlpha('a-z')
            break;
        case 'a-z':
            setAlpha('z-a')
                break;
        case 'z-a':
            setAlpha('Alphabetic')
                break;        
    }
}
function changeWeight(){
    switch (weightFilter) {
        case 'Weight':
            setWeight('min-max')
            break;
        case 'min-max':
            setWeight('max-min')
                break;
        case 'max-min':
            setWeight('Weight')
                break;        
    }
}
function changeName(event) {
    setName(event)
}
console.log(temperamentFilter);


  
return<div className={fil.divFilter} > 
<div className={fil.divBar}><input type="text" placeholder='breed...' className={fil.text} onChange={(e)=>changeName(e.target.value)}/><input className={fil.searchBtn} type="button" value='search' onClick={()=>search()} /></div>      
       <div className={fil.divBtns} >
            
            <button className={fil.btnAW} key ='1' type="button" value="Alphabetic"  onClick={()=>changeAlpha()}>{alphaFilter}</button>            
            <button className={fil.btnAW} key ='2' type="button" value="Weight"  onClick={()=>changeWeight()}>{weightFilter}</button>
        </div>
        

            <div className={fil.divTemp}>{temperaments?.map(t=>{ 
               
                return <button  onClick={()=>changeTemperaments(t.name)} className={ fixed(t.name) ? fil.pillsClicked : fil.pills}  >{t.name}</button>                  
                    })
                    }
            </div>
            <button  className={fil.filterBtn} key ='3' type="button" value="filter"  onClick={()=>submit()}>Filter</button>          
        
     </div>


}