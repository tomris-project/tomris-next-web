import { useRef } from "react"
import {    IDateRef, WebApi } from "tomris-web-api" 
const PageDate = () => {  

    let refData=useRef< IDateRef >(null);
    
    return <>  
    <button onClick={()=>{
        console.log(refData.current?.getValue());
        console.log(refData.current?.setValue({StartDate: '10:00:00', StopDate: '12:00:00'}));
        
        
    }}>ss</button>
        <WebApi.Controller.Date id="time" ref={refData} type={"time"} label="time" mode={"range"}  placeholder="time" enableSeconds  />
        <WebApi.Controller.Date id="daterenage" type={"date"} mode={"range"} label="daterenage" disabled onValid={(e) => { return { IsValid: false, ValidText: "selam1" } }} />
        <WebApi.Controller.Date id="date" type={"date"} label="date" />
        <WebApi.Controller.Date id="datetime" type={"datetime"} enableSeconds label="datetime" />
        <WebApi.Controller.Date id="datetimerange" type={"datetime"} mode={"range"} enableSeconds label="datetimerange" />
        <WebApi.Controller.Input id="TEXTDATA" disabled label="TEXTDATA" onValid={(e) => { return { IsValid: false, ValidText: "selam1" } }} />
    </>
}

export default PageDate
