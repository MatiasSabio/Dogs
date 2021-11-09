
import {setPageSelect} from '../../../Actions/actions'
import pages from './Pages.module.css'

export default function Pages(state, dispatch) {
   const pag= state?.pagSelect
   const maxPag = Math.ceil((state?.renderDogs.length)/8)  
  function select(pag) {
    dispatch(setPageSelect(pag))
  }
  let arrPag= [];
  for(let i = 1; i <= maxPag ; i++){       
      arrPag.push(i)
   }   
  
//   return <button onClick={()=>select(i)}>{i}</button>
 
return <div className={pages.div}>
    {pag>1&&<button className={pages.prev} onClick={()=>select(pag-1)}>prev</button>}
    {arrPag.length>0&&arrPag.map(p=><button className={pages.btns} onClick={()=>select(p)}>{p}</button>)}
    {pag<maxPag && <button className={pages.next} onClick={()=>select(pag+1)}>next</button>}
    
</div>
   
}