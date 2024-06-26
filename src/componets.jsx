import React, { useEffect} from "react";
import axios from "axios"
import { Link } from "react-router-dom";
function Counteries(){
    var [countries,setCountries]=React.useState([]);
    useEffect(()=>{
        axios.get("https://restcountries.com/v3.1/all").then(res=>setCountries([...res.data]))

    },[])
    return ( 
    <div>
           <h1>Counteries</h1>
           {
            countries?.map((c)=>{
                return <li>
                    <Link to={`/CountryDetails/${c.name.common}`}>{c.name.common}</Link>
                    </li>
            })
           }
            </div>
    )
    
}
export default Counteries