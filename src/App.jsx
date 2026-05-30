import { useState } from "react";
import Example from "../Components/example";
import Header from "../Components/header";
import taj from "../Jsons/tojiki.json";
import taj9 from "../Jsons/tojikitest9.json";
import slog from "../Jsons/sotsologiya.json";
import Footer from "../Components/footer";
import "../src/Styles/exam.css";

function App(){
  const[data1, setdata]=useState("taj");
  const [num, setNum]=useState(0);
const datafile={
  taj,
  taj9,
  slog
}
return (
<>
<Header category={setdata} setNum={setNum}/>
<Example data={datafile[data1]} current={num} setCurrent={setNum}/>
<Footer/>
</>
  )
}
export default App;