import React,{useEffect,useState} from "react" 
import {  useParams } from "react-router-dom";
import axios from "axios";
function CountryDetails(){
   var {cname}=useParams();
   var [details,setDetails]=useState(null)
   useEffect(()=>{
      axios.get(`https://restcountries.com/v3/name/${cname}`).then((res)=>{
         console.log(details)
         setDetails({...res.data[0]}) 
   })
   },[])   
   return <div align="center" className=" border border-2 bg-info">
         <h2>CountryDetails{JSON.stringify(details?.name?.common)}</h2> 
          <h2>CountryDetails{JSON.stringify(details?.capital[0])}</h2> 
         <img src={details?.flags[1]} alt=""width="500px"/>

      </div>
}
export default CountryDetails                                 