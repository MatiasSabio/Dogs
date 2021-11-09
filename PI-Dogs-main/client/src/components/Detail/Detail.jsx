import {useSelector } from 'react-redux'
import NavBar from '../Home/NavBar/NavBar';
import det from './Detail.module.css'


function Detail(){
    const state = useSelector(state=>state)
    const dogDetail= state?.dogDetail;
    
    return<div className={det.container}>
        {/* <div><a href="/Home">Dogs!</a><a href="/About">About</a></div> */}
{NavBar()}
<div className={det.card}>
    <div >
        <div className={det.name}>{` ${dogDetail.name}`}</div>
        <img className={det.img} src={`${dogDetail.image}`} alt="" />
    </div>
    <div className={det.divDet} >
        <div className={det.divItem}>
            <p className={det.title}>Weight :</p> <p className={det.content}>{` ${dogDetail.weight}`} kg</p>
        </div>
        <div className={det.divItem}>
            <p className={det.title}>Height :</p>  <p className={det.content}>{` ${dogDetail.height}`} cm</p>
        </div>
        <div className={det.divItem}>
            <p className={det.title}>Life Span :</p> <p className={det.content}>{` ${dogDetail.life_span}`}</p>
        </div>
        <div className={det.divTemp}>
            <p className={det.titleTemp}>Temperaments :</p> <span className={det.spanPills}>{dogDetail.temperament.map(t=><div className={det.pills}>{t}</div>)}</span> 
        </div>
    </div>
</div>   
</div>
}
export default Detail