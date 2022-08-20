import { useRef, useState } from "react"
import { IInputRef, IButtonRef, WebApi, FormRef } from "tomris-web-api/components"
const Home = () => {
  let ref = useRef<IInputRef>(null);
  let form = useRef<FormRef>(null);
  let ref2 = useRef<IButtonRef>(null);

  let useForm=WebApi.Form.useForm();

  console.log("start", form);
  return <>
 
    <useForm.View name="Form1"  responsiveSize={{ col: 4 }} responsive={{ lg: 8, md: 8, sm: 8, xl: 8, xs: 8 }}>
      <WebApi.Button id="btn" ref={ref2} label="btn1 HIDE" icon={{ iconName: WebApi.IconName.AlignJustify }}
        onClick={() => {

          console.log(useForm.getValues()) 
          return
          form.current?.getBaseController("name1").setHide();
          form.current?.getBaseController("name2").setHide();
        }} />
      <WebApi.Button id="btn2" ref={ref2} label="GETDATA" icon={{ iconName: WebApi.IconName.AlignJustify }}
        onClick={() => {
          console.log(form.current?.getValues());
        }} />
      <WebApi.Button id="btn3" ref={ref2} label="isValid" icon={{ iconName: WebApi.IconName.AlignJustify }}
        onClick={() => {
          console.log(useForm.isValid());
        }} />
      <WebApi.Input ref={ref} id="name1" label="label1" defaultValue={"a"}   onValid={[(e) => { return { IsValid: e.getValue().length > 3, ValidText: "error1" } }, (e) => { return { IsValid: e.getValue() != "SALTUK", ValidText: "SALTUK" } }]}/>
      <WebApi.Input id="name2" onValid={[(e) => { return { IsValid: e.getValue().length > 3, ValidText: "error1" } }, (e) => { return { IsValid: e.getValue() != "SALTUK", ValidText: "SALTUK" } }]} label={"name2"} defaultValue={"asd"} />
      <WebApi.Input id="name3" label="name3" defaultValue={"name3"} bsSize={"sm"} responsive={{ lg: 12, md: 12, sm: 12, xl: 12, xs: 12 }} />
      <WebApi.Input id="name4" label="name4" defaultValue={"name4"} bsSize={"sm"} spacer />
      <WebApi.Input id="name5" label="name5" defaultValue={"name5"} bsSize={"sm"} />
      <WebApi.Input id="name6" label="name6 spacer" defaultValue={"name6"} bsSize={"sm"} spacer />
      <WebApi.Input id="name7" label="name7" defaultValue={"name7"} bsSize={"sm"} />

    </useForm.View> 
  </>
}

export default Home
