import { useRef, useState } from "react"
import { IInputRef, IButtonRef, WebApi, FormRef } from "tomris-web-api/components"
const PageComponents = () => {
  let form = useRef<FormRef>(null);

  let useForm = WebApi.Form.useForm();
  const options = [
    { value: 'chocolate', label: 'Chocolate', data: { a: "baba" } },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  return <>
    <useForm.View name="Form1" responsiveSize={{ col: 4 }} responsive={{ lg: 8, md: 8, sm: 8, xl: 8, xs: 8 }}>
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
      <WebApi.Select id="select1" isMulti isClearable isSearchable label="selam 1" defaultValue={{ value: 'vanilla', label: 'Vanilla' }} options={options}  onValid={[(e) => { return { IsValid:e.getValue()!=null && e.getValue().value == "chocolate", ValidText: "chocolate select" } }]}      />
      <WebApi.Input id="input1" label="input1" type="textarea" />
      <WebApi.Checkbox id="Checkbox" label="input1" defaultValue={true}
        onValid={[(e) => { return { IsValid: e.getValue() == true, ValidText: "SEC select" } }]}
      />

    </useForm.View>
  </>
}

export default PageComponents
