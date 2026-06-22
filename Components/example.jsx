import { useEffect, useState } from "react";

export default  function Example({data, current, setCurrent}){
//Constantinos;)
const [correct, setCorrect]=useState(false);
const [active , setActive]=useState(false);
// const [current, setCurrent]=useState(0);
const[jDurust, setjDurust]=useState(0);
const[JNodurust, setNodurust]=useState(0);
const[select, setSelect]=useState();
const question = data[current];
const MixedAnswers=Aralash(question.answers);
useEffect(()=>{
    if(correct){
       let id= setTimeout(()=>{
       setCorrect(false);
        },750);
        return ()=>clearTimeout(id)}
},[correct]);
useEffect(()=>{
if(select==='random')
    MaketRandom();
},[select]);
//Fucktions;)
function MaketRandom(){
    let num= Math.floor(Math.random()* data.length);
    setCurrent(num);
}
function Aralash(array){
 const arr=[...array];
 for(let i=arr.length-1; i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [arr[i], arr[j]]=[arr[j],arr[i]];
 }
 return arr;
}
function Check(eve){
 if(eve===question.correct){
    setCorrect(true);
    setCurrent(current+1) 
    setjDurust(jDurust+1)
 }
 else{
    setActive(true);
  setNodurust(JNodurust+1)
}
    }
    return(<>
    <div id="div">
     {active&&(
       <div id="modal">
        <h1>Ҷавоби нодуруст!!</h1>
            <p>Савол чунин буд: " {question.question} "</p>
            <p>Ҷавоби Дуруст <strong>" {question.correct} "</strong> </p>
            <button onClick={()=>{
              setActive(false);
              if(select==='random')
               MaketRandom();
            else
              setCurrent(current+1)

            }}style={{width:"50%"}} >Понятно</button>
      </div>
     )}
     {correct&&(<div id="modal1"><h1>Ҷавоби Дуруст✔!!</h1></div>)}
      <div id="info">Вопрос {current+1} из {data.length}
      <div>
      <select onChange={(e)=>{setSelect(e.target.value)}}>
        <option value="once">по порядку</option>
        <option value="random">рандомный</option>
      </select></div>
      </div>
      <h1>{question.question}</h1>
     {MixedAnswers.map(el=>(
        <button onClick={()=>Check(el)}>{el}</button>
      ))}
      <div id="buttons">
       <button onClick={()=>setCurrent(current-1)} disabled={current === 0? true:false}>⬅</button>
       <button onClick={()=>setCurrent(current+1)}  disabled={current===data.length-1? true :false}>➡</button>
      </div>
    </div>
    <table border="1px" style={{borderCollapse:"collapse", width:"70vw", fontWeight:"bolder"}}>
    <thead>
        <tr>
            <th>Правильно</th>
            <th>Неправильно</th>
            <th>Тотал</th>
        </tr>
    </thead>
    <tbody>
        <tr >
            <th>{jDurust}</th>
            <th>{JNodurust}</th>
            <th> {jDurust+JNodurust} ответов</th>
        </tr>
    </tbody>
</table>
    </>
    
 
    )
}