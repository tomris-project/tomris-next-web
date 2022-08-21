import { useRef, useState } from "react"
import { IInputRef, IButtonRef, WebApi, FormRef } from "tomris-web-api"
const PageComponents = () => {
  let form = useRef<FormRef>(null);

  let useForm = WebApi.Form.useForm();
  const options = [
    { value: 'chocolate', label: 'Chocolate', data: { a: "baba" } },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  return <>
    <useForm.View name="Form1" responsiveSize={{ col: 4 }} >
      <WebApi.Button id="btn1" label="btn1 HIDE" icon={{ iconName: WebApi.IconName.AlignJustify }}
        onClick={() => {
          console.log(useForm.getValues())
          return
          form.current?.getBaseController("name1").setHide();
          form.current?.getBaseController("name2").setHide();
        }} />
      <WebApi.Button id="btn2" label="GETDATA" icon={{ iconName: WebApi.IconName.AlignJustify }}
        onClick={() => {
          console.log(form.current?.getValues());
        }} />
      <WebApi.Button id="btn3" label="isValid" icon={{ iconName: WebApi.IconName.AlignJustify }} spacer
        onClick={() => {
          console.log(useForm.isValid());
        }} />
      <WebApi.Controller.Select id="select1" isMulti isClearable isSearchable label="selam 1" defaultValue={{ value: 'vanilla', label: 'Vanilla' }} options={options} onValid={[(e) => { return { IsValid: e.getValue() != null && e.getValue().value == "chocolate", ValidText: "chocolate select" } }]} />
      <WebApi.Controller.Input id="input1" label="input1" type="textarea" />
      <WebApi.Controller.Checkbox id="Checkbox" label="input1" defaultValue={false}
        onValid={[(e) => { return { IsValid: e.getValue() == true, ValidText: "SEC select" } }]}
      />
      <WebApi.Controller.Date id="time" type={"time"} label="time" placeholder="time" enableSeconds onValid={(e) => { return { IsValid: false, ValidText: "selam1" } }} />
      <WebApi.Controller.Date id="daterenage" type={"date"} mode={"range"} label="daterenage" disabled />
      <WebApi.Controller.Date id="date" type={"date"} label="date" />
      <WebApi.Controller.Date id="datetime" type={"datetime"} enableSeconds label="datetime" />
      <WebApi.Controller.Date id="datetimerange" type={"datetime"} mode={"range"} enableSeconds label="datetimerange" />

    </useForm.View>
  </>
}

export default PageComponents
