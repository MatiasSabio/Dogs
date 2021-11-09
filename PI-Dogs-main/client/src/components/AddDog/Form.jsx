
import { useState } from "react";
import axios from "axios";
import add from "./Add.module.css";
import NameImg from "./NameImg.module.css";
import num from "./Numbers.module.css";
import { useSelector } from "react-redux";
import temp from "./Temperaments.module.css"
import btn from './Btn.module.css'
import { useHistory } from "react-router";


export default function Form() {
  const history = useHistory()
    const temperaments = useSelector(state=>state?.allTemperaments)
  const validate = function (input) {
    var obj = {};
    if (!input.name) {
      obj.username = "name is required";
    }
    // else if(!/\S+@\S+\.\S+/.test(input.username)){
    //   obj.username ='Username is invalid';
    // }
    if (!input.score) {
      obj.password = "score is required";
    }
    // else if(!/(?=.*[0-9])/.test(input.password)){
    //   obj.password ='Password is invalid';
    // }
    return obj;
  };
  const [error, setError] = useState({
    name: "",
    weightA: 0,
    weightB: 0,
    heightA: 0,
    heightB: 0,
    life_spanA: 0,
    life_spanB: 0,
    image: "",   
    
  });
  const [input, setInput] = useState({
    name: "",
    weightA: 0,
    weightB: 0,
    heightA: 0,
    heightB: 0,
    life_spanA: 0,
    life_spanB: 0,
    image: "",   
    
  });

  function inputText(event) {
    const acinput = { ...input, [event.target.name]: event.target.value };
    setInput(acinput);
    setError(validate(acinput));
    // setError(validate({...input, [event.target.name]: event.target.value}));
  }
  const [tempFilter, setTemp] = useState([]);
  function changeTemp(e , targetCheck) {
    e.preventDefault();
    let tempCheck = [...tempFilter];
    if (tempCheck.find((e) => e === targetCheck)) {
        tempCheck = tempCheck.filter((f) => f !== targetCheck);
        setTemp(tempCheck);
    } else {
        tempCheck.push(targetCheck);
      setTemp(tempCheck);
    }
  }
  
  function postDog(e) {
    e.preventDefault()
    let dogAdd = {      
      name:input.name,
      weight:`${input.weightA} - ${input.weightB}`,
      height:`${input.heightA} - ${input.heightB}`,
      life_span:`${input.life_spanA} - ${input.life_spanB} years`,
      image:input.image,
      temperaments: tempFilter,
    };
    console.log('dog ' ,dogAdd);
    axios
      .post("http://localhost:3001/addDog", dogAdd)     
      .then(res=>console.log(res))
      .catch((err) => console.log(err));
      history.push('/home')
  }
  console.log('temperamentos a filtrar: ', tempFilter);
  let count =0;
  return (
  <div className={add.divContainer}>
    <div className={add.navBar}>
    <a className={add.home} href="/home">Dogs!</a>
        <a className={add.about} href="/About">About</a>
    </div>
    
      <form className={add.FormContainer}>       
      <div className={NameImg.nameImage}>
        <input
          className={NameImg.name}
          placeholder="name..."
          name="name"
          value={input.name}
          type="text"
          onChange={inputText}
        />
        {error.name && <p className="danger">{error.name}</p>}
        <input
          className={NameImg.img}
          name="image"
          placeholder="image address..."
          value={input.image}
          type="text"
          onChange={inputText}
        />
        <div className={input.image ? NameImg.imageDiv : NameImg.noneimg}>
          <img
            className={NameImg.image}
            src={`${input.image}`}
            alt="img not found"
          />
        </div>
      </div>
      <div className={num.numbersDiv}>
        <div className={num.divIn}>
        <label className={num.Lbl}>Weight:</label>
        <div className={num.min}>
          <p className={num.text}>min</p>
          <div className={num.divInput}>
          <input
          className={num.input}        
          name="weightA"        
          value={input.weightA}
          type="number"
          onChange={inputText}
        />
        <p>kg.</p>
          </div>
          
        </div>
        
         <div className={num.max} >
          <p className={num.text}>max</p>
          <div className={num.divInput}> 
            <input
          className={num.input}        
          name="weightB"        
          value={input.weightB}
          type="number"
          onChange={inputText}
        />
        <p>kg</p>
          </div>
         
          
        </div>

        
        </div>
        <div className={num.divIn}>
        <label className={num.Lbl}>Height:</label>
        <div className={num.min}>
          <p className={num.text}>min</p>
          <div className={num.divInput}>
          <input
          className={num.input}
          name="heightA"
          value={input.heightA}
          type="number"
          onChange={inputText}
        />
            <p>cm.</p>
          </div>
         
          
        </div>
        
        <div className={num.max}>
          <p className={num.text}>max</p>
          <div className={num.divInput}>
          <input
          className={num.input}
          name="heightB"
          value={input.heightB}
          type="number"
          onChange={inputText}
        />
            <p>cm.</p>
          </div>
          
        </div>
        
        </div>      
        <div className={num.divIn}>
        <label className={num.Lbl}>Life Span:</label>
        <div className={num.min}>
        <p className={num.text}>min</p>
        <div className={num.divInput}>
        <input
          className={num.input}
          name="life_spanA"
          value={input.life_spanA}
          type="number"
          onChange={inputText}
        />
          <p>years.</p>
        </div>
        
        </div>
        <div className={num.max}>
          <p className={num.text}>max</p>
          <div className={num.divInput}>
          <input
          className={num.input}
          name="life_spanB"
          value={input.life_spanB}
          type="number"
          onChange={inputText}
        /><p>years.</p>
          </div>
        
        </div>
        
        
        </div>
        
      </div>      
      <div className={temp.container}>
        <label className={temp.title}>Temperaments:</label>
        
        {temperaments?.length && <div className={temp.temps} >
           {temperaments.map(d=>{          
          count ++        
    return<button className={temp.pills} key={count} onClick={(e)=>changeTemp(e,d.id)}>
      {d.name}
    </button>
  })}</div>}
  {<div className={temp.selected}>
  {temperaments?.length&&temperaments.map(d=>{          
          count ++   
          let a= tempFilter.find(e=>e===d.id)    
    return<button key={count}  className={a?temp.pills:temp.none}  onClick={(e)=>changeTemp(e,d.id)}>
      {d.name}
    </button>
  })}
  </div>} 
        <input
        className={btn.btnForm}
          type="button"
          value="submit"
          href="/home/pag/1"
          onClick={(e) => postDog(e)}
        />
      </div>
    </form>
  </div>
    
  );
}
//en el submit tiene que hacer un post a 3001/addRecipe
