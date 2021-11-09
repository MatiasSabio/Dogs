import { NavLink} from "react-router-dom";
import css from './NavBar.module.css'
// import {useRouteMatch} from "react-router"



function NavBar(){
//    const match = useRouteMatch(); 
//    const path = match.path
    return(
        <div className={css.container} >            
            <NavLink to="/home" className={css.none} >
            <button className={css.home}  >
                DOGS!
            </button> 
            </NavLink>                       
            <div className={css.addAbout} >
            <NavLink to="/home/AddDog" className={css.add}>Add</NavLink>            
            <NavLink to="/About" className={css.about}>About</NavLink>
            </div>            
        </div>
    )
}
export default NavBar