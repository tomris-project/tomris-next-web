import { useRef, useState } from "react"
import { WebApi } from "tomris-web-api" 
 
const Home = () => { 

  // WebApi.PageContext.set("key1",{A:1,B:2})
  // let data=WebApi.PageContext.get("key1");
  // console.log(data);
  let SampleScreen =[
    { test:"components",page:"testPage/components"},
    { test:"useForm",page:"testPage/useForm"},
    { test:"useScreen",page:"testPage/useScreen"},
    { test:"date",page:"testPage/date"},
    { test:"datatable",page:"testPage/datatable"},
    { test:"datatable Modal Edit Page",page:"testPage/datatableEditPage"},
    { test:"icons",page:"testPage/icons"},
    { test:"tab",page:"testPage/tab"},
    { test:"modal",page:"testPage/modal"},
    { test:"autorender",page:"testPage/autorender"},
  ]
  return <><WebApi.View responsiveSize={{col:2}}>{SampleScreen.map((e,index)=>{ return <p key={index}><a target={"_blank"} href={e.page}>{e.test}</a></p>}) }</WebApi.View> </>
}
export default Home