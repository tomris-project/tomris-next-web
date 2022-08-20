import { useRef, useState } from "react"
import { IInputRef, IButtonRef, WebApi, FormRef } from "tomris-web-api/components"
const PageUseScreen = () => {
  let form = useRef<FormRef>(null);

  let useForm = WebApi.Form.useForm();
  let useScreen = WebApi.Screen.useScreen();
  const options = [
    { value: 'chocolate', label: 'Chocolate', data: { a: "baba" } },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  return <>
  <useScreen.View screencode="SCRCODE" responsiveSize={{col:2}}>
      <useForm.View name="Form" responsiveSize={{ col: 4 }}  >
        <WebApi.Button id="btn1" label="GETDATA" icon={{ iconName: WebApi.IconName.AlignJustify }}
          onClick={() => {
            console.log(useScreen.getValues()) 
          }} />
        <WebApi.Button id="btn2" label="GETDATA" icon={{ iconName: WebApi.IconName.AlignJustify }}
          onClick={() => {
            console.log(useForm.getValues());
          }} />
        <WebApi.Button id="btn3" label="isValid" icon={{ iconName: WebApi.IconName.AlignJustify }} spacer
          onClick={() => {
            console.log(useScreen.isValid());
          }} />
        <WebApi.Select id="select1"   isClearable isSearchable label="selam 1" defaultValue={{ value: 'vanilla', label: 'Vanilla' }} options={options}  onValid={[(e) => { return { IsValid:e.getValue()!=null && e.getValue().value == "chocolate", ValidText: "chocolate select" } }]}      />
        <WebApi.Input id="input1" label="input1" type="textarea" />
        <WebApi.Checkbox id="Checkbox" label="input1" defaultValue={true}
          onValid={[(e) => { return { IsValid: e.getValue() == true, ValidText: "SEC select" } }]}
        /> 
      </useForm.View>


      <WebApi.Form.FormView ref={form} name="Form2" responsiveSize={{ col: 4 }}  >
        <WebApi.Button id="btn1" label="GETDATA" icon={{ iconName: WebApi.IconName.AlignJustify }}
          onClick={() => {
            console.log(useScreen.getValues()) 
          }} />
        <WebApi.Button id="btn2" label="GETDATA" icon={{ iconName: WebApi.IconName.AlignJustify }}
          onClick={() => {
            console.log(form?.current?.getValues());
          }} />
        <WebApi.Button id="btn3" label="isValid" icon={{ iconName: WebApi.IconName.AlignJustify }} spacer
          onClick={() => {
            console.log(useScreen.isValid());
          }} />
        <WebApi.Select id="select1"   isClearable isSearchable label="selam 1" defaultValue={{ value: 'vanilla', label: 'Vanilla' }} options={options}  onValid={[(e) => { return { IsValid:e.getValue()!=null && e.getValue().value == "chocolate", ValidText: "chocolate select" } }]}      />
        <WebApi.Input id="input1" label="input1" type="textarea" />
        <WebApi.Checkbox id="Checkbox" label="input1" defaultValue={true}
          onValid={[(e) => { return { IsValid: e.getValue() == true, ValidText: "SEC select" } }]}
        /> 
      </WebApi.Form.FormView>
    </useScreen.View>
  </>
}

export default PageUseScreen
