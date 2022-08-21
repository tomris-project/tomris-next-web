import { useRef, useState } from "react"
import { WebApi } from "tomris-web-api" 
 
const Home = () => {
  let SampleScreen =[
    { test:"components",page:"testPage/components"},
    { test:"useForm",page:"testPage/useForm"},
    { test:"useScreen",page:"testPage/useScreen"},
    { test:"date",page:"testPage/date"},
    { test:"icons",page:"testPage/icons"},
  ]
  return <><WebApi.View responsiveSize={{col:2}}>{SampleScreen.map((e,index)=>{ return <p key={index}><a target={"_blank"} href={e.page}>{e.test}</a></p>}) }</WebApi.View> </>
}
export default Home