import { useEffect, useState } from 'react';
export default function Header({category, setNum}){
return(
    <div id='header'>
   <label>1-40.01.01.08</label>
    <select onChange={(e)=>{
    category(e.target.value);
    setNum(0);
    }}>
    {/* <option value="taj">Тажикский(1 курс)</option>
    <option value="slog">Сотсиология</option>
    <option value="taj9">Тажикский(9 клас)</option>
    <option value="chem">Химия(9 клас)</option>
    <option value="bio">Биология(9 клас)</option> */}
    <option value="cloud">Технологияи абри</option>
    <option value="economy">Назарияи Иктисоди</option>
   </select>
   </div>
    );
}