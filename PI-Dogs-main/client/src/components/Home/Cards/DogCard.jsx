import card from './cardsCss/card.module.css'

var DogCard = function (name, img, weight, temperament) {
    return (

      <div className={card.container} >
        <h3 id='h3'className={card.name}>{name}</h3>
        <img  className={card.img} src={img} alt="img not found" />
        <p className={card.weight} >weight :{` ${weight}`} kg</p>
        <span className={card.divPills} >{temperament?.map(t=>{
          return <div className={card.pills} >
            {t}
          </div>
        })}</span>
      </div>
    );
  };
  export default DogCard;