import { WebApi } from "tomris-web-api"
const PageDate = () => {  
    return <> 
        <WebApi.Controller.Date id="time" type={"time"} label="time" placeholder="time" enableSeconds onValid={(e) => { return { IsValid: false, ValidText: "selam1" } }} />
        <WebApi.Controller.Date id="daterenage" type={"date"} mode={"range"} label="daterenage" disabled/>
        <WebApi.Controller.Date id="date" type={"date"} label="date" />
        <WebApi.Controller.Date id="datetime" type={"datetime"} enableSeconds label="datetime" />
        <WebApi.Controller.Date id="datetimerange" type={"datetime"} mode={"range"} enableSeconds label="datetimerange" />
        <WebApi.Controller.Input id="TEXTDATA" disabled label="TEXTDATA" onValid={(e) => { return { IsValid: false, ValidText: "selam1" } }} />
    </>
}

export default PageDate
